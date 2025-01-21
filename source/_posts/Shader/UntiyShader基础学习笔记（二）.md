---
title: UntiyShader基础学习笔记（二）.
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
- 学习Shader代码入门基础



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/%E5%85%B6%E4%BB%96/UnityTA%E5%AD%A6%E4%B9%A0%E8%AE%A1%E5%88%92/)
- VScode
- Unity2022·····
- UnityShader入门精要

---

**常用语法**

```
clip()  		//裁剪，低于括号中的数值的时候被渲染识别舍弃掉
saturate() 		//归一化矢量，范围限制掉0-1
```



## 一、UnityShaderLab基本框架

```UnityShader
Shader "123" //Shader Name  目录结构写法："CS01/123"
{
    Properties //实例属性，实例在材质面板上的属性
    {
        _Float("Float",Float) = 0.0                     //浮点类型实例
        _Range("Range",Range(0.0,1.0)) = 0.0            //浮点范围类型实例
        _Color("Color",Color) = (0.5,0.5,0.5,0.5)    //颜色类型实例
        _Vector("Vector",Vector) = (1,1,1,1)            //向量类型实例
        _Texture("Texture", 2D) = "white" { }           //贴图类型实例
        
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



## 二、UnityShaderLab内容（示例）

```UnityShader
Shader "CS02/MiniShader" //Shader的真正名字  可以是路径式的格式
{
	/*材质球参数及UI面板
	https://docs.unity3d.com/cn/current/Manual/SL-Properties.html
	https://docs.unity3d.com/cn/current/ScriptReference/MaterialPropertyDrawer.html
	https://zhuanlan.zhihu.com/p/93194054
	*/
	Properties 
	{
		_MainTex ("Texture", 2D) = "" {}
		_Float("Float", Float) = 0.0
		_Slider("Slider", Range(0.0,1.0)) = 0.07
		_Vector("Vector", Vector) = (.34, .85, .92, 1) 
	}
	/*
	这是为了让你可以在一个Shader文件中写多种版本的Shader，但只有一个会被使用。
	提供多个版本的SubShader，Unity可以根据对应平台选择最合适的Shader
	或者配合LOD机制一起使用。
	一般写一个即可
	*/
	SubShader
	{
		/*
		标签属性，有两种：一种是SubShader层级，一种在Pass层级
		https://docs.unity3d.com/cn/current/Manual/SL-SubShaderTags.html
		https://docs.unity3d.com/cn/current/Manual/SL-PassTags.html
		*/
		Tags { "RenderType"="Opaque" } 
		/*
		Pass里面的内容Shader代码真正起作用的地方，
		一个Pass对应一个真正意义上运行在GPU上的完整着色器(Vertex-Fragment Shader)
		一个SubShader里面可以包含多个Pass，每个Pass会被按顺序执行
		*/
		Pass 
		{
			CGPROGRAM  // Shader代码从这里开始
			#pragma vertex vert //指定一个名为"vert"的函数为顶点Shader
			#pragma fragment frag //指定一个名为"frag"函数为片元Shader
			#include "UnityCG.cginc"  //引用Unity内置的文件，很方便，有很多现成的函数提供使用

			//https://docs.unity3d.com/Manual/SL-VertexProgramInputs.html
			struct appdata  //CPU向顶点Shader提供的模型数据
			{
				//冒号后面的是特定语义词，告诉CPU需要哪些类似的数据
				float4 vertex : POSITION; //模型空间顶点坐标
				half2 texcoord0 : TEXCOORD0; //第一套UV
				half2 texcoord1 : TEXCOORD1; //第二套UV
				half2 texcoord2 : TEXCOORD2; //第二套UV
				half2 texcoord4 : TEXCOORD3;  //模型最多只能有4套UV

				half4 color : COLOR; //顶点颜色
				half3 normal : NORMAL; //顶点法线
				half4 tangent : TANGENT; //顶点切线(模型导入Unity后自动计算得到)
			};

			struct v2f  //自定义数据结构体，顶点着色器输出的数据，也是片元着色器输入数据
			{
				float4 pos : SV_POSITION; //输出裁剪空间下的顶点坐标数据，给光栅化使用，必须要写的数据
				float2 uv : TEXCOORD0; //自定义数据体
				//注意跟上方的TEXCOORD的意义是不一样的，上方代表的是UV，这里可以是任意数据。
				//插值器：输出后会被光栅化进行插值，而后作为输入数据，进入片元Shader
				//最多可以写16个：TEXCOORD0 ~ TEXCOORD15。
				float3 normal : TEXCOORD1;
			};

			/*
			Shader内的变量声明，如果跟上面Properties模块内的参数同名，就可以产生链接
			*/
			sampler2D _MainTex;
			float4 _MainTex_ST;
			//Unity内置变量：https://docs.unity3d.com/560/Documentation/Manual/SL-UnityShaderVariables.html
			//Unity内置函数：https://docs.unity3d.com/560/Documentation/Manual/SL-BuiltinFunctions.html
			
			//顶点Shader
			v2f vert (appdata v)
			{
				v2f o;
				float4 pos_world = mul(unity_ObjectToWorld, v.vertex);
				float4 pos_view = mul(UNITY_MATRIX_V, pos_world);
				float4 pos_clip = mul(UNITY_MATRIX_P, pos_view);
				o.pos = pos_clip;
				//o.pos = mul(UNITY_MATRIX_MVP, v.vertex);
				//o.pos = UnityObjectToClipPos(v.vertex);
				o.uv = v.texcoord0 * _MainTex_ST.xy + _MainTex_ST.zw;
				//o.uv = TRANSFORM_TEX(v.uv, _MainTex);
				o.normal = v.normal;
				return o;
			}
			//片元Shader
			half4 frag (v2f i) : SV_Target //SV_Target表示为：片元Shader输出的目标地（渲染目标）
			{
				//fixed4 col = tex2D(_MainTex, i.uv);
				half4 col = float4(i.uv,0.0,0.0);
				return col;
			}
			ENDCG // Shader代码从这里结束
		}
	}
}

```

渲染常用设置：

```UnityShader
    Properties
    {
        _MinTex("MinTex",2D) = "black"{}
        [Enum(UnityEngine.Rendering,CullMode)]_CullMode("CullMode",Float) = 2
        //实例剔除选择按钮到材质面板
        //Enum(UnityEngine.Rendering,CullMode)Unity内置的属性名
        //_CullMode("CullMode",Float) = 2 实例化的名字和默认数值
    }
    SubShader
    {	
    	Tags{"Queue" = "Transparent"}   //渲染队列
        Pass
        {
        	Zwrite Off   //深度开关
        	Blend SrcAlpha OneMinusSrcAlpha  //混合模式开关
            Cull Off //背面剔除开关  1、Cull Off  背面剔除关闭； 2、Cull Front 正面剔除
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdate
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

```

制作测试示例

- 动态波纹案例

  本次示例学到了Time场景时间参数、clip参数的使用和控制UV的方式。

  ```
  shader "Unit/ceshi"
  {
      Properties
      {
          _Color("Color",Color) = (1,1,1,1)
          _MainTex("MainTex",2D) = "white"
          _Noistex("Noistex",2D) = "white"
          _Vector("Vector",Vector) = (0,0,0,0)
          _Ton("Ton",Float) = 0.0
          _Speed("Speed",Vector) = (0,0,0,0)
      }
      SubShader
      {
          Pass
          {
              CGPROGRAM
              #pragma vertex vert
              #pragma  fragment frag
              #include "Unitycg.cginc"
  
              struct appdata
              {
                  float4 vertex : POSITION;
                  float2 uv : TEXCOORD0;
              };
  
              struct v2f
              {
                  float4 vertex : SV_POSITION;
                  float2 uv : TEXCOORD0;
              };
              float4 _Color;
              sampler2D _MainTex;
              sampler2D _Noistex;
              float4 _Vector;
              float _Ton;
              float4 _Speed;
  
              v2f vert(appdata v)
              {
                  v2f o;
                  o.vertex = UnityObjectToClipPos(v.vertex);
                  o.uv = v.uv + _Vector.xy + _Vector.zw ;
                  return o;
              }
  
              float4 frag (v2f i) : SV_Target
              {
                  half Maintex = tex2D(_MainTex,i.uv + _Time.y * _Speed.xy);
                  half nois = tex2D (_Noistex,i.uv + _Time.y * _Speed.zw);
                  clip(Maintex - nois - _Ton);
                  return Maintex.xxxx;
              }
              
              ENDCG
          }
      }
  }
  ```

  

- 半透明混合（问题以及解决方案）

  关闭深度写入

  打开半透明混合

  渲染队列排序

  ```
  shader "Unit/ceshi"
  {
      Properties
      {
          _Color("Color",Color) = (1,1,1,1)
          _MainTex("MainTex",2D) = "white"
  //        _Noistex("Noistex",2D) = "white"
  //        _Vector("Vector",Vector) = (0,0,0,0)
  //        _Ton("Ton",Float) = 0.0
          _Emiss("Emiss",Float) = 1.0
  //        _Speed("Speed",Vector) = (0,0,0,0)
      }
      SubShader
      {
          ZWrite Off
          Blend SrcAlpha OneMinusSrcAlpha
          Pass
          {
              CGPROGRAM
              #pragma vertex vert
              #pragma  fragment frag
              #include "Unitycg.cginc"
  
              struct appdata
              {
                  float4 vertex : POSITION;
                  float2 uv : TEXCOORD0;
              };
  
              struct v2f
              {
                  float4 vertex : SV_POSITION;
                  float2 uv : TEXCOORD0;
              };
              float4 _Color;
              sampler2D _MainTex;
              sampler2D _Noistex;
              float4 _Vector;
              float _Ton;
              float4 _Speed;
              float _Emiss;
  
              v2f vert(appdata v)
              {
                  v2f o;
                  o.vertex = UnityObjectToClipPos(v.vertex);
                  o.uv = v.uv + _Vector.xy + _Vector.zw ;
                  return o;
              }
  
              float4 frag (v2f i) : SV_Target
              {
                  // half Maintex = tex2D(_MainTex,i.uv + _Time.y * _Speed.xy);
                  // half nois = tex2D (_Noistex,i.uv + _Time.y * _Speed.zw);
                  // clip(Maintex - nois - _Ton);
                  half3 col = _Color.xyz * _Emiss;
                  half alpha = saturate(tex2D(_MainTex,i.uv).r * _Color .a * _Emiss);
                  return float4(col,alpha);
              }
              
              ENDCG
          }
      }
  }
  ```

- 边缘光Shader案例

  知识点：

  - 计算摄像机和物体之间的点乘结果计算物体边缘
  - 边缘与中心的光源渐变
  - 预先写深度

  ```
  Shader "Unit/Rim"
  {
      Properties
      {
          _MainColor("MinColor",Color) = (1,1,1,1)
          _Emiss("Emiss",Float) = 0.0
          _Power("Power",Float) = 0.0
      }
      SubShader
      {
          Tags {"Queue" = "Transparent"}
          //预先写深度的pass
          Pass
          {
              Cull Off
              ZWrite On
              ColorMask 0
              CGPROGRAM
              float4 _Color;
              #pragma vertex vert
              #pragma fragment frag
              float4 vert(float4 vertexPos : POSITION) : SV_POSITION
              {
                  return UnityObjectToClipPos(vertexPos);
              }
              float4 frag(void) : COLOR
              {
                  return _Color;
              }
              
              ENDCG
          }
          Pass
          {
              ZWrite On
              Blend SrcAlpha One
              CGPROGRAM
              #pragma vertex vert
              #pragma fragment frag
              #include "UnityCG.cginc"
  
              struct appdata
              {
                  float4 vertex : POSITION;
                  float3 normal : NORMAL;
                  float2 uv : TEXCOORD0;
              };
              struct v2f
              {
                  float4 vertex : SV_POSITION;
                  float3 normal_world : NORMAL;
                  float2 pos_uv : TEXCOORD0;
                  float3 view_world : TEXCOORD1;
              };
              float4 _MainColor;
              float _Emiss;
              float _Power;
  
              v2f vert(appdata v)
              {
                  v2f o;
                  o.vertex = UnityObjectToClipPos(v.vertex);
                  o.pos_uv = v.uv;
                  o.normal_world =normalize( mul(float4(v.normal,0.0),unity_WorldToObject).xyz); //计算世界法线
                  float3 pos_world = mul(unity_ObjectToWorld,v.vertex).xyz;
                  o.view_world = normalize(_WorldSpaceCameraPos.xyz - pos_world) ; //计算摄像机的世界法线
                  return o;
              }
  
              float4 frag(v2f i) : SV_Target
              {
                  half3 normal_world = normalize( i.normal_world);
                  half3 view_world = normalize( i.view_world);
                  half NdotV = saturate(dot(normal_world,view_world)) ;
                  half3 col = _MainColor.xyz *_Emiss;
                  float fresnel = pow((1.0 - NdotV) , _Power );
                  half alpha =saturate(fresnel *_Emiss); 
                  return float4(col,alpha);
              }
              ENDCG
  ```

  

