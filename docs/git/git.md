---
layout: default
title: Git
nav_order: 1
parent: Documents
has_children: true
has_toc: false
---

# Git Configuation

# Git

## SSH and GPG 설정

$ ssh-keygen #으로 생성

C:\Users\{사용자명}\.ssh 폴더에 id_rsa.pub 내용 열어서 복붙 

$ gpg --full-generate-key # 으로 생성

$ gpg -k # 로확인

C:\Users\rocen\AppData\Roaming\gnupg\pubring.kbx

다음설정 git에 추가

```
git config --global user.signingkey ABCDEFGHIJKLMNOP1234567890
git config --global commit.gpgsign true
```

## gitignore

```jsx
git rm -r --cached .
git add .
git commit -m ".gitignore is now working"
```

SSH 설정

[https://www.latera.kr/blog/2019-12-28-git-초기세팅/](https://www.latera.kr/blog/2019-12-28-git-%EC%B4%88%EA%B8%B0%EC%84%B8%ED%8C%85/)

GPG 설정

[http://egloos.zum.com/mcchae/v/11264181](http://egloos.zum.com/mcchae/v/11264181)

GPG 옮기기

[https://irostub.github.io/information/gpg-how-to-export-and-import-gpg-key-commit-sign-other-machine/](https://irostub.github.io/information/gpg-how-to-export-and-import-gpg-key-commit-sign-other-machine/)

GPG github guide

[https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)

최초설정 

```powershell
> git config --global user.name "John Doe"
> git config --global user.email johndoe@example.com
```

[Git - Git 최초 설정](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)

Set Case Sensitive / Set Auto Carriage Return, Line Feed

```docker
# local : 해당 리포만 설정
# global : 로그인한 사용자 전역
git config --global core.ignorecase false
git config --global core.autocrlf true

# system 셋업
git config --system core.ignorecase false
git config --system core.autocrlf true
```

[https://www.daleseo.com/git-config/](https://www.daleseo.com/git-config/)

