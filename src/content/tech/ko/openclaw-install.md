---
title: 'OpenClaw 설치부터 Discord 연결까지 (feat. 나만의 AI 비서 만들기)'
description: '개인 AI 에이전트 OpenClaw를 설치하고, Discord 봇과 연동하여 나만의 AI 비서를 구축하는 과정을 단계별로 소개합니다.'
pubDate: 2026-02-03
tags: ['openclaw', 'ai', 'agent', 'discord', 'tutorial']
heroImage: ''
---

## OpenClaw와 함께하는 AI 에이전트 라이프 시작하기

### [ 나만의 AI 비서, OpenClaw를 소개합니다 ]

#### 1. OpenClaw가 뭔가요?
**OpenClaw**는 사용자의 로컬 환경에서 동작하는 **오픈소스 AI 에이전트**입니다.
단순히 채팅만 하는 것이 아니라, 내 컴퓨터의 터미널을 제어하고, 파일을 관리하고, 브라우저를 조작하며 실제 "일"을 해주는 녀석이죠.

오늘은 이 멋진 친구를 내 컴퓨터에 설치하고, **Discord**를 통해 언제 어디서든 대화할 수 있도록 연결하는 과정을 기록해 보려고 합니다.

#### 2. OpenClaw 설치하기 (Mac 기준)
설치 과정은 생각보다 매우 간단합니다. **Homebrew**를 사용하면 명령어 한 줄로 끝납니다.

터미널을 열고 아래 명령어를 입력해 주세요.

```bash
brew install openclaw/tap/openclaw
```

설치가 완료되었다면, 버전 확인을 통해 잘 설치되었는지 체크해 봅시다.

```bash
openclaw --version
```

버전 정보가 뜬다면 설치 성공! 🎉

#### 3. Discord 봇 만들기
OpenClaw가 내 말을 들으려면 귀(채널)가 필요하겠죠? Discord 봇을 생성해서 그 역할을 맡겨봅시다.

1.  **Discord Developer Portal**에 접속합니다.
2.  `New Application`을 눌러 앱을 생성합니다. (이름은 원하는 대로! 저는 'Claw'라고 지었어요.)
3.  좌측 메뉴에서 `Bot`을 선택하고 `Add Bot`을 클릭합니다.
4.  **중요!** `Reset Token`을 눌러 **토큰(Token)**을 복사해 둡니다. (이게 바로 OpenClaw와 디스코드를 연결하는 열쇠입니다.)
5.  `Privileged Gateway Intents` 항목에서 `Message Content Intent`를 **활성화(ON)** 해줍니다. (이걸 켜야 봇이 우리가 하는 말을 읽을 수 있어요.)

#### 4. OpenClaw와 Discord 연결하기
이제 아까 설치한 OpenClaw에게 디스코드 토큰을 알려줄 차례입니다.

터미널에서 설정 명령어를 실행합니다.

```bash
openclaw configure
```

설정 마법사가 실행되면 다음과 같이 진행합니다.
1.  **Platform**: `discord` 선택
2.  **Token**: 아까 복사해둔 봇 토큰 입력
3.  나머지 설정은 기본값으로 진행해도 무방합니다.

설정이 끝났다면 OpenClaw를 실행해 봅시다!

```bash
openclaw gateway start
```

#### 5. 만남의 시간
이제 Discord 서버에 봇을 초대하고 말을 걸어보세요.

> "안녕? 너 이제 내 말 들려?"

OpenClaw가 대답한다면 성공입니다! 이제 여러분도 **나만의 AI 비서**를 가지게 되었습니다.
앞으로 이 친구와 함께 어떤 재미있는 일들을 할 수 있을지 기대되네요. 😎
