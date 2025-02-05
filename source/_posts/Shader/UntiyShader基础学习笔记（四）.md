---
title: UntiyShader基础学习笔记（四）
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
date: 2025-02-02 12:52:16
---

---

**本章节学习目标：** 

- 学习案例制作薄膜干涉效果
- 熟悉Unity ASE工具的使用
- 熟悉Matcap技术（Material Capture；材质捕捉技术）



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- [UnityShaderASE节点全解](https://blog.maoxiang.site/2024/12/18/Shader/UnityShaderASE%E8%8A%82%E7%82%B9%E5%85%A8%E8%A7%A3/)
- VScode
- Unity2022·····
- UnityShader入门精要

---

::: t
**薄膜干涉解析：**

1. **定义**
   - 薄膜干涉是指光线在薄膜的上下两个表面反射后形成的干涉现象。薄膜可以是透明的薄片，如肥皂膜、玻璃片等，其厚度通常在光的波长数量级（例如在可见光波段，波长约为400 - 700纳米）。
2. **形成原理**
   - 当一束平行光照射到薄膜上时，一部分光在薄膜的上表面反射，另一部分光穿过薄膜在薄膜的下表面反射。这两束反射光在薄膜上方相遇，由于它们是从同一入射光束分离出来的，频率相同，满足相干条件，所以会发生干涉。
   - 例如，对于肥皂膜，当白光照射时，不同波长的光在肥皂膜上下表面反射后，由于薄膜厚度不同，不同波长的光在叠加时相位差不同，从而产生彩色条纹。这是因为光程差（由薄膜厚度和光在薄膜中的折射率决定）和光的波长共同决定了干涉的相长或相消。
3. **应用**
   - 薄膜干涉在光学领域有广泛的应用。例如，在光学仪器中，利用薄膜干涉原理可以制造增透膜。增透膜通过选择合适的薄膜材料和厚度，使反射光相互抵消，从而增加透射光的强度。在光学滤光片中，也可以通过多层薄膜干涉来选择性地透过或反射特定波长的光。

:::

![薄膜干涉概念图](/Blog/posts/2025-2/image-20250202130033774.avif)

![薄膜干涉shader应用案例](/Blog/posts/2025-2/image-20250202130103184.avif)

### 一、Matcap技术详解

#### 1、参考：Matcap低成本实现PBR的原理和实现参考网址：（[MatCap：低成本PBR的原理与实现 - 知乎](https://zhuanlan.zhihu.com/p/523772891)）

#### 2、什么是Matcap贴图

#### 3、Matcap技术解析

Matcap（Material Capture，材质捕获）是一种高效的渲染技术，主要用于快速模拟材质的光照和反射效果。

**（1）原理**

​	Matcap 技术的核心是将复杂的光照和材质信息预先烘焙到一张二维贴图中。这张贴图通常是一个单位球的渲染结果，包含了光照、反射、阴影等信息。在渲染时，通过物体表面的法线方向来采样这张贴图，从而获得相应的材质效果。具体来说：

- **法线采样**：将物体表面的法线转换到视图空间，然后根据法线的 *x* 和 *y* 分量计算 UV 坐标，用于从 Matcap 贴图中采样。
- **离线渲染**：Matcap 贴图是在离线状态下生成的，因此渲染时无需复杂的光照计算。

**（2）实现**

- **获取 Matcap 贴图**：可以通过下载现成的 Matcap 贴图、使用 DCC 软件（如 Blender、ZBrush）渲染、在引擎中截图或手绘等方式生成。
- **采样代码**：在着色器中，将法线转换到视图空间后，通过简单的坐标变换将其映射到 Matcap 贴图的 UV 坐标范围内，然后进行采样。

**（3）应用**

- **高效渲染**：Matcap 技术计算成本低，适合在移动设备、WebGL 平台等资源受限的环境中使用。
- **风格化效果**：可以用于创建风格化的材质效果，如卡通渲染、特殊的光影效果等。
- **角色和模型预览**：在 DCC 工具中快速预览角色或模型的材质效果。

**（4）优缺点**

- **优点**：
  - **性能高效**：无需复杂的光照计算，渲染速度快。
  - **效果丰富**：通过一张贴图即可实现复杂的材质效果。
- **缺点**：
  - **静态光照**：Matcap 贴图中的光照是固定的，无法动态响应场景中的灯光变化。
  - **视角限制**：效果依赖于摄像机视角，不适用于摄像机频繁旋转的场景。
  - **曲率问题**：在曲率较大的模型上可能出现采样错误。

Matcap 技术在需要快速渲染且对光照动态性要求不高的场景中具有显著优势，但其局限性也限制了其在某些复杂场景中的应用。

![MatCap材质效果展示](/Blog/posts/2025-2/v2-e5272ef0f4b399dfb6091ec9e878e3e5_1440w.avif)

![MatCap的缺陷](/Blog/posts/2025-2/v2-4f50726823d039560b2f032d4ba4738f_1440w.avif)

![MatCap Shader代码实现](/Blog/posts/2025-2/v2-8272b5a97dc3401591ffa75b45c91547_1440w.avif)

### 二、案例讲解（甲虫薄膜干涉效果）

#### 1、模糊Skybox天空和效果实现

- （1）实现代码

```
Shader "Skybox/Cubemap-Filter" {
Properties {
    _Tint ("Tint Color", Color) = (.5, .5, .5, .5) // 染色颜色，用于调整天空盒的颜色
    [Gamma] _Exposure ("Exposure", Range(0, 8)) = 1.0 // 曝光值，控制天空盒的亮度
    _Rotation ("Rotation", Range(0, 360)) = 0 // 旋转角度，控制天空盒的旋转
	_Blur("Blur",Range(0,1)) = 0 // 模糊程度，控制天空盒的模糊效果
    [NoScaleOffset] _Tex ("Cubemap   (HDR)", Cube) = "grey" {} // 立方体贴图纹理，用于天空盒
}

SubShader {
    Tags { "Queue"="Background" "RenderType"="Background" "PreviewType"="Skybox" } // 设置渲染队列和类型
    Cull Off ZWrite Off // 关闭背面剔除和深度写入

    Pass {

        CGPROGRAM
        #pragma vertex vert // 定义顶点着色器函数
        #pragma fragment frag // 定义片段着色器函数
        #pragma target 2.0 // 设置着色器目标版本

        #include "UnityCG.cginc" // 包含Unity内置的CG头文件

        samplerCUBE _Tex; // 立方体贴图采样器
        half4 _Tex_HDR; // 立方体贴图的HDR信息
        half4 _Tint; // 染色颜色
        half _Exposure; // 曝光值
        float _Rotation; // 旋转角度
		float _Blur; // 模糊程度

        // 绕Y轴旋转顶点函数
        float3 RotateAroundYInDegrees (float3 vertex, float degrees)
        {
            float alpha = degrees * UNITY_PI / 180.0; // 将角度转换为弧度
            float sina, cosa;
            sincos(alpha, sina, cosa); // 计算正弦和余弦值
            float2x2 m = float2x2(cosa, -sina, sina, cosa); // 构建旋转矩阵
            return float3(mul(m, vertex.xz), vertex.y).xzy; // 应用旋转并返回结果
        }

        struct appdata_t {
            float4 vertex : POSITION; // 输入顶点位置
            UNITY_VERTEX_INPUT_INSTANCE_ID // 实例ID，用于多实例渲染
        };

        struct v2f {
            float4 vertex : SV_POSITION; // 输出顶点位置
            float3 texcoord : TEXCOORD0; // 输出纹理坐标
            UNITY_VERTEX_OUTPUT_STEREO // 立体渲染输出
        };

        // 顶点着色器函数
        v2f vert (appdata_t v)
        {
            v2f o;
            UNITY_SETUP_INSTANCE_ID(v); // 设置实例ID
            UNITY_INITIALIZE_VERTEX_OUTPUT_STEREO(o); // 初始化立体渲染输出
            float3 rotated = RotateAroundYInDegrees(v.vertex, _Rotation); // 旋转顶点
            o.vertex = UnityObjectToClipPos(rotated); // 将顶点转换到裁剪空间
            o.texcoord = v.vertex.xyz; // 设置纹理坐标
            return o;
        }

        // 片段着色器函数
        fixed4 frag (v2f i) : SV_Target
        {
			float lod_bias = _Blur * 6.0f; // 计算LOD偏移量
            half4 tex = texCUBElod (_Tex, float4(i.texcoord,lod_bias)); // 采样立方体贴图并应用模糊
            half3 c = DecodeHDR (tex, _Tex_HDR); // 解码HDR颜色
            c = c * _Tint.rgb * unity_ColorSpaceDouble.rgb; // 应用染色和颜色空间调整
            c *= _Exposure; // 应用曝光值
            return half4(c, 1); // 返回最终颜色
        }
        ENDCG
    }
}

Fallback Off // 没有后备着色器
}

```

- （2）实现原理

这个Unity着色器的主要功能是创建一个带有旋转、曝光、模糊和染色效果的天空盒。下面是对该着色器实现原理的详细解释：

1. **属性定义**：
    - `_Tint`：染色颜色，用于调整天空盒的整体颜色。
    - `_Exposure`：曝光值，控制天空盒的亮度。
    - `_Rotation`：旋转角度，控制天空盒的旋转效果。
    - `_Blur`：模糊程度，控制天空盒的模糊效果。
    - `_Tex`：立方体贴图纹理，用于天空盒的背景。

2. **SubShader和Pass设置**：
    - `Tags`：设置渲染队列为背景，渲染类型为背景，并指定预览类型为天空盒。
    - `Cull Off ZWrite Off`：关闭背面剔除和深度写入，确保天空盒正确渲染在场景的背景。

3. **顶点着色器 (`vert`)**：
    - 输入：顶点位置 (`vertex`) 和实例ID。
    - 输出：裁剪空间中的顶点位置 (`vertex`) 和纹理坐标 (`texcoord`)。
    - 通过 `RotateAroundYInDegrees` 函数根据 `_Rotation` 属性旋转顶点。
    - 使用 `UnityObjectToClipPos` 将旋转后的顶点转换到裁剪空间。
    - 将顶点的原始位置作为纹理坐标传递给片段着色器。

4. **片段着色器 (`frag`)**：
    - 输入：顶点着色器输出的裁剪空间顶点位置和纹理坐标。
    - 输出：最终的颜色值。
    - 根据 `_Blur` 属性计算LOD偏移量 (`lod_bias`)。
    - 使用 `texCUBElod` 函数采样立方体贴图，并应用模糊效果。
    - 使用 `DecodeHDR` 函数解码HDR颜色。
    - 应用 `_Tint` 和 `unity_ColorSpaceDouble` 调整颜色，并应用 `_Exposure` 控制亮度。
    - 返回最终的颜色值。

5. **Fallback Off**：
    - 指定没有后备着色器，意味着如果当前着色器无法运行，Unity将不会使用其他着色器替代。

总结：
- 这个着色器通过旋转、模糊、曝光和染色等效果来渲染天空盒。
- 顶点着色器负责处理顶点的旋转和坐标变换。
- 片段着色器负责从立方体贴图中采样颜色，并应用各种效果以生成最终的像素颜色。

<br>

#### 2、实现简单的Matcap效果

![image-20250202153322219](/Blog/posts/2025-2/image-20250202153322219.avif)

- （1）将模型法向从模型空间转换到相机空间

  - 目的：将模型空间法向朝向相对于摄像机时钟保持在一个方向

- （2）取其中的x，y分量

  ![image-20250202153401863](/Blog/posts/2025-2/image-20250202153401863.avif)

- （3）将其缩放至0-1的范围中
  - 方法：当前数值加1除以2

- （4）添加Matcap贴图的效果展示

  ![image-20250202153636604](/Blog/posts/2025-2/image-20250202153636604.avif)

  ![image-20250202153645193](/Blog/posts/2025-2/image-20250202153645193.avif)

- （5）Matcap技术的缺陷

  - 移动到相机边缘会出现采样到贴图边缘部分的内容

    如图：白色部分为贴图边缘内容

    ![image-20250202154624236](/Blog/posts/2025-2/image-20250202154624236.avif)

- （6）Matcap缺陷的实现方式

#### 2、UnityShaderASE使用matcap实现薄膜干扰效果

![实现效果](/Blog/posts/2025-2/image-20250203141632530.avif)

- （1）实现方法

  - Matcap技术实现方式

  ![matcap贴图实现](/Blog/posts/2025-2/image-20250203140830705.avif)

  - 薄膜干扰技术实现方式

  ![薄膜干扰技术](/Blog/posts/2025-2/image-20250203141328689.avif)

  - 贴图实现

    金属性：

    ![image-20250203142457647](/Blog/posts/2025-2/image-20250203142457647.avif)

    高光：

    ![image-20250203142512795](/Blog/posts/2025-2/image-20250203142512795.avif)

    漫反射：

    ![image-20250203142526801](/Blog/posts/2025-2/image-20250203142526801.avif)

    凹凸（法线）：

    ![image-20250203143723377](/Blog/posts/2025-2/image-20250203143723377.avif)

- （2）后处理（调整色彩色相效果）

  ![image-20250203144734538](/Blog/posts/2025-2/image-20250203144734538.avif)

#### 3、UnityShader实现Matcap实现薄膜干扰效果



