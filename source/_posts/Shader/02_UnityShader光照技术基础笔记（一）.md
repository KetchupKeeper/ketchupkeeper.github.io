---
title: 02_UnityShader光照技术基础笔记（一）
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
date: 2025-02-08 11:58:15
---

---

**本章节学习目标：** 

- 学习Unity常见的光照模型内容
- 学习光照模型原理
- 熟悉掌握Phong光照模型
- 熟悉Untiy  Frame Debug



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- [UnityShaderASE节点全解](https://blog.maoxiang.site/2024/12/18/Shader/UnityShaderASE%E8%8A%82%E7%82%B9%E5%85%A8%E8%A7%A3/)
- VScode
- Unity2022·····
- UnityShader入门精要 

---

### 一、计算机光照原理

#### 1、Phong光照模型原理

![Phong光照模型计算参考图](/Blog/posts/2025-2/image-20250208122207119.avif)

- **Diffuse漫反射计算：**
  - Diffuse特点：反射模型主要颜色，根据光源（light source）照射方向决定颜色强度。
  - 漫反射计算：max（0.0，（dot（Normal_dir，Light_dir））。
  - 漫反射计算解读：模型Normal法线方向dot光线方向，然后使用max进行最小值限制，最小值限制为0.0。
- **Specular高光反射计算：**
  - Speular特点：
  - 高光反射计算：
  - 高光反射计算解读：
- **Ambient环境光反射计算：**

#### 2、光照模型基本框架

![光照计算思维图](/Blog/posts/2025-2/image-20250208122404687.avif)

### 二、Frame Debug（帧调试器）工具的使用

**帧调试器官方手册**：（[帧调试器 - Unity 手册](https://docs.unity3d.com/cn/2018.1/Manual/FrameDebugger.html)）

#### 1、基本功能介绍

- **逐帧调试**：Frame Debugger 可以暂停游戏在特定帧上，并显示构成该帧的所有渲染事件。它允许开发者逐帧查看渲染过程，从而识别渲染问题或优化性能。
- **绘制调用列表**：它会列出每一帧的所有绘制调用（Draw Calls），并允许开发者点击任何一个绘制调用来查看该调用后的渲染状态。
- **实时更新**：随着你在场景或游戏视图中的操作，Frame Debugger 会实时更新，展示当前的渲染状态。
- **渲染状态查看**：开发者可以通过它查看每一帧的渲染细节，包括顶点处理、光照计算、阴影渲染等，还可以查看渲染过程中使用的资源，如材质、纹理、着色器等。
- **兼容性**：Frame Debugger 支持 Universal Render Pipeline（URP）、High Definition Render Pipeline（HDRP）、Custom Scriptable Render Pipeline（SRP）以及 Built-in Render Pipeline

#### 2、使用方法

1. **打开 Frame Debugger**：在 Unity 编辑器中，选择 `Window` > `Analysis` > `Frame Debugger`。
2. **启用 Frame Debugger**：点击 `Enable` 按钮，编辑器会开始捕获当前帧的所有渲染命令。
3. **查看渲染命令**：在 Frame Debugger 窗口中，左侧会显示绘制调用层级列表，右侧面板会显示选定事件的详细信息。
4. **分析渲染问题**：通过查看渲染命令，分析渲染过程中可能出现的问题，如多余的绘制调用、不正确的材质使用等。
5. **优化渲染性能**：根据分析结果，对场景、材质、着色器等进行优化，以提高渲染性能。

#### 3、使用技巧

1. 查看着色器属性值

   ![对于绘制调用，帧调试器还可以显示所用的着色器属性 值。单击“Shader Properties”选项卡即可显示属性：](/Blog/posts/2025-2/FrameDebugShaderProperties-1739064052915-3.jpg)

2. 逐帧查看渲染细节的方式

   ![Frame Debug参考图](/Blog/posts/2025-2/image-20250209093056576.avif)

   - Shadows.RenderShadowMap和RenderForwardOpaque.CollectShadow都是绘制阴影的

     ![阴影绘制](/Blog/posts/2025-2/image-20250209093640836.avif)

   - RenderForward.RenderLoopJob是绘制灯光的

     ![灯光绘制](/Blog/posts/2025-2/image-20250209093703852.avif)

3. 



### 三、光照计算内容

![光照计算思维图](/Blog/posts/2025-2/image-20250208122404687.avif)

### 二、Render Path渲染路径

| 特性/功能        | 前向渲染（Forward Rendering）                                | 延迟渲染（Deferred Rendering）                               |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **核心思想**     | 渲染时直接计算光照，逐物体逐光源处理                         | 先渲染几何信息，后统一计算光照                               |
| **工作原理**     | 逐物体渲染，每个物体根据光源逐个计算光照效果，可能需要多次绘制（多Pass） | 先将几何信息（如位置、法线、材质属性等）存储到G-Buffer中，再统一计算光照 |
| **优点**         | - 实现简单，易于理解和调试<br>- 支持复杂材质和光照模型<br>- 对硬件要求低 | - 性能优势明显，适合大量光源<br>- 适合复杂场景，易于扩展<br>- 支持多种光照模型和阴影技术 |
| **缺点**         | - 性能瓶颈明显，光源数量增加时性能下降<br>- 不适合光源数量多的复杂场景 | - 内存占用高，显存需求大<br>- 对硬件要求高，需要支持多纹理渲染<br>- 不支持透明物体，处理复杂 |
| **性能影响**     | - 渲染Pass数量与光源数量和物体数量相关<br>- 大量光源会导致性能急剧下降 | - 光照计算与物体数量无关，只与屏幕分辨率和光源数量相关<br>- 性能主要受限于显存带宽和计算能力 |
| **硬件要求**     | - 适用于大多数图形硬件，包括低端设备<br>- 不需要特殊硬件支持 | - 需要支持多纹理渲染和较复杂的着色器<br>- 对显存容量和带宽要求较高 |
| **适用场景**     | - 光源数量较少的场景<br>- 对光照质量要求高的简单场景<br>- 移动设备或性能受限的平台 | - 光源数量多的复杂场景<br>- 需要高质量动态光照的实时应用<br>- 高端PC或游戏主机 |
| **透明物体处理** | 支持透明物体，但性能开销较大                                 | 不支持透明物体，需要额外处理步骤                             |
| **内存占用**     | 较低，主要取决于纹理和材质                                   | 较高，需要存储多个G-Buffer纹理                               |
| **实现复杂度**   | 简单，易于实现和调试                                         | 较复杂，需要处理G-Buffer和光照Pass                           |

![Render Path渲染路径](/Blog/posts/2025-2/image-20250208131046737.avif)

#### 1、Forward 前向渲染

![前向渲染的灯光模型](/Blog/posts/2025-2/image-20250209094527141.avif)

1. 对于灯光渲染，前向渲染是以物体为单位，一遍一遍将所有灯光效果一个一个渲染到物体上然后开始下一个物体渲染灯光

2. 关于Forward前向渲染的消耗问题，引擎对它的灯光数量是有限制的
   - 可以到项目设置（Project Settings > Quality > Rendering > Pixel Light Count）中修改灯光数量

![项目设置位置参考](/Blog/posts/2025-2/image-20250209094322048.avif)

3. 内置渲染管线Built-in和URP之间的区别

   两者之间使用的最终要的区别是：

   - **Built-in** 内置渲染管线需要两个Pass实现灯光效果，通过ForwardBase+ForwardAdd实现，并且每增加一个灯光同比增加一个ForwardAdd。
   - **URP** URP渲染管线对于灯光的实现就是直接在一个

| 特性/功能        | Built-in Render Pipeline                                     | Universal Render Pipeline (URP)                              |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **渲染路径**     | 前向渲染是默认路径之一，支持无限数量的实时光源，但性能会随光源数量增加而下降 | 前向渲染路径支持1个方向光和最多8个其他光源，性能优化较好     |
| **光照支持**     | 支持方向光、点光源、聚光灯、区域光源；支持光照衰减、阴影投射、光照Cookie等高级特性 | 支持方向光、点光源、聚光灯；支持彩色光照Cookie，但区域光源支持有限 |
| **性能优化**     | 支持静态批处理和动态批处理，但大量光源可能导致性能瓶颈       | 支持静态批处理、动态批处理和SRP Batcher，限制光源数量以优化性能 |
| **材质和着色器** | 支持HLSL和Surface Shader，提供高度灵活性；支持多种材质类型（如金属、镜面反射等） | 使用HLSL编写着色器，支持Shader Graph；提供基本PBR材质支持，可自定义光照模型 |
| **平台兼容性**   | 适用于平台大多数（PC、移动设备、主机）                       | 专为跨平台设计，支持从移动设备到高端PC的多种硬件             |



#### 2、Deferred 延迟渲染

1. **MRT**：多重渲染目标（Multiple Render Targets，简称MRT）是一种先进的图形渲染技术，它允许在一次渲染过程中将数据写入多个渲染目标。这项技术在实现高级图形效果方面非常有用，例如延迟着色、屏幕空间环境光遮蔽（SSAO）等。
   1. **基本概念**：
      - MRT技术允许同时渲染到多个颜色缓冲区，每个缓冲区可以存储渲染结果的不同方面，如不同的RGBA色彩通道值、深度值等。
   2. **使用场景**：
      - **后处理效果**：MRT可以用于实现复杂的后处理效果，如屏幕空间环境光遮蔽(SSAO)、泛光(Bloom)、运动模糊等。
      - **同时渲染多个视图**：在某些情况下，可能需要同时渲染多个视图（如立方体贴图的六个面），每个视图需要单独的渲染目标。
      - **提高渲染效率**：MRT可以减少渲染通道的数量，避免多次渲染同一场景以生成不同效果，从而提高渲染效率和性能。
   3. **实现方式**：
      - 在OpenGL或WebGL中实现MRT，通常通过以下步骤：
        1. 创建和绑定帧缓冲对象（Framebuffer Object, FBO）：创建一个帧缓冲对象，并绑定多个纹理附件作为渲染目标。每个附件对应一个渲染目标，可以是颜色附件、深度附件或者模板附件。
        2. 配置每个附件：对每个纹理附件进行设置，包括纹理的格式、尺寸、采样参数等。
        3. 渲染到多个目标：在渲染过程中，通过设置合适的渲染目标来指定输出到多个纹理附件。
        4. 检查帧缓冲完整性：在所有设置完成后，确保帧缓冲对象的完整性，以确保能够正常渲染到指定的多个目标。

### 四、Phong光照模型的实现

#### 1、UnityShaderASE

#### 2、UnityShader

1. pass引入光照模型信息和调用关照模型函数库

   ```hlsl
   Pass
   {
   	Tags{"LightMode" = "ForwardBase"}  //光照模型必须要有的其一
   	CGPROGRAM
   	#pragma vertex vert
   	#pragma fragment frag
   	#pragma multi_compile_fwdbase		//光照模型必须要有的其二
   	#include "UnityCG.cginc"
   	#include "AutoLight.cginc"			//光照模型必须要有的其三
   	
   }
   ```

2. 获取需求信息 模型世界法线、模型世界顶点位置和摄像机视线方向

   ```hlsl
   struct appdate
   {
   	//获取物体法线
   	float3 normal : NORMAL;
   };
   struct v2f
   {
   	//将以下信息导入到片元
   	float3 normal_World : TEXCOORD1;
   	float3 pos_world : TEXCOORD2;
   };
   
   v2f vert (appdata v)
   {
   	//世界法线计算
   	o.normal_World = normalize(mul(float4(v.normal,0.0),Unity_WorldToObject).xyz);
   	//世界顶点位置计算
   	o.pos_world = mul(unity_ObjectToWorld,v.vertex).xyz;
   }
   
   fixed4 frag (v2f i) : SV_Target
   {
   	//世界法线和世界位置赋值
   	float3 normal_dir = normalize(i.normal_dir);
   	float3 view_dir = normalize(_WorldSpceCameraPos.xyz - i.pos_world);
   	//视线方向计算
   	half3 view_dir = normalize(_WorldSpaceCameraPos.xyz - i.pos_world);
   }
   ```
   
3. 计算Diffuse（漫反射）

   ```hlsl
   fixed4 frag (v2f i) : SV_Target
   {
   	
   }
   ```

   

4. 计算Specular（高光）

   ```hlsl
   
   ```

   

5. 计算Ambient（环境光）

   ```hlsl
   
   ```

   

