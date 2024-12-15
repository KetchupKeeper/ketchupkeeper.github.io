---
title: Hexo的使用笔记
tags:
  - Hexo使用
  - 安知鱼主题
  - 博客技术笔记
  - Technology
avatar: /T/文章头像.png
cover: /tex/Hexo.png
desc: 作者头像下的页面描述
recommend: 
published: true 
date: 2024-11-21 19:50:19
---
---

**增加友链的不二选择，就是写一篇可以让朋友入坑的博客搭建教程。**





1. **软件配置方案：**（软件配置目标 “完成基本功能、基本写文章和上传Git 下拉Git功能）
   - Hexo + Hexon（可视化hexo写作管理的WebUI，推荐非程序员和喜欢可视化界面的使用这款）
   - Hexo + SourceTree + Typora
   - Hexo + VScode
   - 我全都要（Hexon有自带的文章分类功能，配置好了之后可能会导致之后配置Hexo分类插件失效或者产生冲突）
2. **静态网页配置：**
   - Git Hub + Vercel
   - GitLab
   - Gitee（静态网页管理功能已永久下架）

配置方案：

---



# 一、安装一条龙（Git Hub + Vercel）

## 1、Hexo本地安装
- 需要会用一点cmd和windows PowerShell，鼠标选中指定文件右键打开终端（cmd/powerShell)
- 下方Hexo安装教程链接中，主题下载可以直接跳过，需要下主题可以直接跳到第三节。
- [Hexo安装（跟着输入就行）](https://sspai.com/post/62441)

## 2、SourceTree安装使用
- 不是唯一的方式，主要用于方便管理Git数据和上传。
- [官网下载（下载）](https://www.sourcetreeapp.com/)
- [Sourcetree安装详细（最新版本）](https://blog.csdn.net/zqd_java/article/details/123681302)
  
## 3、GitHub/GitLab/Gitee静态网页代理库准备
- 此步骤可以单独完成，和上文没有依赖关系
- GitHub
  （什么都好，就是国内访问有点小问题，下面有解决方案）
  [【利用github.io(githubPages)免费托管个人静态网站/个人博客】](ttps://blog.csdn.net/Amnesiac666/article/details/120428961)

- GitLab
  (该git平台在国内有中国有站点，访问快，部署后可以直接访问，就是目前比较小众)
  [【使用GitLab Pages托管静态网站】](https://blog.csdn.net/tongshuyang/article/details/125338130)
- Gitee
  （该平台目前下架了Gitee Pages，不能托管静态网站）
  
## 4、Vercel部署
- 该偏主要解决GitHub国内访问问题，选择其他git跳过此处
- Vercel+GitHub部署
  [【使用Vercel+Github搭建个人博客】](https://www.cnblogs.com/xuyiyang/p/13647069.html)

## 5、二级域名免费获取

- [【Freedns.Fun 永久免费二级域名 非盈利性网站】](https://freedns.fun/)

# 二、常用命令/方法
- 本地预览
  
  ```shell
  hexo s
  ```
  
- 清除缓存
  
  ```shell
  hexo clean
  ```
  
- 生成网站静态文件并部署
  
  ```shell
  hexo d
  ```
  
- 常用组合
  
    ```shell
    hexo clean && hexo s || hexo clean && hexo d
    ```
    
- npm依赖安装(每次下拉新的Hexo到本地之后需要做的)
  
  ```shell
  npm install
  ```
  
- 文章创建
  
  ```shell
  hexo new 
  ```
  
- 简写
  
  ```
  hexo n
  ```
  
- 文章创建草稿（_draft)
  
  ```shell
  hexo new draft 
  ```
  
- 标签/分类创建和用法
  
  （按照方法配置即可，创建标签和分类内容不在此处执行）
  
  - 标签创建：
  
      ```shell
      hexo new page tags
      ```
  
      配置：
  
      ```shell
      ---
      title: 标签
      date: 2021-04-06 12:01:51
      type: "tags"
      comments: false
      top_img: false
      ---
      ```
  
      
  
  - 分类创建：
  
      ```shell
      hexo new page categories
      ```
  
      配置：
  
      ```shell
      ---
      title: 分类
      date: 2022-02-23 17:56:00
      aside: false
      top_img: false
      type: "categories"
      ---
      ```
  
      
  
  - 标签/分类的用法：
  
      （在文章中直接创建）
  
      ```shell
      title: Hexo的使用笔记
      date: 2024-11-21 19:50:19
      tags:
       - Hexo使用
       - 安知鱼主题
       - 博客技术笔记
      categories:
       - Hexo
       - 技术分享
      ```
  
      
  
  - 本地获取图片/获取图片外链
  
      图片需要放在特定的根目录下才可以用一下方法获取到，\根文件夹\themes\anzhiyu\source下创建一个文件夹即可，例如创建Image
  
      - 本地获取
  
        ```shell
        /Image/<image name.jpg/png>
        ```
  
        
  
      - 外链获取
  
        直接找到图片的链接地址即可获取，如：
  
        ```shell
        https://cdn-prd.ggac.com/ggac/work/image/2024/2/14/6f912e62-c7c5-430e-b4fd-f5a94a5e8c79-2048x.jpg
        ```
  
        
  
      
  
      

# 三、开源好用的主题安装建议
- anzhiyu主题

  - 主题介绍

    该主题真是我在用的，0基础学习需要点成本，大致可以在1-3天掌握，选择的理由是因为好看的外观和实用的框架正是我所需要的。

    主题预览  [||卯相爱吃番茄酱主页||](https://blog.xiangtian.online/)

    

  - 主题开源地址（GitHub）

    ```
    https://github.com/anzhiyu-c/hexo-theme-anzhiyu
    ```

    

  - 主题文档

    ```
    https://docs.anheyu.com/
    ```

    

- Solitude主题

  - 主题介绍

    是我第二个尝试的主题，配置方面比anzhiyu的主题要舒畅很多，学习成本差不多，但是配置逻辑流畅性和备注看的非常舒服，非常适合小白第一个入手的主题。

    主题预览  [||伍十七||](https://blog.everfu.cn/)

    

  - 主题开源地址（GitHub）
  
    ```
    https://github.com/everfu/hexo-theme-solitude
    ```

    

  - 主题文档
  
    ```
    https://solitude.js.org/
    ```

    
  
  

# 四、各种主题配置心得（个人推荐）
- anzhiyu主题

  配置方式主要是个人定制化配置和换肤性更改内容，支持HTML和基本文本输入，外观好看，使用的是张洪Heo框架

  - 基本配置

    该主题内容第一次打开只有顶部图片栏和文章栏和右侧个人信息栏，很多配置需要跟着[文档](https://docs.anheyu.com/)中一步步来，文档中有一个基础配置的篇章，看完那部分就没问题了。

    

  - 进阶配置

    主题的进阶配置，该主题有预设的导航栏、右侧信息栏、个人信息还有其他类型的配置模版，可以直接去除注释使用。

    - 导航栏

      推荐使用关于本人、我的装备友人帐和文章下的所有内容，比较实用，其他根据需求进行设置添加。

    - 文章

      文章图片显示可以使用外链和本地文件夹下的，使用外链请找一个相对安全且稳定的图片服务器，比如[Hello图床](https://www.helloimg.com/user/dashboard)

- Solitude主题

  配置的主要方式和上面的类似，对比上方的优点在于更舒服的定制化配置内容和选项，配置排序恰当且配置起来尤其的舒服。
  
  - 基本配置和anzhiyu类似，但是初始只有文章和个人信息侧面板显示，其他的需要用户自行配置。
  
  - 进阶配置
  
    该模版有自己特点内容在文档中，方便自己后续探索。