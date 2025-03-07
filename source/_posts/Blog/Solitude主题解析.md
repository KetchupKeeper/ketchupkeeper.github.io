---
title: Solitude主题解析
date: 2024-12-11 14:07:45
tags:
  - Hexo使用
  - Solitude主题
  - 博客技术笔记	
  - HTML
  - CSS
  - JS
avatar: /T/作者头像.png
cover: /tex/Hexo.avif
desc:
recommend:
published:
---

Solitude解析

---

解析Solitude主题架构笔记,主要记录的是主题自定义设计的内容



配置环境：

- VScode
- Kimi
- ChatCPT

---

## 一、Solitude主题结构

### 1、Solitude主题样式结构



### 2、Solitude主题JS组成结构

![image-20241211130503908](/Blog/posts/2024-12/20241211130503950.avif)

<br/>

<br/>

- covercolor文件内容（路径: //hexo根目录/themes/solitude/source/js/covercolor)

  ![image-20241211130735089](/Blog/posts/2024-12/20241211130735117.avif)

  <br/>

  <br/>

  **covercolorjs文件通用函数效果**

  | 函数名                             | 实现的效果                                                   |
  | :--------------------------------- | :----------------------------------------------------------- |
  | **1、coverColor函数**：            |                                                              |
  |                                    | ①检查`PAGE_CONFIG.color`是否存在，如果存在，则直接使用该颜色设置主题。 |
  |                                    | ②如果没有页面颜色配置，尝试获取封面图片的路径。              |
  |                                    | ③如果封面图片路径存在，则调用`handleApiColor`函数处理颜色获取。 |
  |                                    | ④  如果封面图片路径不存在，则设置默认主题颜色。              |
  | **2、handleApiColor函数**：        |                                                              |
  |                                    | ① 从本地存储中获取缓存的颜色信息。                           |
  |                                    | ②  如果缓存中存在对应图片的颜色，则直接应用。                |
  |                                    | ③  如果缓存中不存在，则调用`img2color`函数从图片中获取颜色。 |
  | **3、img2color函数**：             |                                                              |
  |                                    | ①使用`fetch` API向配置的API端点发送请求，获取图片的主要颜色。 |
  |                                    | ②  如果请求成功，解析返回的JSON数据，并使用`setThemeColors`函数设置主题颜色。 |
  |                                    | ③  如果请求失败，打印错误信息。                              |
  | **4、setThemeColors函数**：        |                                                              |
  |                                    | ①如果提供了颜色值，则将颜色值转换为RGB，并设置CSS变量。      |
  |                                    | ②  根据颜色的亮度调整页面元素的背景和文本颜色，以确保可读性。 |
  |                                    | ③  如果没有提供颜色值，则调用`setDefaultThemeColors`函数。   |
  | **5、setDefaultThemeColors函数**： |                                                              |
  |                                    | ①设置默认的CSS变量值，这些值通常指向其他预定义的CSS变量。    |
  | **6、cacheColor函数**：            |                                                              |
  |                                    | ①将获取到的颜色值缓存到本地存储中，以便下次访问时可以直接使用。 |
  | **7、adjustBrightness函数**：      |                                                              |
  |                                    | ①根据颜色的亮度调整页面元素的背景和文本颜色，以确保在不同亮度的背景下文本都是可读的。 |
  |                                    |                                                              |
  | **总结**                           | 整体来看，这段代码提供了一个从封面图片中提取颜色并应用到网页主题的功能，同时确保了在不同亮度的背景下页面的可读性。代码中还包含了错误处理和缓存机制，以提高性能和用户体验。 |

  <br/>

  <br/>

  - api.js

    <br/>

    - **获取颜色来源**：`pageColor`只能是`PAGE_CONFIG.color`的值或封面图片`post-cover`的路径。

    - **颜色处理**：使用API（`coverColorConfig.api`）获取颜色。

    - **缓存机制**：通过`cacheColor`函数将获取到的颜色缓存到本地存储中。

    - **错误处理**：在`img2color`函数中，如果API请求失败，会打印错误信息。

    - **亮度调整**：在`adjustBrightness`函数中，如果亮度低于125，则调整卡片和作者信息的背景和文本颜色。

      <br/>

      <br/>

  - ave.js

    <br/>

    - **获取颜色来源**：与文件2类似，`pageColor`可以是`PAGE_CONFIG.color`的值或封面图片`post-cover`的路径。

    - **颜色处理**：使用`imageAve`参数直接从图片URL获取平均颜色。

    - **颜色格式化**：在`img2color`函数中，将获取到的RGB颜色值格式化为十六进制颜色值。

    - **亮度调整**：与文件2类似，在`adjustBrightness`函数中根据亮度调整样式。

    - **代码结构**：代码结构更为紧凑，使用对象和`Object.entries`来设置CSS变量。

      <br/>

      <br/>

  - local.js

    <br/>

    - **获取颜色来源**：`pageColor`既可以是`PAGE_CONFIG.color`的值，也可以是封面图片`post-cover`的路径。

    - **颜色处理**：使用`ColorThief`库从本地图片中获取颜色。

    - **颜色转换**：使用`rgbToHex`函数将RGB颜色值转换为十六进制颜色值。

    - **亮度调整**：在`setThemeColors`函数中，如果亮度低于125，则调用`adjustCardStyles`函数调整卡片样式，并尝试调整主题颜色的亮度。

    - **颜色调整**：`LightenDarkenColor`函数被定义但未完整实现，用于调整颜色的亮度。

      <br/><br/>

  - 总结

    <br/>

    - **local.txt**：依赖于本地图片和`ColorThief`库来获取颜色，有颜色亮度调整的逻辑，但`LightenDarkenColor`函数未完整实现。
    - **api.txt**：依赖于API来获取颜色，有完整的缓存机制和错误处理。
    - **ave.txt**：同样依赖于API获取颜色，但使用`imageAve`参数来简化获取颜色的过程，代码结构更为现代和紧凑。

    <br/>

    <br/>

- search文件内容

  <br/>

  ![image-20241211131652681](/Blog/posts/2024-12/20241211131652710.avif)

  <br/>

  <br/>

  - algolia.js

    <br/>

    **这个文件包含了使用Algolia搜索引擎的代码。Algolia是一个提供快速搜索能力的第三方服务。**

    - **初始化搜索界面**：当文档加载完成时，设置搜索遮罩（`$searchMask`）和搜索对话框（`$searchDialog`）的事件监听器，用于打开和关闭搜索界面。

    - **打开搜索**：`openSearch`函数用于显示搜索界面，设置焦点到搜索框，并监听Esc键关闭搜索。

    - **关闭搜索**：`closeSearch`函数用于关闭搜索界面，并移除窗口大小变化事件监听器。

    - **修复Safari高度问题**：`fixSafariHeight`函数用于调整Safari浏览器中搜索对话框的高度。

    - **快捷键监听**：`addEventCtrlK`函数监听Ctrl+K快捷键，用于触发搜索界面的打开。

    - **搜索点击事件**：`searchClickFn`函数为搜索按钮添加点击事件，打开搜索界面。

    - **一次性搜索事件**：`searchFnOnce`函数为搜索遮罩和关闭按钮添加事件监听器，用于关闭搜索界面。

    - **Algolia搜索配置**：配置Algolia搜索，包括搜索框、结果展示、分页和统计信息。

    - **搜索启动**：使用`search.start()`启动搜索。

    - **PJAX支持**：在PJAX加载完成后，重新初始化搜索点击事件。

      <br/>

      <br/>

  - local.js

    <br/>

    **这个文件包含了实现本地搜索功能的代码，不依赖于外部搜索服务。**

    - **初始化搜索界面**：在窗口加载完成后，设置搜索遮罩和搜索对话框的事件监听器。

    - **打开和关闭搜索**：`openSearch`和`closeSearch`函数用于控制搜索界面的显示和隐藏。

    - **修复Safari高度问题**：`fixSafariHeight`函数用于调整Safari浏览器中搜索对话框的高度。

    - **标签列表事件**：`addEventTagList`函数为标签列表添加点击事件，用于关闭搜索界面。

    - **快捷键监听**：`addEventCtrlK`函数监听Ctrl+K快捷键，用于触发搜索界面的打开。

    - **搜索点击事件**：`searchClickFn`函数为搜索按钮添加点击事件，打开搜索界面。

    - **一次性搜索事件**：`searchFnOnce`函数为搜索遮罩和关闭按钮添加事件监听器。

    - **初始化搜索数据**：`init`函数从配置的路径加载本地搜索数据。

    - **搜索逻辑**：`search`函数根据用户输入的查询词在本地数据中搜索匹配项。

    - **渲染搜索结果**：`renderResults`和`renderPagination`函数用于展示搜索结果和分页。

    - **高亮搜索关键词**：`highlightSearchKeyword`函数用于在搜索结果中高亮显示搜索关键词。

    - **PJAX支持**：在PJAX加载完成后，重新初始化搜索点击事件。

      <br/>

      <br/>

  - 总结

    <br/>

    **这两个文件都包含了用于打开和关闭搜索界面的逻辑，以及搜索结果的展示。主要区别在于搜索提供者的不同：**

    - **algolia.txt** 使用Algolia作为搜索服务提供者，适合需要快速、远程搜索能力的场景。
    - **local.txt** 实现了本地搜索，不依赖外部服务，适合搜索数据量不大、对实时性要求不高的场景。

  

- third_party文件内容

  <br/>

  ![image-20241211131729276](/Blog/posts/2024-12/20241211131729306.avif)

  <br/><br/>

  - barrage.min.js

    <br/>

    **这个文件定义了一个名为`Barrage`的类，用于创建和管理评论区的弹幕（Barrage）功能。主要功能包括：**

    - 从评论数据中过滤和展平回复。

    - 清理评论内容中的HTML标签。

    - 创建弹幕元素并添加到页面中。

    - 管理弹幕的显示和移除。

    - 根据用户鼠标悬停状态暂停或恢复弹幕流动。

    - 初始化弹幕功能，并在适当的时候销毁弹幕元素。

      <br/><br/>

  - envelope.min.js

    <br/>

    **这个文件定义了一个名为`EasyDanmaku`的类，用于创建和管理弹幕（Danmaku）功能。主要功能包括：**

    - 检查参数有效性并初始化弹幕容器。

    - 处理鼠标悬停事件。

    - 发送单个弹幕或批量弹幕。

    - 控制弹幕的显示和隐藏。

    - 清理溢出的弹幕数组。

    - 提供播放和暂停弹幕的功能。

      <br/><br/>

  - post_ai.min.js

    <br/>

    **这个文件定义了一个名为`POST_AI`的类，用于生成文章摘要并提供智能互动。主要功能包括：**

    - 初始化AI摘要功能。

    - 获取文章标题和内容。

    - 异步请求后端服务生成文章摘要。

    - 显示摘要生成的动画效果。

    - 提供AI对话模式。

    - 创建智能建议和行动项。

      <br/><br/>

  - universe.min.js

    <br/>

    **这个文件似乎是一个宇宙背景动画的实现。主要功能包括：**

    - 调整画布大小以适应窗口变化。

    - 绘制和移动宇宙中的粒子或星体。

    - 根据主题变化更新动画。

      <br/><br/>

  - waterfall.min.js

    <br/>

    **这个文件定义了一个名为`waterfall`的函数，用于实现瀑布流布局。主要功能包括：**

    - 计算元素的边距和尺寸。

    - 根据图片加载完成情况动态调整元素位置。

    - 处理窗口大小变化时的布局更新。

      <br/><br/>

  - 总结

    <br/>

    **这些文件涵盖了从弹幕功能到瀑布流布局的不同JavaScript应用，每个文件都专注于提供一个特定的功能或组件。**

    <br/><br/><br/>

- main

---



## 二、Solitude个人定制需求/解决方案

### 1、更改主题Banner左侧技术栈移动朝向

- 修改other.styl文件中的tags-group-all文件（路径: //hexo根目录/themes/solitude/source/css/_page)

![image-20241211160618890](/Blog/posts/2024-12/20241211160618980.avif)

- 修改`animation.styl`技术栈朝向（路径: //hexo根目录/themes/solitude/source/css/_global)

  ![image-20241211163949932](/Blog/posts/2024-12/20241211163950005.avif)

- 演示例子

  ![image-20241211160958065](/Blog/posts/2024-12/20241211160958208.avif)

### 2、

---
