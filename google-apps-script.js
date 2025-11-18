// Google Apps Script 코드 - 삭제 기능 수정 버전

const SHEET_NAME = 'Messages';
const COLUMNS = {
  TIMESTAMP: 0,
  NAME: 1,
  MESSAGE: 2,
  PASSWORD: 3
};

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Message', 'Password']);
  }
  
  return sheet;
}

// GET 요청 처리
function doGet(e) {
  try {
    const sheet = getSheet();
    const data = sheet.getDataRange().getValues();
    
    // 헤더 제외하고 데이터만 가져오기
    const messages = data.slice(1).map((row, index) => ({
      timestamp: row[COLUMNS.TIMESTAMP],
      name: row[COLUMNS.NAME],
      message: row[COLUMNS.MESSAGE],
      rowIndex: index + 2 // 실제 시트의 행 번호 (헤더가 1행이므로 +2)
    })).reverse(); // 최신순 정렬
    
    const output = JSON.stringify({
      status: 'success',
      messages: messages
    });
    
    return ContentService
      .createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    const output = JSON.stringify({
      status: 'error',
      message: error.toString()
    });
    
    return ContentService
      .createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// POST 요청 처리
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet();
    
    // 메시지 추가
    if (data.action === 'add') {
      const timestamp = new Date();
      const name = data.name;
      const message = data.message;
      const password = hashPassword(data.password);
      
      sheet.appendRow([timestamp, name, message, password]);
      
      const output = JSON.stringify({
        status: 'success',
        message: 'Message added successfully'
      });
      
      return ContentService
        .createTextOutput(output)
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 메시지 삭제
    if (data.action === 'delete') {
      const rowIndex = data.rowIndex; // 프론트엔드에서 전달받은 실제 행 번호
      const password = data.password;
      
      Logger.log('Delete request - rowIndex: ' + rowIndex);
      
      const allData = sheet.getDataRange().getValues();
      Logger.log('Total rows: ' + allData.length);
      
      // rowIndex는 실제 시트의 행 번호 (1-based)
      // allData는 0-based 배열
      if (rowIndex >= 2 && rowIndex <= allData.length) {
        const storedPassword = allData[rowIndex - 1][COLUMNS.PASSWORD];
        const inputPassword = hashPassword(password);
        
        Logger.log('Stored password: ' + storedPassword);
        Logger.log('Input password: ' + inputPassword);
        
        if (storedPassword === inputPassword) {
          sheet.deleteRow(rowIndex);
          
          const output = JSON.stringify({
            status: 'success',
            message: 'Message deleted successfully'
          });
          
          return ContentService
            .createTextOutput(output)
            .setMimeType(ContentService.MimeType.JSON);
        } else {
          const output = JSON.stringify({
            status: 'error',
            message: 'Incorrect password'
          });
          
          return ContentService
            .createTextOutput(output)
            .setMimeType(ContentService.MimeType.JSON);
        }
      } else {
        const output = JSON.stringify({
          status: 'error',
          message: 'Invalid index: rowIndex=' + rowIndex + ', totalRows=' + allData.length
        });
        
        return ContentService
          .createTextOutput(output)
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    const output = JSON.stringify({
      status: 'error',
      message: 'Invalid action'
    });
    
    return ContentService
      .createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    const output = JSON.stringify({
      status: 'error',
      message: error.toString()
    });
    
    return ContentService
      .createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function hashPassword(password) {
  const hash = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    password,
    Utilities.Charset.UTF_8
  );
  return hash.map(byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}