---
title: UnityShader学习笔记（二）.
tags:
  - Unity
  - Shader
  - HLSL
  - Technology
avatar: /T/文章头像.png
cover: /tex/HLSL+Unity.avif
desc: 番茄酱守护者
recommend: false
published: true
date: 2024-12-19 15:59:59
---

---

**本章节学习目标：** 

- 熟悉UnityShaderlab框架
- 熟悉渲染管线在UnityShader中的实现方式



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- VScode
- Unity2022
- UnityShader入门精要

---



```Shader
Shader "123" //Shader Name  目录结构写法："CS01/123"
{
    Properties //实例属性，实例在材质面板上的属性
    {
        
    }
    SubShader //子材质属性，是shader中给的一个子块，每个块描述了如何在特定条件下渲染对象
    {
        Pass // subshader的组成部分，定义了一个具体的过程，一个subshader可以包含多个Pass，每个Pass代表一次渲染操作
        {
            //Pass内容
            //1、分阶段渲染
            //  - Pass 描述了一个渲染阶段，从顶点处理到片元处理的过程。
            //  - 一个对象可以通过多个 Pass 被多次渲染，例如阴影渲染、光照渲染等。
            //2、渲染控制
            //  - 每个 Pass 可以定义自己的渲染状态（如混合模式、深度测试等），并决定如何处理顶点和片元。
            //3、多Pass支持复杂效果
            //  - 对于需要多次绘制的效果（如多光源、后处理），可以通过多个 Pass 实现。
        }
    }
}
```

