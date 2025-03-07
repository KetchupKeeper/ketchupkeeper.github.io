---
title: UntiyShader基础学习笔记（六）
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
date: 2025-02-06 18:54:38
---

---

**本章节学习目标：** 

- 学习案例制作《镜花水月》案例
- 熟悉Unity ASE工具的使用
- 熟悉UnityShaderLab代码的使用
- 熟悉模版测试和深度测试内容和应用



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- [UnityShaderASE节点全解](https://blog.maoxiang.site/2024/12/18/Shader/UnityShaderASE%E8%8A%82%E7%82%B9%E5%85%A8%E8%A7%A3/)
- VScode
- Unity2022·····
- UnityShader入门精要

___

### 一、模版测试和深度测试的技术解析

#### 1、模版测试技术解析

![模版缓存区参考图](/Blog/posts/2025-2/image-20250208104756670.avif)

- **基本原理**

1. **模板缓冲区（Stencil Buffer）**
   模板缓冲区是一个与帧缓冲区大小相同的额外缓冲区，每个像素对应一个模板值，通常是一个8位无符号整数，取值范围为0到255，默认值为0。这些值可以在渲染过程中被修改，并用于后续的模板测试。
2. **模板测试操作**
   在输出合并阶段，GPU会比较当前像素片段的模板参考值（Stencil Reference Value）与模板缓冲区中相应位置的模板值。比较操作可以是等于、不等于、大于、小于等逻辑运算。根据比较结果，决定当前像素片段是否通过测试并被写入帧缓冲区。
3. **模板操作**
   如果模板测试失败，可以配置GPU执行特定的操作，如保持原值、设置为0、递增或递减模板值等。这些操作允许在渲染过程中动态地修改模板缓冲区的内容。

- **实现步骤**

1. **初始化模板缓冲区**
   在开始渲染之前，通常需要清除模板缓冲区，并设置初始的模板值。例如，可以使用`glClearStencil`和`glClear`函数在OpenGL中清除模板缓冲区。
2. **配置模板测试参数**
   设置模板参考值、定义模板比较函数（如`GL_EQUAL`、`GL_NOTEQUAL`等）以及指定模板测试失败时的操作（如`GL_KEEP`、`GL_REPLACE`等）。
3. **在着色器中使用模板值**
   可以在顶点着色器或片段着色器中读取和修改模板值。例如，在片段着色器中可以根据计算结果更新模板值。
4. **应用模板测试**
   在渲染循环中启用模板测试，并提交相应的绘制调用。GPU会根据配置的参数自动执行模板测试。

- **应用场景**

1. **遮罩效果**
   通过模板测试可以实现复杂的遮罩区域，只在特定区域内绘制内容。例如，可以先渲染一个遮罩对象，设置其模板值，然后在后续渲染中仅对模板值匹配的区域进行绘制。
2. **镜像反射**
   使用模板测试来标记反射区域的边界，然后只在这些区域内渲染反射图像。
3. **轮廓渲染**
   先渲染物体的内部部分并设置模板值，再渲染外部轮廓并根据模板值进行混合。
4. **多视口渲染**
   在多视口渲染中，模板测试可以用于限制每个视口的渲染区域。



#### 2、深度测试技术解析

### 二、镜花水月案例

#### 1、UnityASE实现效果

1. 模版测试设置

   ![勾选模版测试](/Blog/posts/2025-2/image-20250208105308509.avif)

   Reference（引用的意思，引用的数值，放在模版测试缓冲区的数值，默认0，范围0-255）
   Read Mask

   Write Mask

   Comparison（模版测试的规则，"Always是总是能够通过模版测试，Never是不能通过"）本次设置为总是通过Always

   ![模版测试规则参考图](/Blog/posts/2025-2/image-20250208110240681.avif)

   Pass  Front（意思为，模版测试通过之后模版值怎么处理，正面，（还有背面））需要关闭背面剔除可以得到背面设置方法。本次设置为Replace替换成1

   ![传递“剔除北向面，设置前向面](/Blog/posts/2025-2/image-20250208111147271.avif)

   Fail Front（模版测试失败了要怎么做的选项）

   Zfail Front（模版测试通过之后，但是深度测试没有通过的选项）

2.  关闭Color Mask（关闭颜色显示）

   ![关闭Color Mask](/Blog/posts/2025-2/image-20250208112111486.avif)

3. 更改渲染队列参数

   ![更改渲染队列参数](/Blog/posts/2025-2/image-20250208112546955.avif)

4. 将深度写入关闭，深度写入关闭后将不再遮挡后面的物体

   ![深度写入关闭](/Blog/posts/2025-2/image-20250208112729412.avif)

5. 给场景中的物体的Shader进行模版设置

   ![测试等于1的模版才能被显示](/Blog/posts/2025-2/image-20250208113055056.avif)

6. ASE修改渲染队列的方法

   ![ASE修改渲染队列的方法参考图](/Blog/posts/2025-2/image-20250208113703247.avif)

7. 深度测试修改

   ![总是能通过深度测试](/Blog/posts/2025-2/image-20250208114442715.avif)

   在Unity等图形渲染引擎中，ZTest Mode通常有以下几种模式：

   - **Always**：始终通过深度测试，无论深度值如何。
   - **Never**：始终不通过深度测试。
   - **Less**：当当前像素的深度值小于深度缓冲区中的值时通过测试。
   - **Greater**：当当前像素的深度值大于深度缓冲区中的值时通过测试。
   - **Equal**：当当前像素的深度值等于深度缓冲区中的值时通过测试。
   - **LEqual**：当当前像素的深度值小于等于深度缓冲区中的值时通过测试（默认模式）。
   - **GEqual**：当当前像素的深度值大于等于深度缓冲区中的值时通过测试。
   - **NotEqual**：当当前像素的深度值不等于深度缓冲区中的值时通过测试。

#### 2、UnityShaderCode实现效果

1. 设置模版测试

   ```hlsl
   Pass
   {
   	Stencil
   	{
   		Ref 1
   		Comp alays
   		Pass replace
   	}
   }
   
   ```

   

2. 设置颜色效果

   ```hlsl
   Pass
   {
   	ColorMask 0    //ColorMask R;ColorMask RG;ColorMask RGB;ColorMask RGBA
   }
   
   ```

3. 关闭深度写入

   ```hlsl
   Pass
   {
   	ZWrite Off
   }
   
   ```

   
