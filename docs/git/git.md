---
layout: default
title: Git
nav_order: 1
parent: Documents
has_children: true
has_toc: false
---

# Git

## Basic
```bash
git branch  #로컬 브랜치 목록 조회
git branch -r  #원격 브랜치 목록 조회
git branch -a  #모든 브랜치 목록 조회

git remote -v # remote확인

# pull
git pull [remote] [branch]
# push
git push [remote] [branch]

# 원격의 다른브랜치로 push
git push [remote] [branch] : [remote_branch]

# 새로운 원격 추가
git remote add <remote> <url>

>>> 참고로, 보통 remote는 "origin" (remote/origin)
```
참고:

[Git-원격저장소 remote 추가,해제](https://codechacha.com/ko/git-delete-add-remote/)

[Remote추가 및 push](https://whoisjmh.tistory.com/entry/git-Remote-%EB%A5%BC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-%EC%B6%94%EA%B0%80%ED%95%9C-Remote%EC%97%90-push%ED%95%98%EA%B8%B0)


## Applying new *.gitignore* (if not working)

```bash
$ git rm -r --cached .
$ git add .
$ git commit -m ".gitignore updated"
```

<br>

# Git Configuation

## 유저설정

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
참고: [Git - Git 최초 설정](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)


## Set Case Sensitive / Set Auto Carriage Return, Line Feed

```bash
# local : 해당 리포만 설정

# global : 로그인한 사용자 전역
$ git config --global core.ignorecase false
$ git config --global core.autocrlf true

# system 셋업
$ git config --system core.ignorecase false
$ git config --system core.autocrlf true
```

참고: [git config 명령어 사용법](https://www.daleseo.com/git-config/)

<br>

# Github SSH,GPG

## SSH

```powershell
# check if open-ssh is 
> ssh -V

# SSH-key create
> ssh-keygen 

# (Windows) copy and paste printed Public-SSH-key
> cat c:\Users\{USER_NAME}\.ssh\id_rsa.pub
```


## GPG
[GnuPG official page](https://gnupg.org/)

```powershell
# GPG key create
> gpg --full-generate-key

# Check generated GPG-key
> gpg -k

# (Windows) print Public-GPG-key
> cat C:/Users/{USER_NAME}/AppData/Roaming/gnupg/pubring.kbx

```


## Config GPG-signing-key for verified commit at Github

```powershell
> git config --global user.signingkey {COPIED_GPG_PUBLIC_KEY}
> git config --global commit.gpgsign true
```

참고: 

[GPG 설치 및 설정](http://egloos.zum.com/mcchae/v/11264181)

[Git 초기 세팅, Github SSH/GPG 키 등록하기](https://www.latera.kr/blog/2019-12-28-git-%EC%B4%88%EA%B8%B0%EC%84%B8%ED%8C%85/)

[GPG 복사하여 옮기기](https://irostub.github.io/information/gpg-how-to-export-and-import-gpg-key-commit-sign-other-machine/)

[GPG-Github Documents](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)


## devcontainer에서 ssh키 사용하기

```powershell
# devcontainer에서 host의 SSH-key 정보를 공유해서 사용가능
# use ssh-agent of ssh-agent
> ssh-add $HOME/.ssh/github_rsa

# 윈도우에선 ssh-agent 실행되고 있지 않을 수 있어서 상시실행으로 변경
# Make sure you're running as an Administrator
> Set-Service ssh-agent -StartupType Automatic
> Start-Service ssh-agent
> Get-Service ssh-agent
```

참고: [Using SSH Keys](https://code.visualstudio.com/docs/devcontainers/containers#_using-ssh-keys)







