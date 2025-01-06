---
title: Hexo配置提升（插件篇）
avatar: /tex/作者头像.png
date: 2024-12-12 16:41:41
tags:
  - Hexo使用
  - solitude主题
  - 博客技术笔记
  - Technology
cover: /tex/Hexo.avif
desc:
recommend:
published:
---

Hexo配置提升（插件篇）

---

本章节讲的是关于提高Hexo使用体验和优化的插件内容，根据需求自行安装下载



配置环境：

- Git
- Node.js
- Github
- npm包管理器

---



## Markdown渲染器相关拓展

<br/>

- 1、参考文章：[【Hexo】选择更高级的Markdown渲染器](https://blog.csdn.net/qq_42951560/article/details/123596899)

<br/>

- 2、相关插件内容

  - `hexo-renderer-markdown-it`（install安装）

    ```shell
    #1、卸载 hexo-renderer-marked
    
    npm un hexo-renderer-marked --save
    
    #2、安装 hexo-renderer-markdown-it
    
    npm i hexo-renderer-markdown-it --save
    ```

    

  - `markdown-it-checkbox`（install安装）

    ```shell
    npm i markdown-it-checkbox
    ```

    

  - `markdown-it-imsize`（install安装）

    ```shell
    npm i markdown-it-imsize
    ```

    

  - `markdown-it-expandable`（install安装）

    ```shell
    npm i markdown-it-expandable
    ```

- 基本用法

  | 名称                 | 描述     | 语法                        | 示例                                                         |
  | -------------------- | -------- | --------------------------- | ------------------------------------------------------------ |
  | markdown-it-abbr     | 注释     | `*[HTML]: 超文本标记语言`   | HTML                                                         |
  | markdown-it-emoji    | 表情     | `:)`                        | 😃                                                            |
  | markdown-it-footnote | 脚注     | `参考文献[^1]`              | 参考文献[1](https://blog.csdn.net/qq_42951560/article/details/123596899#fn1) |
  | markdown-it-ins      | 下划线   | `++下划线++`                | 下划线                                                       |
  | markdown-it-mark     | 突出显示 | `==标记==`                  | 标记                                                         |
  | markdown-it-sub      | 下标     | `H~2~O`                     | H2O                                                          |
  | markdown-it-sup      | 上标     | `X^2^`                      | X2                                                           |
  | markdown-it-checkbox | 复选框   | 未选：`- [ ]` 选中：`- [x]` | ![- [ ] 未选  - [x] 选中](/Blog/posts/20241212164515192.avif)      |

  

::: success

***\*成功\****

这是一个成功信号

:::
