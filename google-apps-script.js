// Google Apps Script 코드
// Google Sheets를 데이터베이스로 사용하기 위한 백엔드 코드
// 
// 사용 방법:
// 1. Google Drive에서 새 스프레드시트 생성
// 2. 확장 프로그램 > Apps Script 메뉴 선택
// 3. 아래 코드를 붙여넣기
// 4. 배포 > 새 배포 > 웹 앱으로 배포
// 5. 액세스 권한: "모든 사용자"로 설정
// 6. 배포 후 받은 URL을 Guestbook.tsx의 SCRIPT_URL에 입력

// 스프레드시트 설정
const SHEET_NAME = 'Messages'; // 시트 이름
const COLUMNS = {
  TIMESTAMP: 0,
  NAME: 1,
  MESSAGE: 2,
  PASSWORD: 3
};

// 스프레드시트 가져오기
function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // 시트가 없으면 생성
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // 헤더 추가
    sheet.appendRow(['Timestamp', 'Name', 'Message', 'Password']);
  }
  
  return sheet;
}

// GET 요청 처리 - 메시지 목록 조회
function doGet(e) {
  try {
    const sheet = getSheet();
    const data = sheet.getDataRange().getValues();
    
    // 헤더 제외하고 데이터만 가져오기
    const messages = data.slice(1).map(row => ({
      timestamp: row[COLUMNS.TIMESTAMP],
      name: row[COLUMNS.NAME],
      message: row[COLUMNS.MESSAGE],
      // 보안을 위해 비밀번호는 클라이언트에 전송하지 않음
    })).reverse(); // 최신순 정렬
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        messages: messages
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// POST 요청 처리 - 메시지 추가 및 삭제
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet();
    
    // 메시지 추가
    if (data.action === 'add') {
      const timestamp = new Date();
      const name = data.name;
      const message = data.message;
      const password = hashPassword(data.password); // 비밀번호 해싱
      
      sheet.appendRow([timestamp, name, message, password]);
      
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'success',
          message: 'Message added successfully'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // 메시지 삭제
    if (data.action === 'delete') {
      const allData = sheet.getDataRange().getValues();
      const rowIndex = data.index + 2; // 헤더(1) + 인덱스 조정
      const reversedIndex = allData.length - data.index; // 역순 인덱스 계산
      
      if (reversedIndex > 0 && reversedIndex < allData.length) {
        const storedPassword = allData[reversedIndex][COLUMNS.PASSWORD];
        const inputPassword = hashPassword(data.password);
        
        if (storedPassword === inputPassword) {
          sheet.deleteRow(reversedIndex + 1);
          
          return ContentService
            .createTextOutput(JSON.stringify({
              status: 'success',
              message: 'Message deleted successfully'
            }))
            .setMimeType(ContentService.MimeType.JSON);
        } else {
          return ContentService
            .createTextOutput(JSON.stringify({
              status: 'error',
              message: 'Incorrect password'
            }))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Invalid action'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 간단한 비밀번호 해싱 (보안을 위해)
function hashPassword(password) {
  const hash = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    password,
    Utilities.Charset.UTF_8
  );
  return hash.map(byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
}
