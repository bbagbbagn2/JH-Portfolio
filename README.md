# PJH-Portfolio(ver1.0, 2.0)

## 프로젝트 정보

### 개발기간
<p>
  ver1.0 : 2023.03 ~ 2023.04 약 1개월 소요<br/>
  ver2.0 : 2023.10 ~ 2023.12 약 2개월 소요
</p>

### 배포 주소
ver2.0 : https://pjh-portfolio.netlify.app/

### 프로젝트 소개
<p>
  React를 활용해 개발한 저의 웹 포트폴리오입니다.<br/><br/>
</p>

## 시작 가이드

### Installation
```bash
$ git clone https://github.com/bbagbbagn2/JH-Portfolio.git
```

### Frontend
```
npm install
npm run start
```
<br/><br/>

## Stacks

### Environment
<p>
  <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-000000?style=flat-square&logo=GitHub&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/>
</p>

### Config
<p>
  <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white"/>
</p>

### Development
<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-1976D2?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/><br/><br/>
</p>

## 아키텍처

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── tsconfig.paths.json : tsconfig.json 파일 중 절대경로를 위해 baseUrl, paths를 분리한 파일 
├── tsconfig.json
├── craco.config.js
├── .prettierre.js
└── src
    ├── assets
    │   └── brand
    │       └── logos
    ├── components
    │   ├── ContactPortal
    │       ├── BasicContact.tsx
    │       └── SocialContact.tsx
    │   ├── CrossSiteNav
    │        └── SocialContact.tsx
    │   ├── NavItem
    │        └── index.tsx
    │   ├── Footer
    │       ├── Footer.tsx
    │       └── Footer.styles.tsx
    │   ├── Header
    │       ├── Header.tsx
    │       └── Header.styles.tsx
    │   ├── PageHeader.tsx : 프로젝트 페이지에 해당하는 제목 및 설명을 나타내주는 component.
    │   └── theme.ts
    ├── data
    │   └── data.ts
    ├── utils
    │   └── helpers.ts
    ├── pages
    │   ├── Carriageway
    │       └── Carriageway.tsx
    │   ├── Detail
    │       └── Detail.tsx
    │   ├── Features
    │       └── Features.tsx
    │   ├── Main
    │       └── Main.tsx
    │   ├── Profile
    │       └── Profile.tsx
    │   ├── Project
    │       ├── components
    │           ├── Layout.tsx
    │           ├── Paragraph.tsx
    │           └── Slider.tsx
    │       ├── pages
    │           ├── drinkalbe.tsx
    │           └── icon.tsx
    │       └── work-images
    │           ├── drinkable
    │           └── icondb
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   └── custom.d.ts
    └── public
        ├── favicon.ico
        ├── index.html
        ├── manifest.json
        └── robots.txt
```

<br/><br/>

<p>
  Copyright (c) 2024 Jihun Park. All rights reserved.
</p>
