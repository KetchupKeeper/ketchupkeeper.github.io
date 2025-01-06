---
title: UnityShaderASE节点全解
tags:
  - TA
  - 预设模版
  - 工具
  - Unity
avatar: /T/文章头像.png
cover: /tex/HLSL+Unity.avif
desc: 番茄酱守护者
recommend: false
published: true
date: 2024-12-18 11:01:12
---

---

介绍：提供节点解析，节点样式记录



配置环境：

- [Amplify Shader Editor手册(中文版)](https://blog.csdn.net/DebuggerPrisonBreak/article/details/85863719)
- [Unity可视化Shader工具ASE介绍](https://blog.csdn.net/liweizhao/article/details/133780486)

- [Unity官方文档](https://docs.unity.cn/cn/2022.3/Manual/SL-PropertiesInPrograms.html)

---

## 一、数字和Vector类

 ![image-20241218155216367](/Blog/posts/2024-12/image-20241218155216367.avif)

**1、Float**
按着主键盘的数字键1（不是右边的数字键盘，下面不再重复说明），然后点鼠标左键。可以创建出Float节点。

**2、Vector2**
按着主键盘的数字键2，然后点鼠标左键。可以创建出Vector2节点。Vector2节点有xy两个参数。

**3、Vector3**
按着主键盘的数字键3，然后点鼠标左键。可以创建出Vector3节点。Vector3节点有xyz三个参数。

**4、Vector4**
按着主键盘的数字键4，然后点鼠标左键。可以创建出Vector4节点。Vector3节点有xyzw四个参数。

**5、Color**
按着主键盘的数字键5，然后点鼠标左键。可以创建出Color节点。Color节点有RGBA四个参数。

**6、Int**
按着主键盘的数字键0，然后点鼠标左键。可以创建出Int节点。

  把这几个放在一起，是因为好记，Float可以理解成是Vector1，那么1-4就是可以创建多少维的Vector了。然后Color其实也是一个Vector4，只是显示成RGBA，会比较好看。

## 二、运算符

![image-20241218155247219](/Blog/posts/2024-12/image-20241218155247219.avif)

**1、加法**

按着a键，然后点鼠标左键。可以创建出Add节点，也就是加法节点。

**2、减法**

按着s键，然后点鼠标左键。可以创建出Subtract节点，也就是减法节点。

**3、乘法**
按着m键，然后点鼠标左键。可以创建出Multiply节点，也就是乘法节点。

**4、除法**
按着d键，然后点鼠标左键。可以创建出Divide节点，也就是除法节点。

**5、一减**
按着字母o键，然后点鼠标左键。可以创建出OneMinus节点，也就是一减节点。举个例子，假如给OneMinus节点输入一个0.3，那么会输出一个1-0.3=0.7。

**6、次方**
按着e键，然后点鼠标左键。可以创建出power节点，也就是次方节点。

## 三、贴图类

![image-20241218155302254](/Blog/posts/2024-12/image-20241218155302254.avif)

**1、贴图采样**

  按着t键，然后点鼠标左键。可以创建出TextureSample节点，也就是贴图采样节点。 这个节点可以输入一张贴图。不过TextureSample节点和TextureObject节点是不一样的。TextureObject节点代表的是输入一张贴图，但并不一定直接采样，可以是进行其他的计算。所以TextureObject节点也可以当做TextureSample节点的输入

![image-20241218155332491](/Blog/posts/2024-12/image-20241218155332491.avif)

<br>

**2、UV**

  按着u键，然后点鼠标左键。可以创建出TextureCoordinates节点，也就是UV节点。这个UV节点，可以代表着模型本身的UV坐标，也可以指定当做某一张贴图的UV。区别在于某一张贴图的UV可以单独指定平铺次数。

![image-20241218155355483](/Blog/posts/2024-12/image-20241218155355483.avif)

<br>

## 四、向量计算类

![在这里插入图片描述](/Blog/posts/2024-12/318276353b2a2dda557d662d1b5b5324.avif)

**1、叉乘**
按着x键，然后点鼠标左键。可以创建出Cross节点，也就是向量叉乘节点。

**2、点乘**
按着句号.键，然后点鼠标左键。可以创建出Dot节点，也就是向量点乘节点。

**3、向量标准化**
按着n键，然后点鼠标左键。可以创建出Normalize节点，也就是向量标准化节点。

## 五、通道处理类

![在这里插入图片描述](/Blog/posts/2024-12/37426e339876edebd1a0af9b9d377835.avif)

**1、组合通道**
  按着v键，然后点鼠标左键。可以创建出Append节点，也就是组合通道节点。通过输入多个float，可以组成一个Vector。

![在这里插入图片描述](/Blog/posts/2024-12/98e5940e5acdf4a8213f528637b8f8ad.avif)


然后这个Vector是多少维的也是可以选择：

**2、提取通道**
  按着z键，然后点鼠标左键。可以创建出Swizzle节点，也就是提取通道节点。具体的作用是，可以把输入的Vector或者Color，提取其中的某几个通道，组合成新的Vector或者Color

![在这里插入图片描述](/Blog/posts/2024-12/ef4d9d800eed1722ad29b2db0b7888b7.avif)

![在这里插入图片描述](/Blog/posts/2024-12/0d29f3774ac32d19379e25fda3af0474.avif)

**3、通道拆分**
  按着b键，然后点鼠标左键。可以创建出BreakToComponents节点，也就是拆分通道节点。具体的作用是可以把一个Vector或者Color拆分成多个单独的通道。

![在这里插入图片描述](/Blog/posts/2024-12/ed7325d6d4a2b855b3302fafd7534eeb.avif)

**4、通道遮罩**
  按着k键，然后点鼠标左键。可以创建出ComponentMask节点，也就是通道遮罩节点。它的具体作用是对一个输入的Vector或者Color，可以选择过滤掉某几个通道，然后输出。

![在这里插入图片描述](/Blog/posts/2024-12/914eebb42106b70fbc0ba31d408a73d6.avif)

## 六、注册类

![在这里插入图片描述](/Blog/posts/2024-12/58458f5a1dd89c67a94238e0eb8155f8.avif)

**1、注册值**
  按着r键，然后点鼠标左键。可以创建出RegisterLocalVar节点，也就是注册值节点。可以把任意的值注册到一个变量，方便后面提取使用。

![在这里插入图片描述](/Blog/posts/2024-12/37f98fcbf67ee899b4d72c23c647ff65.avif)

**2、提取值**
  按着g键，然后点鼠标左键。可以创建出GetLocalVar节点，也就是提取值节点。上面注册了的变量，可以通过这个GetLocalVar节点来提取使用

![在这里插入图片描述](/Blog/posts/2024-12/d9cb292a95cf3906f512b41c74842cd7.avif)

## 七、其他类

**1、插值**
  按着l键，然后点鼠标左键。可以创建出Lerp节点，线性插值节点。从下图可以看出，Lerp通过Alpha值(0-1)控制A和B值的线性插值结果。

![在这里插入图片描述](/Blog/posts/2024-12/bd43cc1259052b390b2147cd0b1051f3.avif)

**2、注释**
  框选多个节点，然后按键盘c键，可以把一堆节点打成一个备注组，上面可以写标题内容和改变颜色，方便查看。

![在这里插入图片描述](/Blog/posts/2024-12/65cdb4af06dad3ee858af4ee98a51a16.avif)

## 八、其他常用节点

::: w
**注意**
下面这些节点并没有快捷键，是一些常用节点。
:::

1、Step
输入一个值，然后对比，得出的结果将会是0或者1。

![在这里插入图片描述](/Blog/posts/2024-12/d64f3eaca8e0d72fb410c83d8e6febc9.avif)

2、SmoothStep
对比起Step，Smooth会比较柔和的把输入值控制在一个区间内，有一定的过渡效果。

![在这里插入图片描述](/Blog/posts/2024-12/abb9e403bd8b90df8018df444607a6b4.avif)

3、Saturate
把输入的值控制在0-1之间。如果小于0则等于0，如果大于1则等于1。

![在这里插入图片描述](/Blog/posts/2024-12/172784c6420b4f505e8f9d1976c70c00.avif)

4、Clamp
把输入的值控制在最大和最小值之间。

![在这里插入图片描述](/Blog/posts/2024-12/fe87dceee47661dd59a4008120bcdd2f.avif)

5、Fract
保留小数部分

![在这里插入图片描述](/Blog/posts/2024-12/140211eee9ec8f87c7b9129c25c81650.avif)

6、Relay
  没有任何具体效果，只是用来预览。ASE的大部分节点都有预览功能，不过有时候对于有些复杂的效果，我们也可以建一个Relay节点，作为专门的预览作用。

![在这里插入图片描述](/Blog/posts/2024-12/e301f6f7b8622bb55b1edf17c080e144.avif)

