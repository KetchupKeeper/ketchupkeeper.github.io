---
title: UntiyShader基础学习笔记（一）
tags:
  - Unity
  - Shader
  - HLSL
  - Technology
cover: /tex/HLSL+Unity.avif
avatar: /T/文章头像.png
desc: 番茄酱守护者
recommend: false
published: true
date: 2024-12-18 11:23:08
---

---

**本章节学习目标：** 

- 完成渲染流水线和Unity渲染管线知识的学习
- 了解技术美术的工作内容和方向



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- VScode
- Unity2022
- UnityShader入门精要

---

## 一、技术美术方向

## 二、渲染流水线

![渲染管线一览](/Blog/posts/2024-12/image-20241218211410750.avif)



**1、什么是渲染（离线渲染-实时渲染）**

- 渲染的定义

  <div id="paragraph"><p id="first">【“渲染”（Rendering）】是指将三维场景中的数据（包括几何形状、材质、光照、视角等）转换为二维图像的过程。
      这个过程涉及计算场景中的光线、材质交互以及颜色表现，是计算机图形学的核心步骤，用于生成逼真的视觉效果或艺术化风格的图像。 </p></div>

  <br>

- 离线渲染

  <div id="paragraph"><p id="first">离线渲染是一种以高质量为目标的渲染方式，通常不追求实时性，适用于生成电影、动画、建筑可视化等高精度画面。
    特点：
    （1）高质量：
     使用复杂的光线追踪（Ray Tracing）、全局光照（Global Illumination）等算法，效果非常真实。
    （2）计算耗时：
     每帧渲染可能需要数分钟到数小时。
    （3）适用场景：
     电影特效（如《阿凡达》）、CG动画、建筑可视化。
    （4）软件示例：
     Arnold、RenderMan、V-Ray、Octane
    优势：
    （1）支持复杂的光照模拟、阴影、反射和折射效果。
    （2）可以实现照片级真实感（Photorealism）。</p></div>

  <br>

- 实时渲染（Real-Time Rendering）

	<div id="paragraph"><p id="first">实时渲染是一种以高效率为目标的渲染方式，能够在短时间内（通常小于16毫秒）生成每一帧画面，适用于游戏、虚拟现实等需要实时交互的场景。
	特点：
	（1）高效率：
	 通过使用图形硬件（GPU）加速，快速生成画面。
	（2）实时性：
	 每秒渲染至少30帧（FPS），以保证画面的流畅度。
	（3）适用场景：
	 游戏、虚拟现实、交互式设计。
	（4）软件与引擎示例：
	 Unity、Unreal Engine、DirectX、OpenGL。
	优势：
	（1）能够实时生成画面，支持用户交互。
	（2）渲染速度快，适合动态场景。
	缺点：
	 画质受性能限制，复杂光照效果需要使用近似算法（如基于光栅化的光照模型或实时光线追踪）。 </p></div>

<br>

- 离线渲染与实时渲染的对比

|      特性      |          离线渲染          |         实时渲染         |
| :------------: | :------------------------: | :----------------------: |
|  **渲染速度**  |  慢，每帧需数分钟到数小时  |   快，每帧需不到16毫秒   |
|    **画质**    |  追求高品质、照片级真实感  | 画质有限，动态场景需优化 |
| **计算复杂度** | 支持复杂算法（如全局光照） |  使用近似算法或优化手段  |
|  **硬件需求**  | 依赖高性能CPU和分布式集群  |       依赖GPU加速        |
|  **应用场景**  |  电影、动画、静态图像生成  |   游戏、VR、交互式设计   |

<br>

**2、渲染管线内容（渲染流水线，既定好的渲染流程）**

![渲染流水线三个概念阶段](/Blog/posts/2024-12/image-20241218205407904.avif)

![CPU内容](/Blog/posts/2024-12/image-20241218201824899.avif)

![GPU内容](/Blog/posts/2024-12/image-20241218202430905.avif)

<br>

**3、示例-Unity默认渲染管线**

分别为CPU应用程序渲染逻辑和GPU渲染管线两大部分。

![image-20241218201730507](/Blog/posts/2024-12/image-20241218201730507.avif)

![image-20241218202409391](/Blog/posts/2024-12/image-20241218202409391.avif)

![CPU内容](/Blog/posts/2024-12/image-20241218201824899.avif)

![image-20241218202430905](/Blog/posts/2024-12/image-20241218202430905.avif)

## 三、CPU应用程序端渲染逻辑（CPU应用程序阶段）

::: t
**CPU 应用程序阶段的优化方向**

1. **减少 Draw Call 数量**
   - 合并相同材质的模型，降低绘制批次。
   - 使用实例化（Instancing）技术一次性绘制多个相同对象。
2. **剔除无用数据**
   - 提前剔除不可见对象，减少 GPU 工作量。
   - 优化遮挡剔除算法，减少 CPU 和 GPU 的同步开销。
3. **异步加载**
   - 通过多线程加载资源（如纹理、模型）并异步上传到 GPU。
4. **任务调度**
   - 将 CPU 密集任务（如剔除、物理计算）分配到多个线程并行处理。

:::

#### 1、CPU应用程序阶段的职责：

1. **场景管理**

   - 管理整个场景中的对象，包括模型、灯光、摄像机和材质。
   - 更新动态场景数据（如角色移动、动画播放、摄像机切换）。

2. **几何数据准备**

   - 加载并存储场景中的几何体数据（顶点、法线、UV 等）。
   - 将模型等资源组织成 GPU 可识别的格式（如顶点缓冲区、索引缓冲区）。

3. **对象剔除（Culling）**

   - 执行视锥体剔除（Frustum Culling）：移除视锥外的对象。
   - 遮挡剔除（Occlusion Culling）：检测被其他物体遮挡的对象。
   - 屏幕外剔除：避免处理不会影响屏幕显示的对象。

4. **绘制指令生成**

   - 根据需要渲染的物体生成绘制命令（Draw Calls）。
   - 调用图形 API（如 DirectX、OpenGL、Vulkan）将绘制命令发送到 GPU。

5. **物理和逻辑计算**

   - 执行与渲染相关的物理模拟、AI 行为、用户输入处理等游戏逻辑。
   - 更新物体的变换矩阵（位置、旋转、缩放）。

6. **材质和纹理管理**

   - 分配、加载、更新纹理和材质信息。
   - 动态调整纹理分辨率以优化内存占用（例如纹理流式加载）。

7. **多线程调度**

   - 利用多线程将任务（如资源加载、剔除计算、命令缓冲生成）分发到不同线程，提高性能。

8. **状态管理**

   - 设置 GPU 渲染管线状态，如光栅化模式、混合模式、深度测试等。

   - 管理和切换着色器程序。

     <br>

#### 2、应用程序阶段主要内容

1. 剔除

   ![image-20241218222329883](/Blog/posts/2024-12/image-20241218222329883.avif)

2. 排序

   ![image-20241218222342259](/Blog/posts/2024-12/image-20241218222342259.avif)

3. 打包数据

   ![image-20241218222354503](/Blog/posts/2024-12/image-20241218222354503.avif)

   ![image-20241218222454903](/Blog/posts/2024-12/image-20241218222454903.avif)

   ![image-20241218222441311](/Blog/posts/2024-12/image-20241218222441311.avif)

4. 绘制调用

   ![image-20241218222509222](/Blog/posts/2024-12/image-20241218222509222.avif)

5. CPU与GPU通信

![CPU于GPU之间的通信](/Blog/posts/2024-12/image-20241218205656385.avif)

## 四、GPU渲染管线（GPU几何处理阶段）

#### 1、GPU几何处理阶段的职责：

- **场景管理：**

  - 管理游戏或应用程序中的场景数据，包括几何信息、光照、材质和摄像机位置等。

  - 处理动态场景的更新，例如对象的位移、旋转、缩放等。

- **对象剔除（Culling）：**

  - 通过裁剪技术（如视锥体剔除、遮挡剔除）减少无用对象的渲染。

  - 只将可见的对象提交给 GPU，减少渲染负担。

- **数据准备与上传：**

  - 将场景中的顶点数据、纹理、骨骼动画等资源组织成 GPU 可识别的格式。

  - 利用 API（如 OpenGL、DirectX、Vulkan）将数据发送到 GPU。

- **绘制指令生成：**

  - 生成并提交绘制命令（Draw Calls），通过图形 API 通知 GPU 绘制具体的几何体。

  - 优化绘制批次（Batching）以减少 Draw Call 开销。

- **逻辑处理：**

  - 执行与渲染相关的高层逻辑，例如物理计算、AI 行为、用户交互响应。

  - 控制渲染流程的更新频率（帧率控制）。

- **状态设置：**

  - 设置渲染管线的初始状态，包括深度测试、混合模式、着色器程序等。

  - 调用 API 配置 GPU 的渲染上下文。

#### 2、GPU渲染管线具体流程

![image-20241218222622818](/Blog/posts/2024-12/image-20241218222622818.avif)

#### 3、GPU渲染管线对照Shader代码

![image-20241218222657822](/Blog/posts/2024-12/image-20241218222657822.avif)

#### 4、顶点Shader

- 顶点Shader主要工作任务

![image-20241218222910386](/Blog/posts/2024-12/image-20241218222910386.avif)

- 顶点Shader的工作内容

![模型空间转世界空间](/Blog/posts/2024-12/image-20241218222934643.avif)

![世界空间转相机空间](/Blog/posts/2024-12/image-20241218223135122.avif)

![相机空间转裁剪空间](/Blog/posts/2024-12/image-20241218223158367.avif)

- 图元装配及光栅化（硬件操作阶段）

![image-20241218223305158](/Blog/posts/2024-12/image-20241218223305158.avif)

## 五、（光栅化阶段）

::: t
**光栅化阶段的结果**

1. 输出的是覆盖目标像素的片段信息（Fragments），这些片段会作为输入传递给片元着色器（Fragment Shader）进一步处理。

2. 每个片段包含：

   - 插值后的颜色、深度、纹理坐标等属性。

   - 屏幕坐标信息，用于后续的深度测试和合并操作。

:::

#### 1、光栅化阶段的职责：

- **（1）三角形投影到屏幕空间**

  - 将经过顶点着色器处理的三维顶点数据（如位置、法线等）转换到屏幕空间坐标系中。

  - 应用视口变换（Viewport Transformation），将三角形映射到屏幕上的像素网格。

- **（2）片段生成（Fragment Generation）**

  - 将屏幕空间中的三角形填充成一系列覆盖目标像素的片段。

  - 每个片段对应一个像素，携带从顶点插值而来的属性（如颜色、纹理坐标、深度等）。

- **（3）顶点属性插值**

  - 对三角形顶点的属性（如纹理坐标、颜色、法线等）进行插值，计算每个片段的具体属性值。

  - 插值基于屏幕空间的几何关系（如重心坐标计算）。

- **（4）裁剪（Clipping）**

  - 对位于视锥体之外的图元进行裁剪，确保只处理屏幕内可见部分。

  - 包括几何裁剪和后续片段的裁剪。

- **（5）屏幕空间覆盖判断**

  - 确定哪些像素被三角形覆盖（覆盖测试）。

  - 基于像素填充规则（如中心点采样或多重采样）决定片段的生成。

#### 2、光栅化过程：

![image-20241218223641677](/Blog/posts/2024-12/image-20241218223641677.avif)

[光栅化过程（光栅化算法解释）视频](https://www.bilibili.com/video/BV1tF411x7Cp?t=5.6)

## 六、片元Shader

::: t
**片元着色器阶段的输出**

- 每个片段的最终颜色值（RGB 或 RGBA）。
- 深度值，用于深度缓冲测试。
- 可选：自定义数据供后续阶段（如多渲染目标，MRT）使用。

:::

- 

#### 1、片元Shader的职责：

- （1）**光照计算**

  - 根据光源、材质属性和法线，计算每个片段的光照效果（如漫反射、镜面反射）。

  - 支持复杂光照模型（如 PBR 材质模型）。

- （2）**纹理采样**

  - 通过纹理坐标从纹理图中获取像素颜色数据。

  - 实现贴图效果（如漫反射贴图、法线贴图、透明贴图等）。

- （3）**颜色计算**
  - 基于输入数据（如顶点颜色、光照、纹理）计算片段的最终颜色值。

- （4）**透明度和混合计算**
  - 根据透明度（Alpha 值）处理片段的透明效果，为输出合并阶段提供数据。

- （5）**自定义效果**
  - 可用于实现特殊效果（如环境光遮蔽、全息效果、后期处理）。

- （6）**深度值输出**
  - 计算片段的深度值，供后续的深度测试使用。

#### 2、片元Shader主要任务（上色）

并包含纹理技术Texturing和光照技术Lighting

![image-20241218223807118](/Blog/posts/2024-12/image-20241218223807118.avif)

- **纹理技术Texturing**

![纹理采样](/Blog/posts/2024-12/image-20241218224202389.avif)

![纹理过滤机制](/Blog/posts/2024-12/image-20241218224227199.avif)

![纹理过滤机制2](/Blog/posts/2024-12/image-20241218224306125.avif)

![Mipmap](/Blog/posts/2024-12/image-20241218224328222.avif)

![纹理寻址模式](/Blog/posts/2024-12/image-20241218224349231.avif)

![纹理压缩格式](/Blog/posts/2024-12/image-20241218224440673.avif)

<br>

- **光照技术Lighting**

![光照的组成](/Blog/posts/2024-12/image-20241218224520144.avif)

![光照模型](/Blog/posts/2024-12/image-20241218224541038.avif)

![基本框架](/Blog/posts/2024-12/image-20241218224611378.avif)

## 七、输出合并

::: t
**输出合并阶段的结果：**  

- 颜色缓冲区： 包含每个像素的最终颜色值，构成最终渲染的图像。
- 深度缓冲区：记录每个像素的深度值，用于优化下一帧的渲染。
- 模板缓冲区：提供自定义测试规则的结果，可供后续帧使用。

:::

#### 1、输出合并的职责：

1. **深度测试（Depth Test）**

   - 对比当前片段的深度值与深度缓冲区中的值，决定片段是否可见。

   - 通过丢弃被遮挡的片段，避免无意义的绘制。

2. **模板测试（Stencil Test）**

   - 基于模板缓冲区的规则筛选片段，决定是否保留或丢弃。

   - 用于实现效果如裁剪、阴影体绘制、边缘高光等。

3. **颜色混合（Blending）**

   - 根据片段的颜色和帧缓冲区中的现有颜色计算最终输出颜色。

   - 常见场景是处理透明度（Alpha Blending）

   - 支持其他混合模式，如加法混合（用于光效）、减法混合等。

4. **多重采样抗锯齿（MSAA）**

   - 对多重采样产生的子像素结果进行合并，生成最终像素值。

   - 减少锯齿现象，提高画面质量。

5. **屏幕颜色写入**
   - 将最终的颜色值写入帧缓冲区的颜色缓冲中，完成渲染的最后一步。

6. **其他测试和操作**

   - Alpha 测试：根据 Alpha 值（透明度）丢弃部分片段（用于裁剪透明物体）。

   - 逻辑操作（Logic Operations）：在某些场景下，直接对帧缓冲的像素值应用逻辑运算。

#### 2、输出合并的内容

![输出合并内容](/Blog/posts/2024-12/image-20241218224701779.avif)

![帧缓冲区](/Blog/posts/2024-12/image-20241218224729886.avif)

![深度测试](/Blog/posts/2024-12/image-20241218224754628.avif)

- 提前深度测试（Early-z）

![image-20241218224842401](/Blog/posts/2024-12/image-20241218224842401.avif)



![image-20241218224911492](/Blog/posts/2024-12/image-20241218224911492.avif)





![image-20241218224943600](/Blog/posts/2024-12/image-20241218224943600.avif)







