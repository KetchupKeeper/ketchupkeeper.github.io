---
title: 04_UnityShader后期处理技术（一）
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
date: 2025-02-15 17:16:30
---

---

**本章节学习目标：** 

- 了解后处理技术的实现原理
- 



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/其他/UnityTA学习计划/)
- [UnityShaderASE节点全解](https://blog.maoxiang.site/2024/12/18/Shader/UnityShaderASE节点全解/)
- VScode
- Unity2022·····
- Shader入门精要

---

![image-20250215171837415](../../../themes/solitude/source/Blog/posts/2025-2/image-20250215171837415.png)

![后处理技术框架](../../../themes/solitude/source/Blog/posts/2025-2/image-20250215172009904.png)

前置实现设置

1、创建一个从帧缓冲区获取图像到后处理中的脚本

![image-20250215180606851](../../../themes/solitude/source/Blog/posts/2025-2/image-20250215180606851.png)
