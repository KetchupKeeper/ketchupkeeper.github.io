---
title: Blender预设/模版
tags:
  - Blender
  - 预设
  - 美术向
abbrlink: 85af305e
date: 2024-11-23 15:09:04
top_img: /tex/Blender.png
cover: /tex/Blender.png
---

---

**注意：**	

本章是我自己设计给自己使用的一套**饼菜单方案**，避免了记背快捷键和命令的问题，这套方案是以3ds Max快捷键习惯为基础设计的，也可以设置成Maya、C4D等其他软件。



**我的Blender配置文件：**
通过网盘分享的文件：Blander配置文件
链接: https://pan.baidu.com/s/12m1_V1utrA6pfw7GFFCAeg 

提取码: 53gr 



**环境配置：**

1. 辣椒酱开发的铁锅炖Blender登录器

   [铁锅炖启动器（百度云）](https://pan.baidu.com/share/init?surl=qxny4sNtbj_KJC26rw6EOQ&pwd=2333)

2. Blender Pie Menu Editor（饼菜单插件）

   正版：[Pie Menu Editor （12$）](https://roaoao.gumroad.com/l/pie_menu_editor)

   龋齿一号：[Blender饼状菜单对话框工具栏插件 Pie Menu Editor V1.18.7 | 龋齿一号GFXCamp](https://www.gfxcamp.com/pie-menu-editor/)

3. Blender MACHIN3Tools （M3插件）

   官网：[Premium Game Assets - MACHIN3.io](https://machin3.io/)

   下载：[[Addon\]MACHIN3tools](https://machin3.gumroad.com/l/MACHIN3tools)

4. [辣椒酱官方插件百科文档（里面有限制饼插件层级权限的方法）](https://www.blendermagic.cn/#/article/ee79c207-3118-11eb-95ed-0242ac110004)

---



![](https://www.gfxcamp.com/wp-content/uploads/2022/09/Pie-Menu-Editor.jpg )



# 一、Blender窗口系统、窗口层级关系和窗口权限设置

1. **简要介绍一下什么是窗口系统**

   - 什么是窗口系统

     - 窗口系统相当于Blender的可是化DCC软件框架，主要的作用就是用来管理和编辑里面的应用功能，比如3D窗口和UV窗口等工作区窗口，Blender的N面板以及渲染菜单栏等区域菜单面板，都属于Blender框架中的一环。

   - 窗口系统的作用

     - 窗口系统的作用是为了能更方便更高效的让用户管理和使用软件同的功能和图形化制作。

     

2. **简单介绍一下什么是窗口层级关系**

   - 工作区

     - Blender工作区最有代表性的窗口就是3D编辑窗口，窗口里面有一些窗口的子层级内容，比如物体模式，雕刻模式等。
     - 在子层级上还有子孙层级关系存在（比如点编辑模式、线编辑模式和面编辑模式等）。
     - 这些层级都有明确的层级Tab（标签），相当于PS里面的图层关系，而且这些权限我们是可以拿得到的，这个功能就是我后期设计高效率高定制化的编辑软件内容的主要条件。

   - 区块

     - 就是一整个界面中显示的块面板效果，每一个块区代表了自己特定的功能菜单在其中。

       ![](https://docs.blender.org/manual/zh-hans/latest/_images/interface_window-system_regions_3d-view.png)

   - 面板

     - 和区块的概念类似，但是面板的情况更加灵活多变，可以自主弹出和关闭在显示界面中的最高层，比如（偏好设置面板，渲染面板等）。

3. **窗口权限设置方式**

   - 原生态（使用Blender默认的设置方式进行设置）
     - 选择偏好菜单 -> 键位映射 （该菜单内有许多分类，包含窗口、屏幕、2D、3D视口等，这些分类是基于每个窗口和每个区域之间的快捷键布置。
     - 点开该菜单下任何一个按钮可以看到blender默认的设置规则界面。
   - Pie Menu Editor饼菜单插件配置方式
     - 通过学习Blender   Pie Menu Editor 插件配置和使用
     -  [Pie Menu Editor插件教程_（全篇）](https://www.bilibili.com/video/BV1F54y1C7hE/?vd_source=ec576172c16005a65f4ffcf7cfe5cc13)

4. **Blender  Pie Menu Editor插件的窗口权限限制设置**

   - Pie 插件层级权限限制参考网站

     [插件百科-各类插件测评](https://www.blendermagic.cn/#/article/ee79c207-3118-11eb-95ed-0242ac110004)

   - 配置内容

     - 常用类型3D建模窗口层级

       ```python
       return bpy.ops.object.mode_set(mode=='OBJECT') #物体模式
       return bpy.ops.object.mode_set(mode=='EDIT') #编辑模式
       return C.scene.tool_settings.mesh_select_mode[0] and bpy.context.mode=='EDIT_MESH' and C.active_object and C.active_object.type == 'MESH' #编辑模式-顶点
       return C.scene.tool_settings.mesh_select_mode[1] and bpy.context.mode=='EDIT_MESH' and C.active_object and C.active_object.type == 'MESH' #编辑模式-边
       return C.scene.tool_settings.mesh_select_mode[2] and bpy.context.mode=='EDIT_MESH' and C.active_object and C.active_object.type == 'MESH' #编辑模式-面
       return C.active_object and C.active_object.type == 'MESH' and bpy.context.mode=='EDIT_MESH' #编辑模式下
       ```

       

     - Shader Node Editor/Geometry Node Editor几何节点层级

       ```
       return bpy.context.area.ui_type == 'CompositorNodeTree' #合成节点类型
       return context.area.ui_type=="ShaderNodeTree" #材质节点
       return context.area.ui_type=="ShaderNodeTree" and context.area.spaces[0].shader_type == 'OBJECT' #材质节点物体类型
       return context.area.ui_type=="ShaderNodeTree" and context.area.spaces[0].shader_type == 'WORLD'  #材质节点世界类型
       return bpy.context.area.ui_type == 'GeometryNodeTree' #几何节点
       return bpy.context.area.ui_type == 'ShaderNodeTree'   #材质节点
       ```

       

     - 渲染器类型

       ```python
       return bpy.context.scene.render.engine == 'BLENDER_EEVEE' #EV渲染器
       return bpy.context.scene.render.engine == 'BLENDER_WORKBENCH' #工作台渲染
       return bpy.context.scene.render.engine == 'CYCLES'  #CY渲染器
       return bpy.context.scene.render.engine == 'LUXCORE'
       return bpy.context.scene.render.engine == 'REDSHIFT'
       return bpy.context.scene.render.engine == 'APPLESEED_RENDER'
       return bpy.context.scene.render.engine == 'octane'
       ```

       

# 二、键位设计

键位设计一般以左手设计为主，围绕着左右键位习惯进行设计。下面展示键位涉及到的内容。

![Snipaste_2024-11-24_19-35-30.png](https://www.helloimg.com/i/2024/11/24/67430e787fd98.png)

- 配置键5个

  **~；1；2；3；4；5**

- 占位符键1个

  **Tab**

- 换挡键3个（默认左侧L）

  **Shift；Ctrl；Alt**

- 空格键

  **Space**

- 按键组合

  **首选：**

  Alt + [**~；1；2；3；4**]

  **次选：**

  Ctrl + [**'~'；1；2；3；4**]

  **其其次选：**

  Shift + [**~；1；2；3；4**]

- **特别说明**

  **推荐只使用单Alt或者单Ctrl的形式，更贴合左手手势。不推荐组合换挡键+配置键，手小的人不好驾驭。**

  因为Blender预设设计到层级管理，这边是层级窗口代码的链接：

  [插件百科-各类插件测评，帮你远离劣质插件](https://www.blendermagic.cn/#/article/ee79c207-3118-11eb-95ed-0242ac110004)（该代码可以做到Blender局部限制效果）

  

# 三、创建菜单集

- Alt + 1（或者Ctrl+1）

  主创建方式，对于模型基本体，曲线等基本对象的创建方式

- Alt + ~（或者Ctrl+~）

  副创建方式，对于声音，空物体，相机灯光等对象创建方式

- Alt+[2;3;4]（或者Ctrl+2；3；4）

  增量创建方式，主要对于Alt+1之后饼菜单栏不够的情况空出来的额外菜单空余。

- **特别说明**

  包括但不限于，shader节点、几何节点、材质绘制面板等基本创建内容的使用，只需要调整层级面板即可

  例如：

  - 物体对象层级（只会对在于物体模式下的生效）
  - 点、线、面层级（只会出现于点、线、面层级下生效）
  - Node窗口层级（部分shader和Geometry节点会产生冲突，这边的节点窗口只能作用于node层级下）
  - 其他的同理，如（UV，材质绘制，后期剪辑等）

  

# 四、编辑对象菜单集（万能的空格键）

- 物体菜单空格

  - 将物体功能能编辑的直接放入即可；

  - 可以参考我的：

    ![物体空格](https://www.helloimg.com/i/2024/11/28/674856789ce7c.png)

- 点菜单空格

  - 同上

  - 可以参考我的：

    ![点菜单空格](https://www.helloimg.com/i/2024/11/28/674856784d580.png)

- 线菜单空格

  - 同上

  - 可以参考我的：

    ![线菜单空格](https://www.helloimg.com/i/2024/11/28/67485678627ed.png)

- 面菜单空格

  - 同上

  - 可以参考我的：

    ![面菜单空格](https://www.helloimg.com/i/2024/11/28/674856785170a.png)

- UV菜单物体下C菜单（UV编辑器空格）

  - 同上

  - 可以参考我的：

    ![UV菜单空格](https://www.helloimg.com/i/2024/11/28/674856783f255.png)

- ShaderNode菜单空格

  - Node编辑器shader和Geometry属于同一层，有些节点不能共用，需要新建。

  - 可以参考我的：

    ![](https://www.helloimg.com/i/2024/11/28/6748567833b4c.png)

# 五、M3插件+特殊编辑菜单（供喜好自行配置）

- 我的M3设置

  ![](https://www.helloimg.com/i/2024/11/28/67485a1797b13.jpg)

  ![](https://www.helloimg.com/i/2024/11/28/67485a17ab868.jpg)
