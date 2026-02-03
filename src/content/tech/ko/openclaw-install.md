---
title: 'OpenClaw 설치부터 Discord 연결까지 (feat. 나만의 AI 비서 만들기)'
description: '개인 AI 에이전트 OpenClaw를 설치하고, Discord 봇과 연동하여 나만의 AI 비서를 구축하는 과정을 단계별로 소개합니다.'
pubDate: 2026-02-03
tags: ['openclaw', 'ai', 'agent', 'discord', 'tutorial']
heroImage: ''
---

## 1. 배경 (Why?)
**OpenClaw**는 사용자의 로컬 환경에서 동작하는 **오픈소스 AI 에이전트**입니다.
단순히 채팅만 하는 챗봇이 아니라, 내 컴퓨터의 **터미널을 제어하고, 파일을 관리하고, 브라우저를 조작하며 실제 "일"을 해주는** 녀석이죠.

저는 이 멋진 친구를 내 컴퓨터(Mac mini)에 설치하여, 언제 어디서든(심지어 침대에 누워서 폰으로도!) 내 서버를 관리할 수 있는 **나만의 AI 비서**를 만들고 싶었습니다.

## 2. 사전 준비 (Prerequisites)
OpenClaw가 내 말을 들으려면 소통 창구가 필요합니다. 가장 접근성이 좋은 **Discord**를 활용하기로 했습니다.

1.  **Discord Developer Portal** 접속 및 로그인
2.  `New Application` 생성 (이름: **Claw**)
3.  `Bot` 메뉴에서 봇 생성 및 **Token 복사** (이게 연결 열쇠입니다! 🔑)
4.  **중요!** `Privileged Gateway Intents`에서 **`Message Content Intent` 활성화** (이걸 켜야 봇이 내 말을 읽을 수 있어요)

## 3. 설치 및 연결 (Solution) 🚀

### 3.1 OpenClaw 설치 (Mac)
설치 과정은 매우 간단합니다. **Homebrew**를 이용하면 한 줄로 끝납니다.

```bash
brew install openclaw/tap/openclaw
```

![OpenClaw Terminal Install](/images/openclaw-install/terminal-install.jpg)

### 3.2 Discord 연결 설정
설치가 끝났다면, 아까 발급받은 봇 토큰을 OpenClaw에게 알려줘야 합니다.

```bash
openclaw configure
```

설정 마법사가 실행되면 플랫폼으로 `discord`를 선택하고, 복사해둔 토큰을 입력합니다.

![OpenClaw Configuration](/images/openclaw-install/terminal-config.jpg)

## 4. 결과 (Result) 📊
설정을 마치고 `openclaw gateway start` 명령어로 에이전트를 깨웠습니다.
그리고 Discord 서버에 들어가 말을 걸어보았습니다.

> "안녕? 너 이제 내 말 들려?"

![OpenClaw Chat Verification](/images/openclaw-install/chat-verify.jpg)

**성공입니다!** 🎉
OpenClaw가 제 인사에 즉각 반응하며 대화를 시작했습니다. 이제 제 명령을 기다리는 든든한 비서가 생겼네요.

## 5. 마치며 (Retrospective)
생각보다 훨씬 간단하게 로컬 AI 에이전트를 구축할 수 있었습니다.
이제 이 친구에게 **블로그 자동 배포**, **서버 상태 점검**, **뉴스 요약** 같은 다양한 업무를 맡겨볼 생각입니다.

여러분도 **OpenClaw**와 함께 나만의 AI 파트너를 만들어보세요! 😎
