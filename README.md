# 개발 환경

-   Node.js 22.14.0 (root에 nvmrc 파일 추가. 여러 node 버전 사용 시 root에서 nvm use 명령어 실행)
-   React 19.1.0
-   Typescript
-   Vite
-   React Query
-   Zustand
-   Axios
-   yarn

## 코드 규칙

-   ESLint (.eslint.config.js)
-   Prettier (.prettierrc)

## 폴더 구성

-   assets (이미지, 폰트)
-   components (컴포넌트)
-   context (콘텍스트)
-   hooks (커스텀 훅)
-   pages (라우팅 페이지)
-   services (api 호출 로직)
-   stores (상태관리)
-   styles (scss파일 관리)
    -   abstracts : 변수,함수,믹스인 등
    -   base : 리셋,정규화,기타
    -   components : 컴포넌트별 scss
    -   layout : 네이게이션, 그리드, 헤더, 사이드바 등
    -   pages : 페이지별 scss
    -   index.scss : 메인 scss파일
-   types (typescript 타입정의)
-   utils (유틸리티 함수)

## git Branch

-   production : 운영배포 브랜치
-   master: 개발 최종 브랜치
-   etc: fix, dev, 기타 브랜치
-   브랜치 관리 : etc(개발) -> master 머지 -> 테스트 -> production 머지 -> 배포
