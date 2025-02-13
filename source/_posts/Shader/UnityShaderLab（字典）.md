---
title: UnityShaderLab（字典）
tags:
  - Unity
  - Shader
  - HLSL
  - 预设模版
cover: /tex/HLSL+Unity.avif
avatar: /T/文章头像.png
desc: 作者头像下的页面描述
recommend: true
published: true
date: 2024-12-02 10:50:25
---

---

**本章节主要作用：**

UnityShader模版，主要做提示和参考用。



**配置环境：**

- UnityShaderLab
- VScode
- JetBrains Riader
- Unity（2019以上版本）

---

## 一、Properties（属性实例模版）

## 1、数据类型的使用场景

```
float
half

```



###  2、常用属性实例

```
Properties //实例属性，实例在材质面板上的属性
    {
        _Float("Float",Float) = 0.0                     //浮点类型实例
        _Range("Range",Range(0.0,1.0)) = 0.0            //浮点范围类型实例
        _Color("Color",Color) = (0.5,0.5,0.5,0.5)     	//颜色类型实例
        _Vector("Vector",Vector) = (1,1,1,1)            //向量类型实例
        _Texture("Texture", 2D) = "white" { }           //贴图类型实例

    }
```



## 二、SubShader （子材质属性模版）

```
SubShader
	{
		Tags { "RenderType"="Opaque" } 
		//1、透明队列
		Tags { "Queue"="Transparent" } 
    }

```



## 三、Pass

```
Pass 
    {
        CGPROGRAM 										    // Shader代码从这里开始
        #pragma vertex vert 							    //指定一个名为"vert"的函数为顶点Shader
        #pragma fragment frag 		 						//指定一个名为"frag"函数为片元Shader
        #include "UnityCG.cginc"  	 						//引用Unity内置的文件，很方便，有很多现成的函数提供使用

        //https://docs.unity3d.com/Manual/SL-VertexProgramInputs.html
        struct appdata  //CPU向顶点Shader提供的模型数据
        {
            //冒号后面的是特定语义词，告诉CPU需要哪些类似的数据
            float4 vertex : POSITION; 						//模型空间顶点坐标
            half2 texcoord0 : TEXCOORD0;				    //第一套UV
            half2 texcoord1 : TEXCOORD1; 					//第二套UV
            half2 texcoord2 : TEXCOORD2; 					//第二套UV
            half2 texcoord4 : TEXCOORD3;  					//模型最多只能有4套UV

            half4 color : COLOR; 							//顶点颜色
            half3 normal : NORMAL; 							//顶点法线
            half4 tangent : TANGENT; 						//顶点切线(模型导入Unity后自动计算得到)
        };

        struct v2f  										//自定义数据结构体，顶点着色器输出的数据，也是片元着色器输入数据
        {
            float4 pos : SV_POSITION; 						//输出裁剪空间下的顶点坐标数据，给光栅化使用，必须要写的数据
            float2 uv : TEXCOORD0;						    //自定义数据体
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
```

## 四、片元、顶点Shader参数公式模版

### 1、计算模型的世界法线World Normal

```
o.normal_World = normalize(mul(float4(v.normal,0.0),Unity_WorldToObject).xyz);
```

### 2、计算模型的世界空间World Position

```
o.pos_world = mul(unity_ObjectToWorld,v.vertex).xyz;
```

#### 3、视线方向（摄像机朝向）

```
float3 view_dir = normalize(_WorldSpaceCameraPos.xyz - i.pos_World);
```

#### 4、光照的方向信息

```
float3 light_dir = normalize(_WorldSpaceLightPos0.xyz);
```

#### 5、光反射方向信息

```
float3 reflect_dir = reflect(-light_dir,Normal_dir);
```



### 五、光照模型

```
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

