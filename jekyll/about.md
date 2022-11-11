---
# layout: default
title: about.md
---
<!-- 
md파일을 어떤 레이아웃을 이용해서 html로 만들지 결정
실제주소 라우팅도 이 md파일에 따름 
메인 컨탠츠는 여기서 작업하고 html레이아웃만 참조로 사용하는듯(_layouts에서 자동참조)
-->

## Jekyll Tutorial

Creat **_layouts** directory

and create **default.html** file into **_layouts** folder

```html
<!-- default.html -->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

index.html과 동일함 FrontMatter와 content object가 있는것 빼곤 동일

**content** is a special variable that returns the rendered content of the page on which it’s called.

