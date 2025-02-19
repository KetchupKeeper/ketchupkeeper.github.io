---
title: C#语言技巧（字典）
tags:
  - TA
  - Technology
  - 编程基础
avatar: /T/文章头像.png
cover: /tex/C1.avif
desc: 番茄酱守护者
recommend: false
published: true
date: 2025-02-16 23:06:39
---

---

**本章节目的：** 

- 记录学习过程中出现的技巧和知识
- 记录象征想较强的案例



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/其他/UnityTA学习计划/)
- 学习教程（[【SiKi学院Unity】C#编程-第一季-编程基础-宇宙最简单2021最新版 ](https://www.bilibili.com/video/BV1gR4y1b7oW?t=13.7&p=9)）
- 参考网址（[C# 教程 | 菜鸟教程](https://www.runoob.com/csharp/csharp-tutorial.html)）
- VScode
- JetBrains Rider 2024
- Unity2022·····

---

### 小知识

#### 1、字符串格式化输出

#### 2、计算向量长度的方法

```csharp
public float Length()
{
    Math.Sqrt(x*x+y*y+x*x);
}
```

3、使用构造函数时，同名赋值的方法

```csharp
public int a;
public int b;
public Cus(int a,int b)
{
	this.a = a;
	this.b = b;
}
```

4、继承中关于this和base关键字的使用

```csharp
public Boss(int attack,int hp,int speed)
{
    this.attack = attack;
    base.hp = hp;
    base.speed = speed;
}
```

