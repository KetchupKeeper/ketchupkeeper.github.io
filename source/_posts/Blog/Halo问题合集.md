---
title: Halo问题合集
tags:
  - 博客
  - Technology
  - 问题
  - Halo
  - 解决方案
avatar: /T/文章头像.png
cover: /tex/Halo.png
desc: 作者头像下的页面描述
recommend:
published: true
date: 2024-12-15 20:16:59
---

---

::: t
**备注：**
记录对使用Halo的时候出现的问题和解决方式。
:::



**配置环境：**

1. Halo2.0以上版本
2. Hao主题
3. 实用插件（各种使用插件会备注在下面）
4. 腾讯云服务器

---

# 一、Halo问题合集

## 1、Halo使用过程中存在的问题和解决方案

### （1）Halo的更新方式都有哪些？

### （2）Halo文章出现点击当前文章跳转出另一篇文章的问题

::: s
**问题解决：**
需通过修改文章别名的方式修改正常了，文章别名出现了相同的会出现文章选择跳转到另一个别名
       相同的文章页面中。需要特别注意别名问题。
:::

## 2、Halo定制化需求解决方案

## 3、Halo的Bug问题的解决方案

---

# 二、Hao主题问题合集

## 1、Hao主题使用过程中存在的问题和解决方案

### （1）图标引用和导入问题

<br>


## 2、Hao主题定制化需求解决方案

### （1）右下角音乐插件30s播放问题



### （2）右下角音乐插件开启默认播放设置

::: s
**问题解决：**

1. 修改配置文件settings 的配置模块（路径：）
   【在settings中，确保音乐播放器的 autoplay 设置为 true，并且默认启用音乐。】

     ```YAML
   music:
       enabled: true # 启用音乐
       autoplay: true # 默认自动播放
       server: "netease" # 音乐服务，选择合适的服务
       i "xxxxxx" # 歌单的ID
       api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r" # 音乐API
     ```

 2. 在前端模版中启动自动播放

    

3. 确保配置生效

4. 根据你使用的 Halo 版本，配置修改后可能需要重新加载或者刷新页面才能生效。需要在云服务器中重启Halo的容器，并且清除浏览器缓存或者使用另一个浏览器打开测试，不然可能出现样式依旧保持原样的情况。

5. 处理自动播放限制（以上情况都测试过后没有效果的话可以试试）

   如果浏览器因为自动播放限制导致音乐无法播放，可以尝试添加 muted="true" 来绕过限制：

   ```HTML
   <meting-js th:id="${theme.config.tool.nav_music.id}"
              th:server="${theme.config.tool.nav_music.server}"
              type="playlist"
              mutex="true"
              preload="none"
              theme="var(--heo-main)"
              data-lrctype="0"
              order="random"
              autoplay="true"
              muted="true">
   </meting-js>
   ```

   

<br><br>
