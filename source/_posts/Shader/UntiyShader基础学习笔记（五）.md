---
title: UntiyShader基础学习笔记（五）
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
date: 2025-02-03 16:12:18
---

---

**本章节学习目标：** 

- 学习案例制作树藤顶点偏移动画效果
- 熟悉Unity ASE工具的使用
- 熟悉UnityShaderLab代码的使用
- 熟悉顶点Shader中的操作
- 熟悉顶点着色器的实现内容



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- [UnityShaderASE节点全解](https://blog.maoxiang.site/2024/12/18/Shader/UnityShaderASE%E8%8A%82%E7%82%B9%E5%85%A8%E8%A7%A3/)
- VScode
- Unity2022·····
- UnityShader入门精要

---

需要开启Blende Mode中的Alpha Test  才能开启Opacity Mask接口

Opacity Mask（遮罩裁剪）

权重 范围

vertex normal

取两者之间最大的一个结果

power（提高对比度，黑白对比）





### 一、前期设置

光照模式改为标准（Standard）

双面显示开启（背面剔除关闭）（Off）

渲染队列改成（Alpha Test）

![配置设置参考图](/Blog/posts/2025-2/image-20250206154323520.avif)



### 二、顶点动画实现效果

#### 1、UnityShaderASE实现方式

  1. 缩放偏移实现

     ![使用Vertex Normal属性控制物体缩放值和缩放朝向](/Blog/posts/2025-2/image-20250206152731382.avif)

     ![使用加法得到额外扩张整体大小的方法](/Blog/posts/2025-2/image-20250206152830558.avif)

  2. 生长动画实现

     - 实现生长效果

       ![通过UV的V向量拿到y轴的灰度渐变值，用减法控制渐变范围](/Blog/posts/2025-2/image-20250206152535081.avif)

     - 收缩前端

       ![将藤蔓前端收缩为尖刺部分](/Blog/posts/2025-2/image-20250206154031936.avif)

     - 控制末尾固定变量

       ![控制最大尾部限制，使用Max输出最大值保持尾部尖端不变](/Blog/posts/2025-2/image-20250206154111385.avif)

#### 2、UnityShader代码实现方式

#### 1、需求的输入元素

法线

### 三、技术实现和技术解析

#### 1、顶点偏移技术

使用一个带有位置和方向的顶点法线向量控制物体的缩放效果。

#### 2、UV权重应用

使用UV得到渐变图，使用Smooth节点控制渐变范围。

