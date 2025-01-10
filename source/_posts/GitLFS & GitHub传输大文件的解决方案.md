---
title: GitLFS & GitHub传输大文件的解决方案
tags:
  - 工具
  - Git
  - GitHub
avatar: /T/文章头像.png
cover: 标题配图
desc: 番茄酱守护者
recommend: false
published: true
date: 2025-01-07 14:41:03
---

---

**本章目标：**

- 解决Github上传超过100M文件的解决方式
- 上传超过100M的pdf文本文件，用GitHub当做书库



**配置环境：**

- GitHub
- Windows PowerShell
- GitLFS工具
- 教程视频：[#3Git-LFS上传大文件【Git&Github使用指南】Large File Storage](https://www.bilibili.com/video/BV19u411y7je?t=54.2)

---

::: t
**前言**
Git LFS（Large File Storage）是一个开源的Git扩展，用于管理大型文件和二进制文件。

### 主要用途

1. **管理大文件**：
   - **节省空间**：Git LFS 通过将大文件存储在远程服务器上，而不是直接存储在本地的 Git 仓库中，从而节省了本地仓库的空间。
   - **提高性能**：在克隆和拉取仓库时，Git LFS 只下载需要的大文件，而不是整个历史记录中的所有大文件，这大大提高了操作的速度和效率。
2. **版本控制大文件**：
   - **跟踪变更**：Git LFS 允许你像管理普通文本文件一样管理大文件的版本，可以轻松查看文件的变更历史和版本差异。
   - **避免冲突**：通过版本控制大文件，可以更好地管理团队协作中的文件更新，减少因文件冲突导致的问题.

### 特点

- **透明性**：Git LFS 与 Git 无缝集成，使用起来非常自然，几乎不需要改变现有的 Git 工作流程.
- **兼容性**：支持多种 Git 服务器，如 GitHub、GitLab、Bitbucket 等，可以方便地在不同的平台上使用.
- **灵活性**：可以自定义哪些文件类型需要使用 Git LFS 进行管理，通过 `.gitattributes` 文件进行配置.
- **安全性**：支持 Git 仓库的安全特性，如访问控制和加密等，确保大文件的安全存储和传输

:::

## 一、下载/安装Git LFS

### 1、下载Git LFS

下载地址：

[Git LFS下载地址](https://git-lfs.com/)

### 2、安装到git目录下

下载到Git安装目录下即可

```
C:\Program Files\Git\bin\Git LFS
```



## 二、Git LFS上传大文件

