---
title: Hexo配置模版
tags:
  - Hexo使用
  - 安知鱼主题
  - 博客技术笔记
  - 预设模版
cover: /tex/Hexo.png
abbrlink: 2489627f
date: 2024-11-22 17:00:57
---

---

**anzhiyu主题导航**栏配置方法



配置环境：

1. Hexo
2. anzhiyu主题

---





# 关于本人 - 配置模版

路径：/source/_data/about.yml

```yaml
- class_name: 关于页
  subtitle: 生活明朗，万物可爱✨
  avatarImg: /tex/fanzao.jpg
  avatarSkills:
    left:
      - 🤖️ 图形图像死忠粉
      - 🔍 游戏开发爱好者 #可添加
    right:
      - 专修交互与设计 🤝
      - 脚踏实地行动派 🏃 #可添加
  name: 卯相
  description: 是一名 图形学爱好者、Unity/UE开发爱好者、3D建模工程师、B站不知名UP主
  aboutsiteTips:
    tips: 追求
    title1: 一切好看的事物
    title2: 热爱而去   感受
    word:
      - 学习
      - 生活 #可添加
  helloAbout: Hello World!
  skillsTips:
    tips: 技能
    title: HLSL、OSL
  careers:
    tips: 生涯
    title: 无限进步
    list:
      - desc: EDU,软件工程专业 #可添加
        color: "#357ef5" 
    img: https://bu.dusays.com/2023/04/21/644287166329b.png
  statistic:
    link: /archives
    text: 文章隧道
    cover: https://bu.dusays.com/2023/05/01/644f4b037b930.jpg
  map:
    title: 我现在住在
    StrengthenTitle: 中国，南昌市
    background: https://bu.dusays.com/2023/07/05/64a4c61cb20ef.jpg
    backgroundDark: https://bu.dusays.com/2023/07/05/64a4c63495ac5.jpg
  selfInfo:
    selfInfoTips1: 生于
    selfInfoContentYear: 1999
    selfInfoTips2: 江西财经大学
    selfInfoContent2: 软件工程
    selfInfoTips3: 现在职业
    selfInfoContent3: 大四学生👨‍🎓
  personalities:
    author_name: 执政官
    personality_type: ESFJ-A
    photo_url: https://bu.dusays.com/2023/07/05/64a4c63495ac5.jpg
    personality_img: https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/ESFJ-A.svg
    name_url: https://www.16personalities.com/ch/esfj-%E4%BA%BA%E6%A0%BC
  maxim:
    maxim_tips: 座右铭
    maxim_top: 生活明朗，
    maxim_bottom: 万物可爱。
  buff:
    buff_tips: 特长
    buff_top: 脑回路新奇的 酸菜鱼
    buff_bottom: 二次元指数 MAX
  game:
    game_tips: 爱好游戏
    game_title: 原神
    game_uid: "UID: 125766904"
    game_bg: https://bu.dusays.com/2023/04/22/64433bf26e25d.webp
  comic:
    comic_tips: 爱好番剧
    comic_title: 追番
    comic_list:
      - name: 约定的梦幻岛 #可添加
        href: https://www.bilibili.com/bangumi/media/md5267750/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.1
        cover: https://bu.dusays.com/2023/05/27/647166c44b414.webp
  like:
    like_tips: 关注偏好
    like_title: 数码科技
    like_bg: https://bu.dusays.com/2022/12/06/638f5f05ce1f7.jpg
    like_bottom: 手机、电脑软硬件
  music:
    music_tips: 音乐偏好
    music_title: 许嵩、民谣、华语流行
    music_bg: https://p2.music.126.net/Mrg1i7DwcwjWBvQPIMt_Mg==/79164837213438.jpg
    music_link: /music
  reward_list:
    - name: 海阔蓝 #可添加
      amount: 8.8
      datatime: 2023-03-28
```



# 我的装备 - 配置模版

路径：/source/_data/equipment.yml

```yaml
- class_name: 好物
  description: 实物装备推荐
  tip: 介绍和推荐一下我的硬件设备
  top_background: https://bu.dusays.com/2023/07/05/64a4c38842b7a.webp
  good_things:
    - title: 基本配置 #可添加
      description: 提升自己生产效率的硬件设备
      equipment_list:  #可添加
        - name: MacBook Pro 2021 16 英寸  
          specification: M1 Max 64G / 1TB
          description: 屏幕显示效果好、色彩准确、对比度强、性能强劲、续航优秀。可以用来开发和设计。
          image: https://bu.dusays.com/2023/07/05/64a4c3b191e2e.png
          link: /posts/571d.html
    - title: 生产力提升
      description: 用来出行的实物及设备
      equipment_list: #可添加
        - name: Apple Watch Series 8
          specification: 黑色
          description: 始终为我的健康放哨，深夜弹出站立提醒，不过确实有效的提高了我的运动频率，配合apple全家桶还是非常棒的产品，缺点依然是续航。
          image: https://bu.dusays.com/2023/07/05/64a4c40ab698a.webp
          link: https://www.apple.com.cn/apple-watch-series-8/
```



# 闲言碎语（即刻） - 配置模版

路径：/source/_data/essay.yml

```yaml
- title: 即刻短文                          #框标题     
  subTitle: 咸鱼的日常生活。                #大标题
  tips: 随时随地，分享生活                  #描述
  buttonText: 关于我                       #介绍
  buttonLink: /about/                     #按钮内部链接
  limit: 30                               #限制
  home_essay: true                        #主页文章开启/关闭
  top_background: https://www.helloimg.com/i/2024/11/22/674040f43d0ec.png
  essay_list:
    - content: 安知鱼主题指南              #标题/内容
      date: 2023/09/09                    #时间
      video:                              #视频链接
        - https://player.bilibili.com/player.html?aid=226886152&bvid=BV1Ch41137tR&cid=1081639816&p=1&autoplay=0
      image:                              #图片
        - https://img02.anheyu.com/adminuploads/1/2023/07/01/64a033cb2c21e.webp!blogimg
      address: 长沙                        #地址
      link: /posts/e140.html              #外部传送链接
      from: 安知鱼                         #名称显示
      aplayer:                            #音乐推荐
        server: tencent					  #腾讯/网易等类似的
        id: 001FGQba3i10mw				  #音乐ID
```

# 友人帐 - 配置模版

路径：/source/_data/link.yml

```yaml
- class_name: 框架										#【必填】友链分类名 #【可选】友链分类描述
  flink_style: flexcard									#【必填】flexcard或者anzhiyu或者telescopic
  hundredSuffix: ""										#【可选】解决共同进步板块头像质量问题，配置后共同进步板块的头像会添加该后缀（请确保你的															图片加上 hundredSuffix 的配置后依然可以访问）。 例如:hundredSuffix: "!w120"
  link_list:											#【必须】友链列表
    - name: Hexo										#【必须】友链名称
      link: https://hexo.io/zh-tw/ 						#【必须】友链链接
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg #【必须】友链头像
      descr: 快速、简单且强大的网站框架						#【必须】友链描述
    - name: anzhiyu主题
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg

- class_name: 推荐博客
  flink_style: telescopic
  hundredSuffix: ""
  link_list:
    - name: 安知鱼
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg
      color: vip
      tag: 技术

- class_name: 小伙伴
  class_desc: 那些人，那些事
  flink_style: anzhiyu
  hundredSuffix: ""
  link_list:
    - name: 安知鱼
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      recommend: true
```



# 朋友圈 - 配置模版

路径：_config.anzhiyu.yml（anzhiyu主题配置）

```yaml
# 朋友圈配置
friends_vue:
  enable: false																			#类型：Bool true/false [必须]是否开启
  vue_js: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.2/friends/index.f9a2b8d2.js #类型：URL	  [必须]朋友圈前端构建后的URL
  apiurl:																				#朋友圈后端地址URL
  top_background:																		#朋友圈顶部背景图
```



# 留言板 - 配置模版

路径：_config.yml（Hexo配置）

```yaml
#envelope_comment
#seehttps://akilar.top/posts/e2d3c450/
envelope_comment:
  enable: true #控制开关
  custom_pic:
    cover: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/violet.jpg #信笺头部图片
    line: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/line.png #信笺底部图片
    beforeimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/before.png # 信封前半部分
    afterimg: https://npm.elemecdn.com/hexo-butterfly-envelope/lib/after.png # 信封后半部分
  message: #信笺正文，多行文本，写法如下
    - 有什么想问的？
    - 有什么想说的？
    - 有什么想吐槽的？
    - 哪怕是有什么想吃的，都可以告诉我哦~
  bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
  height: #1024px，信封划出的高度
  path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
  front_matter: #【可选】comments页面的 front_matter 配置
    title: 留言板
    comments: true
    top_img: false
    type: envelope
```

