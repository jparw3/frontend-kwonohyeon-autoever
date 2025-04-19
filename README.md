# 현대오토에버 지원자 권오연

마미톡 쇼핑몰 상품 목록 구현

## 배포 링크

[사전과제 배포 링크 바로가기](https://fancy-gnome-b38a02.netlify.app/)

![시연 영상](./src/assets/kia-flow.gif)

## 기술 스택

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Saas](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 파일 구조

```
/src
  /api: API 요청 관련 코드
  /assets: 이미지, 아이콘 등 정적 파일
  /contexts: React Context API로 관리하는 전역 상태
  /features: 재사용 가능한 기능 단위 컴포넌트
  /hooks: Tanstack Query Hooks
  /mocks: MSW로 만든 mock 서버
  /pages: 라우트별 페이지 컴포넌트
  /shared: 공통으로 사용되는 컴포넌트, 훅, 유틸리티 함수
  /styles: 전역 스타일 관련 파일
```

## 구현 사항

### 1️⃣ 검색 기능 구현

- 검색 후 카테고리 필터 변경 시에도 해당 필터

## 추가로 고려한 사항

- 에러 바운더리 적용
  ![에러 화면](./src/assets/error-view.png)

- Context API 활용으로 UI 관련 변수 (스크롤 여부, Header 모바일 메뉴 상태 등) 전역 관리
  - 스크롤 이벤트 리스너를 한 곳에서 관리해 성능 개선
- util 함수 제작으로 재사용성 향상
- 오픈그래프 이미지 및 설명 적용
- 절대 경로 사용으로 유지보수성 향상
