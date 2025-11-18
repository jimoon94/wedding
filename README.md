# 모바일 청첩장 💒

문지선 ❤️ 강은성 결혼식 모바일 청첩장

## 🎉 결혼식 정보

- **날짜**: 2026년 8월 1일 토요일
- **시간**: 오후 6시 30분
- **장소**: 더 바실리움 웨딩홀 (경기도 성남시 분당구 야탑동)

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 📁 프로젝트 구조

```
wedding-invitation/
├── app/
│   ├── layout.tsx        # 메인 레이아웃
│   ├── page.tsx          # 홈페이지
│   └── globals.css       # 전역 스타일
├── components/
│   ├── Hero.tsx          # 메인 타이틀
│   ├── Greeting.tsx      # 결혼 감사 문구
│   ├── Gallery.tsx       # 웨딩 사진 갤러리
│   ├── WeddingInfo.tsx   # 결혼식 정보 및 양가 부모님
│   ├── Location.tsx      # 오시는 길
│   ├── AccountInfo.tsx   # 계좌번호 안내
│   ├── Guestbook.tsx     # 축하 메시지
│   └── Footer.tsx        # 푸터
├── public/
│   ├── photos/           # 웨딩 사진들
│   └── hero-bg.jpg       # 메인 배경 이미지
└── google-apps-script.js # 구글 시트 백엔드 코드
```

## 🎨 주요 기능

### 1. 메인 페이지
- 우아한 타이틀 애니메이션
- 결혼식 날짜 및 장소 표시
- 스크롤 다운 아이콘

### 2. 결혼 감사 문구
- 감동적인 인사말
- 성경 구절 인용

### 3. 웨딩 사진 갤러리
- Swiper를 이용한 슬라이드 쇼
- 자동 재생 및 수동 네비게이션
- 썸네일 클릭으로 특정 사진 이동
- 6장의 사진 지원 (더 추가 가능)

### 4. 결혼식 정보
- 실시간 카운트다운 타이머
- 양가 부모님 성함 및 연락처
- 신랑/신부 정보

### 5. 오시는 길
- 네이버 지도 통합
- 주소 복사 기능
- 네이버 지도/카카오맵 바로가기
- 지하철, 버스, 주차 안내

### 6. 계좌번호 안내
- 아코디언 방식으로 신랑측/신부측 분리
- 계좌번호 복사 기능
- 카카오페이 바로가기 (선택사항)

### 7. 축하 메시지
- 구글 시트를 데이터베이스로 사용
- 실시간 메시지 등록/조회
- 비밀번호 보호 삭제 기능

## 🔧 커스터마이징 가이드

### 1. 사진 교체하기

`public/photos/` 폴더에 웨딩 사진을 추가하세요:
- photo1.jpg ~ photo6.jpg
- 필요한 만큼 사진 추가 가능

`components/Gallery.tsx`에서 사진 배열 수정:

```typescript
const photos = [
  { id: 1, src: '/photos/photo1.jpg', alt: '웨딩 사진 1' },
  { id: 2, src: '/photos/photo2.jpg', alt: '웨딩 사진 2' },
  // 사진 추가...
]
```

### 2. 부모님 정보 수정

`components/WeddingInfo.tsx`에서 부모님 성함을 실제 이름으로 변경하세요.

### 3. 계좌번호 설정

`components/AccountInfo.tsx`에서 계좌 정보 수정:

```typescript
const accounts = {
  groom: [
    {
      name: '강은성',
      relation: '신랑',
      bank: '신한은행',
      accountNumber: '110-123-456789',
      kakaopayLink: 'https://qr.kakaopay.com/example1',
    },
    // ...
  ],
  // ...
}
```

### 4. 구글 시트 설정 (축하 메시지)

#### 단계 1: 구글 스프레드시트 생성
1. Google Drive에서 새 스프레드시트 생성
2. 시트 이름을 "Messages"로 변경

#### 단계 2: Apps Script 설정
1. 확장 프로그램 > Apps Script 선택
2. `google-apps-script.js` 파일의 코드 복사
3. Apps Script 편집기에 붙여넣기
4. 저장

#### 단계 3: 웹 앱 배포
1. 배포 > 새 배포 선택
2. 유형: 웹 앱
3. 다음 사용자로 실행: 나
4. 액세스 권한: "모든 사용자"
5. 배포 클릭

#### 단계 4: URL 설정
배포 후 받은 URL을 `components/Guestbook.tsx`의 `SCRIPT_URL`에 입력:

```typescript
const SCRIPT_URL = '여기에_Apps_Script_웹앱_URL_입력'
```

#### ⚠️ 네트워크 오류 해결 방법

구글 시트 연결 시 네트워크 오류가 발생하는 경우 다음을 확인하세요:

1. **구글 앱스 스크립트 배포 확인**
   - 배포 > 배포 관리에서 최신 배포가 활성화되어 있는지 확인
   - 배포 버전이 "새 버전"으로 설정되어 있는지 확인

2. **액세스 권한 확인**
   - 배포 설정에서 "액세스 권한"이 **"모든 사용자"**로 설정되어 있는지 확인
   - "나"로만 설정되어 있으면 외부에서 접근할 수 없습니다

3. **URL 확인**
   - `SCRIPT_URL`이 정확한지 확인 (URL 끝에 `/exec`가 포함되어야 함)
   - 브라우저에서 직접 URL을 열어서 JSON 응답이 오는지 확인

4. **스프레드시트 권한 확인**
   - 구글 스프레드시트의 공유 설정이 올바른지 확인
   - Apps Script가 스프레드시트에 접근할 수 있는 권한이 있는지 확인

5. **브라우저 콘솔 확인**
   - 개발자 도구(F12) > Console 탭에서 자세한 에러 메시지 확인
   - Network 탭에서 요청이 실패하는지 확인

6. **코드 재배포**
   - Apps Script 코드를 수정한 경우 반드시 새 버전으로 재배포해야 합니다
   - 배포 > 새 배포 > 버전: "새 버전" 선택 후 배포

#### 🔴 "Failed to fetch" 오류 해결 방법

"Failed to fetch" 오류가 발생하는 경우, 다음을 순서대로 확인하세요:

1. **가장 중요: 배포 설정 확인**
   ```
   구글 앱스 스크립트 편집기에서:
   1. 배포 > 배포 관리 클릭
   2. 활성 배포 옆의 연필 아이콘(편집) 클릭
   3. "액세스 권한" 확인:
      ✅ "모든 사용자"로 설정되어 있어야 함
      ❌ "나"로 설정되어 있으면 외부 접근 불가
   4. "다음 사용자로 실행"은 "나"로 설정
   5. 저장 후 새 버전으로 배포
   ```

2. **URL 직접 테스트**
   - 브라우저에서 다음 URL을 직접 열어보세요:
     ```
     https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=get
     ```
   - JSON 응답이 보이면 정상, 오류가 나오면 배포 설정 문제

3. **스프레드시트 공유 설정**
   - 구글 스프레드시트를 열고
   - 우측 상단 "공유" 버튼 클릭
   - "링크가 있는 모든 사용자" 또는 "모든 사용자"로 설정

4. **Apps Script 권한 확인**
   - Apps Script 편집기에서 처음 실행 시 권한 요청이 나타날 수 있습니다
   - "권한 검토" > "계속" > 계정 선택 > "허용" 클릭

5. **캐시 문제 해결**
   - 브라우저 캐시 삭제 (Ctrl+Shift+Delete 또는 Cmd+Shift+Delete)
   - 시크릿 모드에서 테스트

6. **네트워크 확인**
   - 방화벽이나 보안 소프트웨어가 차단하는지 확인
   - 다른 네트워크에서 테스트

### 5. 구글 지도 설정 (iframe 방식)

구글 지도 API 키 없이 iframe으로 지도를 표시할 수 있습니다.

#### 방법 1: 구글 지도에서 직접 iframe 코드 얻기 (권장)

1. 구글 지도에서 결혼식장 검색 (예: "더 바실리움")
2. 검색 결과에서 해당 장소 클릭
3. 우측 상단 "공유" 버튼 클릭
4. "지도 퍼가기" 선택
5. iframe 코드에서 `src` 속성의 URL 복사
6. `components/Location.tsx`의 `mapIframeUrl`에 붙여넣기:

```typescript
const mapIframeUrl = '복사한_iframe_URL'
```

> **참고**: iframe 방식을 사용하면 API 키가 필요 없고 설정이 간단합니다.

### 6. 색상 테마 변경

`tailwind.config.js`에서 색상 수정:

```javascript
colors: {
  primary: '#8B7355',    // 주 색상
  secondary: '#D4AF7A',  // 보조 색상
  accent: '#F5E6D3',     // 강조 색상
}
```

## 🌐 배포하기 (Vercel)

### Vercel에 배포하는 방법

1. [Vercel](https://vercel.com)에 가입
2. GitHub에 프로젝트 업로드
3. Vercel에서 "New Project" 클릭
4. GitHub 저장소 선택
5. 자동 배포 시작

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 📱 모바일 최적화

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 터치 제스처 지원
- 빠른 로딩 속도
- SEO 최적화

## 🎯 기술 스택

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Slider**: Swiper
- **Maps**: Naver Maps API
- **Database**: Google Sheets (Google Apps Script)
- **Deployment**: Vercel

## 📝 라이선스

개인 용도로 자유롭게 사용 가능합니다.

## 💝 문의사항

질문이나 도움이 필요하시면 언제든 연락주세요!

---

**Made with ❤️ for 문지선 & 강은성**
