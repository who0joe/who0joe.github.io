# [Github Pages] with [Jekyll]


## Before Get Started

Make sure if you installed "VS Code" and "Docker Engine"

> [Visual Studio Code]
>
> [Docker Engine] *(IF Windows, recommend to install [WSL 2] to use as a base engine for better performance)*



## How to Use

Clone repository
```bash
$ git clone https://github.com/who0joe/who0joe.github.io.git
```

Run VS-Code 

Open `who0joe.github.io` folder in VS-Code

and, press "ctrl + shift + P" and, type "rebuild" to execute "Remote-Containers: Rebuild and Reopen in Container"

![](images/run_devcontianer.png)


Execute `bundle` to generate Gemfile.lock for required dependencies
```
$ bundle
```

Run `jekyll serve`, if build finished you can see the site at http://localhost:4000
```
$ jekyll serve
```



---

***This site uses Just the Docs, a documentation theme for Jekyll.*** 

*for more information please check followings*

> [Github Pages]
>
> [GitHub Docs for Github Pages]
>
> [Jekyll]
>
> [Just the Docs Github]
>
> [just-the-docs-template]


---
[Visual Studio Code]: https://code.visualstudio.com/
[Docker Engine]: https://www.docker.com/products/docker-desktop/
[WSL 2]: https://learn.microsoft.com/ko-kr/windows/wsl/install

[devcontainer]: https://containers.dev/
[Github Pages]: https://pages.github.com/
[GitHub Docs for Github Pages]: https://docs.github.com/en/pages
[Jekyll]: https://jekyllrb.com
[Just the Docs]: https://just-the-docs.github.io/just-the-docs/
[Just the Docs Github]: https://github.com/just-the-docs/just-the-docs
[just-the-docs-template]: https://github.com/just-the-docs/just-the-docs-template/generate


