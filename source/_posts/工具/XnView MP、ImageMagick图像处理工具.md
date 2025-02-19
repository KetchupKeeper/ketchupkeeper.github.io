---
title: XnView MP、ImageMagick图像处理工具
tags:
  - 工具
  - 图像优化
  - 图像处理
  - 图像批量管理
avatar: /T/文章头像.png
cover:
desc: 番茄酱守护者
recommend: false
published: true
date: 2025-02-17 10:37:54
---

---

**本章目标：**

- 记录工具的特点以及使用方法
- 记录工具的常用命令和使用技巧



**配置环境：**

- Windows11专业版
- XnView MP最新版（下载地址：https://www.xnview.com/en/xnviewmp）
- ImageMagick最新版（下载地址：https://github.com/ImageMagick/ImageMagick）

---

::: t
**提示**
XnView MP图形化界面更适合新手，功能严格意义上比不上ImageMagick的方便和易扩展，但是普遍用户都是够用的，这种情况下更推荐它。ImageMagick是命令行工具，需要一定的学习成本，相比前者学习成本较高。
:::

## 一、XnView MP

### 1、功能

1. **多格式支持**：支持100+种图片格式，安装插件后可达500+种，兼容性超强。
2. **批量处理**：可以批量转换、批量重命名、批量调整尺寸，轻松处理大量图片。
3. **丰富的编辑功能**：自带滤镜、照片拼接、裁剪、旋转等，简单快捷。
4. **幻灯片和缩略图制作**：一键生成幻灯片，快速制作缩略图，还能生成网页格式。
5. **图像查看与浏览**：支持超过500种图片格式，提供缩略图视图、全屏视图和胶片视图等多种浏览方式，并支持幻灯片放映模式。
6. **图像编辑**：具备裁剪、调整大小、旋转等功能，提供30多款滤镜，可以对图片进行各种效果处理。
7. **批量处理**：支持批量转换文件格式，一键重建缩略图，可以创建网页，将多张图片嵌入到一个网页中。
8. **其他高级功能**：屏幕捕捉功能，十六进制浏览模式，图片信息编辑，可以编辑图片的元数据，如作者名称、拍摄时间等。

### 2、图像处理

1. 选中图像直接右键（windows右键菜单）

   ![右键菜单](/Blog/posts/2025-2/image-20250217105703723.avif)

2. 打开软件界面，在浏览器中找到图片然后右键（软件专属菜单）

   ![软件右键菜单](/Blog/posts/2025-2/image-20250217110028907.avif)

### 3、批量处理

1. 批量输出操作

   ![批量输出操作](/Blog/posts/2025-2/image-20250217110152977.avif)

2. 批量输出设置

   ![批量输出设置](/Blog/posts/2025-2/image-20250217110250747.avif)

   

## 二、ImageMagick

### 1、使用（注意中文路径和中文名）

- 查看图片信息

  ```cmd
  identify bbb.avif
  magick identify bbb.avif
  ```

  

- 转换格式

  ```cmd
  
  convert "D:/Temp/test.avif" "D:/Temp/test.jpg"
  
  //表示把test.jpg这个图片另存一份为test.avif，同时修改了图片名称和格式
  magick test.jpg test.avif
  ```

  

- 合成gif

  ```cmd
  magick a.jpg b.jpg c.jpg test.gif
  magick *.jpg images.gif
  ```

  

- 调整图片大小

  ```cmd
  //按比例改变
  magick b.avif -resize 200%  b1.avif
  magick convert b.avif -resize 200%  b1.avif
  magick convert -resize 200% b.avif b1.avif
  //图片宽扩展为原来的2倍，高缩小为原来的一半
  magick convert b.avif -resize 200x50%  b7.avif
  magick convert b.avif -resize 200%x50%  b8.avif
  //宽调整为100，高按原来图片宽高比例跟着调整
  convert -resize 100 b.avif  b15.avif
  //高调整为200，宽按原来图片宽高比例跟着调整
  convert -resize x200 b.avif  b16.avif
  ```

  

- 移除图片内嵌的所有配置文件

  ```cmd
  magick convert -strip 1.jpg
  ```

- 裁剪图片

  ```cmd
  //crop参数可以把一副图像分成若干块大小一样的图片
  magick img1.jpg -crop 500x500 dest.jpg
  //在原始图像上裁剪一张指定尺寸的小图
  magick img1.jpg -crop 600x450+300+600 dest.jpg
  ```

- 图片取反

  ```cmd
  magick convert a.jpg -negate canny.jpg
  ```

  

- 压缩图片

  ```cmd
  magick convert -quality 80 1.jpg 2.jpg
  ```

- 给图片加边框

  ```cmd
  magick 1.jpg -bordercolor blue -border 5% 2.jpg
  ```

- 滤镜

  ```cmd
  magick convert monochrome .jpg -monochrome monochrome_example.jpg
  magick convert charcoal .jpg -charcoal 1.2 charcoal _example.jpg
  ```

  

- 边缘检测

  ```cmd
  magick convert a.jpg -canny 1 canny.jpg
  ```



### 2、批量操作

1. 实现思路

   - windows批处理中for命令来对文件进行批量操作。

   - ImageMagick是一款强大的图像处理软件，可以使用命令行来操作图片文件。

   - 以上两者的结合使用可以实现对图片文件的批量处理。

2. 功能

   - 批量压缩

   ```cmd
   //解释：读取当前目录下（含子文件夹）所有文件，对读取的文件执行压缩为宽为700，比例不变的命令。注：以上代码在命令行执行，批处理执行需要将%i改成%%i。
   for /f "delims=" %i in ('dir /b /a-d') do （magick convert -resize 700 %i %i）
   ```

   
