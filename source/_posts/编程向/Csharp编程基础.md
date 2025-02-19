---
title: C#编程基础
tags:
  - TA
  - Technology
  - 编程基础
avatar: /T/文章头像.png
cover: /tex/C1.avif
desc: 番茄酱守护者
recommend: false
published: true
date: 2025-02-16 17:44:11
---

---

**本章节学习目标：** 

- 学习C#语言基础
- 打好C#面相对象的基础



**环境配置：**

- [UnityTA学习计划](http://localhost:4000/2024/12/18/其他/UnityTA学习计划/)
- 学习教程（[【SiKi学院Unity】C#编程-第一季-编程基础-宇宙最简单2021最新版 ](https://www.bilibili.com/video/BV1gR4y1b7oW?t=13.7&p=9)）
- 参考网址（[C# 教程 | 菜鸟教程](https://www.runoob.com/csharp/csharp-tutorial.html)）
- VScode
- JetBrains Rider 2024
- Unity2022·····

---



**C# 关键字**：

|                  |           |           |            |                        |                       |                |
| ---------------- | --------- | --------- | ---------- | ---------------------- | --------------------- | -------------- |
| **保留关键字**   |           |           |            |                        |                       |                |
| abstract         | as        | base      | bool       | break                  | byte                  | case           |
| catch            | char      | checked   | class      | const                  | continue              | decimal        |
| default          | delegate  | do        | double     | else                   | enum                  | event          |
| explicit         | extern    | false     | finally    | fixed                  | float                 | for            |
| foreach          | goto      | if        | implicit   | in                     | in (generic modifier) | int            |
| interface        | internal  | is        | lock       | long                   | namespace             | new            |
| null             | object    | operator  | out        | out (generic modifier) | override              | params         |
| private          | protected | public    | readonly   | ref                    | return                | sbyte          |
| sealed           | short     | sizeof    | stackalloc | static                 | string                | struct         |
| switch           | this      | throw     | true       | try                    | typeof                | uint           |
| ulong            | unchecked | unsafe    | ushort     | using                  | virtual               | void           |
| volatile         | while     |           |            |                        |                       |                |
| **上下文关键字** |           |           |            |                        |                       |                |
| add              | alias     | ascending | descending | dynamic                | from                  | get            |
| global           | group     | into      | join       | let                    | orderby               | partial (type) |
| partial (method) | remove    | select    | set        |                        |                       |                |

### 一、程序基本语法

#### 1、引用命名空间

- 基本写入

![引用命名空间](/Blog/posts/2025-2/image-20250216110157122.avif)

- 程序的第一行 **using System;** - **using** 关键字用于在程序中包含 **System** 命名空间。 一个程序一般有多个 **using** 语句。

- 什么是**命名空间**？：[C# 命名空间（Namespace）](https://www.runoob.com/csharp/csharp-namespace.html)【**命名空间**的设计目的是提供一种让一组名称与其他名称分隔开的方式。在一个命名空间中声明的类的名称与另一个命名空间中声明的相同的类的名称不冲突。】

  ![命名空间](/Blog/posts/2025-2/0129A8E9-30FE-431D-8C48-399EA4841E9D.avif)

  

#### 2、C#语法结构

**一个 C# 程序主要包括以下部分：**

![C#语法架构](/Blog/posts/2025-2/image-20250216105845581.avif)

- 命名空间声明（Namespace declaration）
- 一个 class
- Class 方法
- Class 属性
- 一个 Main 方法
- 语句（Statements）& 表达式（Expressions）
- 注释

#### 3、基本输入输出（I/O)

1. 控制台输入（I）的实现

   ```csharp
   //读取用户输入的字符串
   String str = Console.ReadLine();
   //读取用户输入的数字
   int strInt = Conert.ToInt32（str);//只能转换整数，不然报错。
   ```

   ![image-20250216111332999](/Blog/posts/2025-2/image-20250216111332999.avif)

2. 控制台输出（o）的实现

```csharp
Console.WriteLine();
```

#### 4、数据类型

- **值类型**

  | 类型    | 描述                                 | 范围                                                    | 默认值 |
  | :------ | :----------------------------------- | :------------------------------------------------------ | :----- |
  | bool    | 布尔值                               | True 或 False                                           | False  |
  | byte    | 8 位无符号整数                       | 0 到 255                                                | 0      |
  | char    | 16 位 Unicode 字符                   | U +0000 到 U +ffff                                      | '\0'   |
  | decimal | 128 位精确的十进制值，28-29 有效位数 | (-7.9 x 1028 到 7.9 x 1028) / 100 到 28                 | 0.0M   |
  | double  | 64 位双精度浮点型                    | (+/-)5.0 x 10-324 到 (+/-)1.7 x 10308                   | 0.0D   |
  | float   | 32 位单精度浮点型                    | -3.4 x 1038 到 + 3.4 x 1038                             | 0.0F   |
  | int     | 32 位有符号整数类型                  | -2,147,483,648 到 2,147,483,647                         | 0      |
  | long    | 64 位有符号整数类型                  | -9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 | 0L     |
  | sbyte   | 8 位有符号整数类型                   | -128 到 127                                             | 0      |
  | short   | 16 位有符号整数类型                  | -32,768 到 32,767                                       | 0      |
  | uint    | 32 位无符号整数类型                  | 0 到 4,294,967,295                                      | 0      |
  | ulong   | 64 位无符号整数类型                  | 0 到 18,446,744,073,709,551,615                         | 0      |
  | ushort  | 16 位无符号整数类型                  | 0 到 65,535                                             | 0      |

- **引用类型**

  （引用类型不包含存储在变量中的实际数据，但它们包含对变量的引用。）

  - **内置的** 引用类型有：**object**、**dynamic** 和 **string**。

  - 当一个值类型转换为对象类型时，则被称为 **装箱**；另一方面，当一个对象类型转换为值类型时，则被称为 **拆箱**。

  - 对象（Object）类型：

    **对象（Object）类型** 是 C# 通用类型系统（Common Type System - CTS）中所有数据类型的终极基类。Object 是 System.Object 类的别名。所以对象（Object）类型可以被分配任何其他类型（值类型、引用类型、预定义类型或用户自定义类型）的值。但是，在分配值之前，需要先进行类型转换。

  - 字符串（String）类型

    **字符串（String）类型** 允许您给变量分配任何字符串值。字符串（String）类型是 System.String 类的别名。它是从对象（Object）类型派生的。字符串（String）类型的值可以通过两种形式进行分配：引号和 @引号。

  - 指针类型（Pointer types）

    **指针类型**变量存储另一种类型的内存地址。C# 中的指针与 C 或 C++ 中的指针有相同的功能。



#### 5、类型转换

​	【C# 中的类型转换可以分为两种：**隐式类型转换**和**显式类型转换**（也称为强制类型转换）。】

- **（1）隐式类型转换：**

  ​	隐式转换是不需要编写代码来指定的转换，编译器会自动进行。

  隐式转换是指将一个较小范围的数据类型转换为较大范围的数据类型时，编译器会自动完成类型转换，这些转换是 C# 默认的以安全方式进行的转换, 不会导致数据丢失。

  例如，从 int 到 long，从 float 到 double 等。

  ​	从小的整数类型转换为大的整数类型，从派生类转换为基类。将一个 byte 类型的变量赋值给 int 类型的变量，编译器会自动将 byte 类型转换为 int 类型，不需要显示转换。

- **（2）显式类型转换：**

  ​	显式类型转换，即强制类型转换，需要程序员在代码中明确指定。

  显式转换是指将一个较大范围的数据类型转换为较小范围的数据类型时，或者将一个对象类型转换为另一个对象类型时，需要使用强制类型转换符号进行显示转换，强制转换会造成数据丢失。

  例如，将一个 int 类型的变量赋值给 byte 类型的变量，需要显示转换。

### 二、命名约定、命名规范和命名规则

#### 1、命名约定

- 接口名称以大写 `I`开头。
- 属性类型以单词 `Attribute`结尾。
- 枚举类型对非标记使用单数名词，对标记使用复数名词。
- 标识符不应包含两个连续下划线（`_`）字符。 这些名称是为编译器生成的标识符保留的。
- 对变量、方法和类使用有意义的描述性名称。
- 清晰胜于简洁。。
- 将 PascalCase 用于类名和方法名称。
- 对方法参数和局部变量使用驼峰式大小写。
- 将 PascalCase 用于常量名，包括字段和局部常量。
- 专用实例字段以下划线 (`_`) 开头，其余文本为驼峰式大小写。
- 静态字段以 `s_`开头。 此约定不是默认的 Visual Studio 行为，也不是 [框架设计准则](https://learn.microsoft.com/zh-cn/dotnet/standard/design-guidelines/names-of-type-members#names-of-fields)的一部分，而是在编辑器配置 [中](https://learn.microsoft.com/zh-cn/dotnet/fundamentals/code-analysis/style-rules/naming-rules)可配置的。
- 避免在名称中使用缩写或首字母缩略词，但广为人知和接受的缩写除外。
- 使用遵循反向域名表示法的有意义的描述性命名空间。
- 选择表示程序集的主要用途的程序集名称。
- 避免使用单字母名称，但简单循环计数器除外。 此外，描述 C# 构造语法的语法示例通常使用以下与 [C# 语言规范](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/language-specification/readme)中使用的约定匹配的以下单字母名称。 语法示例是规则的例外。
  - 将 `S` 用于结构，`C` 用于类。
  - 使用 `M` 来表示方法。
  - 对变量使用 `v`，对参数使用 `p`。
  - 将 `r` 用于 `ref` 参数。

#### 2、命名规范

- **代码规范主要包括命名、版式、注释等几个方面：**

  其中命名包括变量、类、方法、文件名、数据库、表、字段、接口等方面。

  版式包括缩进、换行、对齐、大括号、循环体、逻辑判断等方面。

  注释包括包注释、文件注释、类注释、方法注释、参数注释、变量注释、代码片段注释等。

- 微软官方本身也是拟了一些草稿规范的 [C#6.0草稿规范](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/language-specification/introduction)

#### 3、命名规则

**所有命名（类名、属性名、变量名、常量名、属性名）必须以字母开头（a-z、A-Z），不能以特殊字符（_、$）开头。**

1. 【强制】类名命名规则：大驼峰命名法【DTO、POCO、VO等除外】

   ```csharp
   public class UserInfo{}
   ```

2. 【强制】属性命名规则：大驼峰命名法

   ```csharp
   public string UserInfo { get; set; }
   ```

3. 【强制】字段、参数、成员变量、局部变量命名规则：小驼峰命名法

   ```csharp
   public string userName;
   public string GetUserName(string userId) { return "userName"; }
   ```

   

4. 【强制】方法/函数命名规则：大驼峰命名法

```
public int GetUserInfo() { }
```



5. 【强制】常量命名规则：名称全部大写，单词间用下划线_分开

```csharp
public const string USER_NAME = "userinfo";
```

6. 【强制】DTO、POCO、VO命名规则：大驼峰命名法+DTO/VO/POCO等

```csharp
public class UserInfoDTO { }
public class UserInfoVO { }
public class UserInfoPOCO { }
```

7. 【强制】命名空间命名规则：大驼峰命名法

```csharp
namespace UserInfo { }
```

8. 【强制】枚举命名规则（枚举名称采用大驼峰命名规则，枚举成员所有名称也使用大驼峰命名法）（没有特殊情况的话，枚举成员建议从默认值0开始）

```csharp
 public enum UserState
    {
        Success,
        Fail
    }
```

9. 【强制】代码中所有成员禁止直接使用中文的命名方式，禁止使用中文拼音命名（一些通用的命名除外：比如城市可以采用beiJing、shangHai这样的命名规则是可以的），禁止使用中英文混合命名方式，禁止出现a、b、c、aa、ss、x、xx等毫无意义的命名方式

10. 【推荐】复数类型（集合类、数组等）命名规则：优先以小写字符s结尾，如果单词最后的字母就是s或其他不适合s结尾的单词，可以使用复数类型的类型名称结尾（如List、Array等结尾）。前面规则如果都不好命名，可自行命名

```csharp
public List<string> userNames { get; set; }
public string[] userNameArray { get; set; }
public List<string> userNameList { get; set; }
```

11. 【强制】接口命名规则：以大写字母I开头+类名称

```csharp
public interface IUserInfo { }
```

12. 【强制】异常类命名规则：大驼峰命名法+Exceptionc

```csharp
public class UserInfoException { }
```

13. 【强制】项目命名规则：大驼峰命名法，各个字母之间用字母（.）隔开

```csharp
XiongZe.ProjectManagement.Services
```

14. 【推荐】业务层和数据层名命名规则：业务层类库名称命名规则：以Service结尾、数据层类库命名规则：以Repository结尾

获取数据的方法以Get开头（加上要获取的对象名）。如获取单个对象，可以使用Get()、GetUserInfo()。获取复数对象（集合类），可以使用Gets()、GetUserInfos()。
新增数据的方法以Insert开头（加上要获取的对象名）。如往数据库中新增一条记录，方法命名为Insert（）、InsertUserInfo（）。往数据库中新增多条记录，方法命名为Inserts（）、InsertUserInfos（）。
删除数据的方法以Delete/Remove（加上要删除的对象名）。如删除数据库中的一条记录，方法命名为Delete（）、DeleteUserInfo（）。删除数据库中的多条记录，方法命名为Deletes（）、DeleteUserInfos（）。
修改数据的方法以Update开头（加上要修改的对象名）。如修改一条数据信息，方法命名为Update（）、UpdateUserInfo（）。修改多条数据的信息，方法命名为Updates（）、UpdateUserInfos（）。

### 三、运算符

#### 1、什么是运算符？都有哪些运算符？

**运算符是一种告诉编译器执行特定的数学或逻辑操作的符号。C# 有丰富的内置运算符，分类如下：**

- 算术运算符
- 关系运算符
- 逻辑运算符
- 位运算符
- 赋值运算符
- 其他运算符

#### 2、数学运算符

- **下表显示了 C# 支持的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：**

| 运算符 | 描述                             | 实例             |
| :----- | :------------------------------- | :--------------- |
| +      | 把两个操作数相加                 | A + B 将得到 30  |
| -      | 从第一个操作数中减去第二个操作数 | A - B 将得到 -10 |
| *      | 把两个操作数相乘                 | A * B 将得到 200 |
| /      | 分子除以分母                     | B / A 将得到 2   |
| %      | 取模运算符，整除后的余数         | B % A 将得到 0   |
| ++     | 自增运算符，整数值增加 1         | A++ 将得到 11    |
| --     | 自减运算符，整数值减少 1         | A-- 将得到 9     |

- **实例：**

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 21;
            int b = 10;
            int c;

            c = a + b;
            Console.WriteLine("Line 1 - c 的值是 {0}", c);
            c = a - b;
            Console.WriteLine("Line 2 - c 的值是 {0}", c);
            c = a * b;
            Console.WriteLine("Line 3 - c 的值是 {0}", c);
            c = a / b;
            Console.WriteLine("Line 4 - c 的值是 {0}", c);
            c = a % b;
            Console.WriteLine("Line 5 - c 的值是 {0}", c);

            // ++a 先进行自增运算再赋值
            c = ++a;
            Console.WriteLine("Line 6 - c 的值是 {0}", c);

            // 此时 a 的值为 22
            // --a 先进行自减运算再赋值
            c = --a;
            Console.WriteLine("Line 7 - c 的值是 {0}", c);
            Console.ReadLine();
        }
    }
}
```

#### 3、关系运算符

- **下表显示了 C# 支持的所有关系运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：**

| 运算符 | 描述                                                         | 实例              |
| :----- | :----------------------------------------------------------- | :---------------- |
| ==     | 检查两个操作数的值是否相等，如果相等则条件为真。             | (A == B) 不为真。 |
| !=     | 检查两个操作数的值是否相等，如果不相等则条件为真。           | (A != B) 为真。   |
| >      | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。     | (A > B) 不为真。  |
| <      | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。     | (A < B) 为真。    |
| >=     | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 不为真。 |
| <=     | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。   |

- **实例：**

```csharp
using System;

class Program
{
  static void Main(string[] args)
  {
      int a = 21;
      int b = 10;
      
      if (a == b)
      {
          Console.WriteLine("Line 1 - a 等于 b");
      }
      else
      {
          Console.WriteLine("Line 1 - a 不等于 b");
      }
      if (a < b)
      {
          Console.WriteLine("Line 2 - a 小于 b");
      }
      else
      {
          Console.WriteLine("Line 2 - a 不小于 b");
      }
      if (a > b)
      {
          Console.WriteLine("Line 3 - a 大于 b");
      }
      else
      {
          Console.WriteLine("Line 3 - a 不大于 b");
      }
      /* 改变 a 和 b 的值 */
      a = 5;
      b = 20;
      if (a <= b)
      {
         Console.WriteLine("Line 4 - a 小于或等于 b");
      }
      if (b >= a)
      {
         Console.WriteLine("Line 5 - b 大于或等于 a");
      }
  }
}
```

#### 4、逻辑运算符

- **下表显示了 C# 支持的所有逻辑运算符。假设变量 A 为布尔值 true，变量 B 为布尔值 false，则：**

| 运算符 | 描述                                                         | 实例              |
| :----- | :----------------------------------------------------------- | :---------------- |
| &&     | 称为逻辑与运算符。如果两个操作数都非零，则条件为真。         | (A && B) 为假。   |
| \|\|   | 称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真。 | (A \|\| B) 为真。 |
| !      | 称为逻辑非运算符。用来逆转操作数的逻辑状态。如果条件为真则逻辑非运算符将使其为假。 | !(A && B) 为真。  |

- **实例**

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            bool a = true;
            bool b = true;
           
            if (a && b)
            {
               Console.WriteLine("Line 1 - 条件为真");
            }
            if (a || b)
            {
                Console.WriteLine("Line 2 - 条件为真");
            }
            /* 改变 a 和 b 的值 */
            a = false;
            b = true;
            if (a && b)
            {
                Console.WriteLine("Line 3 - 条件为真");
            }
            else
            {
                Console.WriteLine("Line 3 - 条件不为真");
            }
            if (!(a && b))
            {
                Console.WriteLine("Line 4 - 条件为真");
            }
            Console.ReadLine();
        }
    }
}
```

#### 5、位运算符

位运算符作用于位，并逐位执行操作。&、 | 和 ^ 的真值表如下所示：

| p    | q    | p & q | p \| q | p ^ q |
| :--- | :--- | :---- | :----- | :---- |
| 0    | 0    | 0     | 0      | 0     |
| 0    | 1    | 0     | 1      | 1     |
| 1    | 1    | 1     | 1      | 0     |
| 1    | 0    | 0     | 1      | 1     |

假设如果 A = 60，且 B = 13，现在以二进制格式表示，它们如下所示：

A = 0011 1100

B = 0000 1101

\-----------------

A&B = 0000 1100

A|B = 0011 1101

A^B = 0011 0001

~A = 1100 0011

下表列出了 C# 支持的位运算符。假设变量 **A** 的值为 60，变量 **B** 的值为 13，则：

| 运算符 | 描述                                                         | 实例                                                         |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| &      | 如果同时存在于两个操作数中，二进制 AND 运算符复制一位到结果中。 | (A & B) 将得到 12，即为 0000 1100                            |
| \|     | 如果存在于任一操作数中，二进制 OR 运算符复制一位到结果中。   | (A \| B) 将得到 61，即为 0011 1101                           |
| ^      | 如果存在于其中一个操作数中但不同时存在于两个操作数中，二进制异或运算符复制一位到结果中。 | (A ^ B) 将得到 49，即为 0011 0001                            |
| ~      | 按位取反运算符是一元运算符，具有"翻转"位效果，即0变成1，1变成0，包括符号位。 | (~A ) 将得到 -61，即为 1100 0011，一个有符号二进制数的补码形式。 |
| <<     | 二进制左移运算符。左操作数的值向左移动右操作数指定的位数。   | A << 2 将得到 240，即为 1111 0000                            |
| >>     | 二进制右移运算符。左操作数的值向右移动右操作数指定的位数。   | A >> 2 将得到 15，即为 0000 1111                             |

#### 6、赋值运算符

- **下表列出了 C# 支持的赋值运算符：**

| 运算符 | 描述                                                         | 实例                            |
| :----- | :----------------------------------------------------------- | :------------------------------ |
| =      | 简单的赋值运算符，把右边操作数的值赋给左边操作数             | C = A + B 将把 A + B 的值赋给 C |
| +=     | 加且赋值运算符，把右边操作数加上左边操作数的结果赋值给左边操作数 | C += A 相当于 C = C + A         |
| -=     | 减且赋值运算符，把左边操作数减去右边操作数的结果赋值给左边操作数 | C -= A 相当于 C = C - A         |
| *=     | 乘且赋值运算符，把右边操作数乘以左边操作数的结果赋值给左边操作数 | C *= A 相当于 C = C * A         |
| /=     | 除且赋值运算符，把左边操作数除以右边操作数的结果赋值给左边操作数 | C /= A 相当于 C = C / A         |
| %=     | 求模且赋值运算符，求两个操作数的模赋值给左边操作数           | C %= A 相当于 C = C % A         |
| <<=    | 左移且赋值运算符                                             | C <<= 2 等同于 C = C << 2       |
| >>=    | 右移且赋值运算符                                             | C >>= 2 等同于 C = C >> 2       |
| &=     | 按位与且赋值运算符                                           | C &= 2 等同于 C = C & 2         |
| ^=     | 按位异或且赋值运算符                                         | C ^= 2 等同于 C = C ^ 2         |
| \|=    | 按位或且赋值运算符                                           | C \|= 2 等同于 C = C \| 2       |

- **实例**

```csharp
using System;

namespace OperatorsAppl
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 21;
            int c;

            c = a;
            Console.WriteLine("Line 1 - =  c 的值 = {0}", c);

            c += a;
            Console.WriteLine("Line 2 - += c 的值 = {0}", c);

            c -= a;
            Console.WriteLine("Line 3 - -=  c 的值 = {0}", c);

            c *= a;
            Console.WriteLine("Line 4 - *=  c 的值 = {0}", c);

            c /= a;
            Console.WriteLine("Line 5 - /=  c 的值 = {0}", c);

            c = 200;
            c %= a;
            Console.WriteLine("Line 6 - %=  c 的值 = {0}", c);

            c <<= 2;
            Console.WriteLine("Line 7 - <<=  c 的值 = {0}", c);

            c >>= 2;
            Console.WriteLine("Line 8 - >>=  c 的值 = {0}", c);

            c &= 2;
            Console.WriteLine("Line 9 - &=  c 的值 = {0}", c);

            c ^= 2;
            Console.WriteLine("Line 10 - ^=  c 的值 = {0}", c);

            c |= 2;
            Console.WriteLine("Line 11 - |=  c 的值 = {0}", c);
            Console.ReadLine();
        }
    }
}
```



#### 7、其他运算符

- **下表列出了 C# 支持的其他一些重要的运算符，包括 sizeof、typeof 和 ? :。**

| 运算符   | 描述                                   | 实例                                                         |
| :------- | :------------------------------------- | :----------------------------------------------------------- |
| sizeof() | 返回数据类型的大小。                   | sizeof(int)，将返回 4.                                       |
| typeof() | 返回 class 的类型。                    | typeof(StreamReader);                                        |
| &        | 返回变量的地址。                       | &a; 将得到变量的实际地址。                                   |
| *        | 变量的指针。                           | *a; 将指向一个变量。                                         |
| ? :      | 条件表达式                             | 如果条件为真 ? 则为 X : 否则为 Y                             |
| is       | 判断对象是否为某一类型。               | If( Ford is Car) // 检查 Ford 是否是 Car 类的一个对象。      |
| as       | 强制转换，即使转换失败也不会抛出异常。 | Object obj = new StringReader("Hello"); StringReader r = obj as StringReader; |

- **实例**

```csharp
using System;

namespace OperatorsAppl
{
    
   class Program
   {
      static void Main(string[] args)
      {
         
         /* sizeof 运算符的实例 */
         Console.WriteLine("int 的大小是 {0}", sizeof(int));
         Console.WriteLine("short 的大小是 {0}", sizeof(short));
         Console.WriteLine("double 的大小是 {0}", sizeof(double));
         
         /* 三元运算符的实例 */
         int a, b;
         a = 10;
         b = (a == 1) ? 20 : 30;
         Console.WriteLine("b 的值是 {0}", b);

         b = (a == 10) ? 20 : 30;
         Console.WriteLine("b 的值是 {0}", b);
         Console.ReadLine();
      }
   }
}
```

#### 8、C# 中的运算符优先级

**优先级简易概括**：有括号先括号，后乘除在加减，然后位移再关系，逻辑完后条件，最后一个逗号 **,** 。

| 类别       | 运算符                            | 结合性   |
| :--------- | :-------------------------------- | :------- |
| 后缀       | () [] -> . ++ - -                 | 从左到右 |
| 一元       | + - ! ~ ++ - - (type)* & sizeof   | 从右到左 |
| 乘除       | * / %                             | 从左到右 |
| 加减       | + -                               | 从左到右 |
| 移位       | << >>                             | 从左到右 |
| 关系       | < <= > >=                         | 从左到右 |
| 相等       | == !=                             | 从左到右 |
| 位与 AND   | &                                 | 从左到右 |
| 位异或 XOR | ^                                 | 从左到右 |
| 位或 OR    | \|                                | 从左到右 |
| 逻辑与 AND | &&                                | 从左到右 |
| 逻辑或 OR  | \|\|                              | 从左到右 |
| 条件       | ?:                                | 从右到左 |
| 赋值       | = += -= *= /= %=>>= <<= &= ^= \|= | 从右到左 |
| 逗号       | ,                                 | 从左到右 |

### 四、判断语句

![C# 中的判断语句](/Blog/posts/2025-2/if.avif)

C# 提供了以下类型的判断语句。点击链接查看每个语句的细节。

| 语句                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [if 语句](https://www.runoob.com/csharp/csharp-if.html)      | 一个 **if 语句** 由一个布尔表达式后跟一个或多个语句组成。    |
| [if...else 语句](https://www.runoob.com/csharp/csharp-if-else.html) | 一个 **if 语句** 后可跟一个可选的 **else 语句**，else 语句在布尔表达式为假时执行。 |
| [嵌套 if 语句](https://www.runoob.com/csharp/csharp-nested-if.html) | 您可以在一个 **if** 或 **else if** 语句内使用另一个 **if** 或 **else if** 语句。 |
| [switch 语句](https://www.runoob.com/csharp/csharp-switch.html) | 一个 **switch** 语句允许测试一个变量等于多个值时的情况。     |
| [嵌套 switch 语句](https://www.runoob.com/csharp/csharp-nested-switch.html) | 您可以在一个 **switch** 语句内使用另一个 **switch** 语句。   |

### 五、循环语句

![循环结构](/Blog/posts/2025-2/loop_architecture.avif)

#### 1、循环类型

| 循环类型                                                     | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [while 循环](https://www.runoob.com/csharp/csharp-while-loop.html) | 当给定条件为真时，重复语句或语句组。它会在执行循环主体之前测试条件。 |
| [for/foreach 循环](https://www.runoob.com/csharp/csharp-for-loop.html) | 多次执行一个语句序列，简化管理循环变量的代码。               |
| [do...while 循环](https://www.runoob.com/csharp/csharp-do-while-loop.html) | 除了它是在循环主体结尾测试条件外，其他与 while 语句类似。    |
| [嵌套循环](https://www.runoob.com/csharp/csharp-nested-loops.html) | 您可以在 while、for 或 do..while 循环内使用一个或多个循环。  |

#### 2、循环控制语句

| 控制语句                                                     | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [break 语句](https://www.runoob.com/csharp/csharp-break-statement.html) | 终止 **loop** 或 **switch** 语句，程序流将继续执行紧接着 loop 或 switch 的下一条语句。 |
| [continue 语句](https://www.runoob.com/csharp/csharp-continue-statement.html) | 跳过本轮循环，开始下一轮循环。                               |

### 六、C#编程基础中期编程题测试

### 七、数组

#### 1、什么是数组

- 参考图

![C# 中的数组](/Blog/posts/2025-2/arrays.avif)

- 解释：

  - 数组是一个存储相同类型元素的固定大小的顺序集合。数组是用来存储数据的集合，通常认为数组是一个同一类型变量的集合。

  - 声明数组变量并不是声明 number0、number1、...、number99 一个个单独的变量，而是声明一个就像 numbers 这样的变量，然后使用 numbers[0]、numbers[1]、...、numbers[99] 来表示一个个单独的变量。数组中某个指定的元素是通过索引来访问的。

  - 所有的数组都是由连续的内存位置组成的。最低的地址对应第一个元素，最高的地址对应最后一个元素。



#### 2、数组的创建（声明）、初始化、赋值和访问的方法

- 声明数组

  ```csharp
  datatype[] arrayName;
  //例如
  double[] balance;
  ```

  - *datatype* 用于指定被存储在数组中的元素的类型。
  - *[ ]* 指定数组的秩（维度）。秩指定数组的大小。
  - *arrayName* 指定数组的名称。

- 初始化数组

  ```csharp
  double[] balance = new double[10];
  ```

  - 声明一个数组不会在内存中初始化数组。当初始化数组变量时，您可以赋值给数组。

  - 数组是一个引用类型，所以您需要使用 **new** 关键字来创建数组的实例。

- 赋值给数组

  ```csharp
  //可以通过使用索引号赋值给一个单独的数组元素，比如：
  
  double[] balance = new double[10];
  balance[0] = 4500.0;
  
  //可以在声明数组的同时给数组赋值，比如：
  double[] balance = { 2340.0, 4523.69, 3421.0};
  
  //也可以创建并初始化一个数组，比如：
  int [] marks = new int[5]  { 99,  98, 92, 97, 95};
  
  //在上述情况下，你也可以省略数组的大小，比如：
  int [] marks = new int[]  { 99,  98, 92, 97, 95};
  
  //也可以赋值一个数组变量到另一个目标数组变量中。在这种情况下，目标和源会指向相同的内存位置：
  int [] marks = new int[]  { 99,  98, 92, 97, 95};
  int[] score = marks;
  ```

- 访问数组元素

#### 3、使用 *foreach* 方法

- 一个简单快捷的遍历数组的方法。

- 实例：

  ```csharp
  using System;
  
  namespace ArrayApplication
  {
     class MyArray
     {
        static void Main(string[] args)
        {
           int []  n = new int[10]; /* n 是一个带有 10 个整数的数组 */
  
  
           /* 初始化数组 n 中的元素 */         
           for ( int i = 0; i < 10; i++ )
           {
              n[i] = i + 100;
           }
  
           /* 输出每个数组元素的值 */
           foreach (int j in n )
           {
              int i = j-100;
              Console.WriteLine("Element[{0}] = {1}", i, j);
           }
           Console.ReadKey();
        }
     }
  }
  ```

  

#### 4、C#数组细节

| 概念                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [多维数组](https://www.runoob.com/csharp/csharp-multi-dimensional-arrays.html) | C# 支持多维数组。多维数组最简单的形式是二维数组。            |
| [交错数组](https://www.runoob.com/csharp/csharp-jagged-arrays.html) | C# 支持交错数组，即数组的数组。                              |
| [传递数组给函数](https://www.runoob.com/csharp/csharp-passing-arrays-to-functions.html) | 您可以通过指定不带索引的数组名称来给函数传递一个指向数组的指针。 |
| [参数数组](https://www.runoob.com/csharp/csharp-param-arrays.html) | 这通常用于传递未知数量的参数给函数。                         |
| [Array 类](https://www.runoob.com/csharp/csharp-array-class.html) | 在 System 命名空间中定义，是所有数组的基类，并提供了各种用于数组的属性和方法。 |

### 八、八大排序法

#### 1、排序的概念

![常见的排序](/Blog/posts/2025-2/image-20250216183813432.avif)

1. 排序：所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。

2. 稳定性：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次 序保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排 序算法是稳定的；否则称为不稳定的。

3. 内部排序：数据元素全部放在内存中的排序。

4. 外部排序：数据元素太多不能同时放在内存中，根据排序过程的要求不能在内外存之间移动数据的排序。

5. 排序的稳定性和复杂度

   ![img](/Blog/posts/2025-2/79d65bede5d22d2d1e81ba9df5fc76bd.avif)

#### 2、各个排序算法的特点

参考（[【超详细】八大排序算法的各项比较以及各自特点_八种排序算法效率比较-CSDN博客](https://blog.csdn.net/qq_45615577/article/details/115257685)）

### 九、方法（函数）

#### 1、什么是方法（函数）？

参考文章（[C# 方法 | 菜鸟教程](https://www.runoob.com/csharp/csharp-methods.html)）

一个方法是把一些相关的语句组织在一起，用来执行一个任务的语句块。每一个 C# 程序至少有一个带有 Main 方法的类。

要使用一个方法，您需要：

- 定义方法
- 调用方法

### 十、递归方法（函数）

- 一个方法可以自我调用。这就是所谓的 **递归**。下面的实例使用递归函数计算一个数的阶乘：

- 实例：

  ```csharp
  using System;
  
  namespace CalculatorApplication
  {
      class NumberManipulator
      {
          public int factorial(int num)
          {
              /* 局部变量定义 */
              int result;
  
              if (num == 1)
              {
                  return 1;
              }
              else
              {
                  result = factorial(num - 1) * num;
                  return result;
              }
          }
      
          static void Main(string[] args)
          {
              NumberManipulator n = new NumberManipulator();
              //调用 factorial 方法
              Console.WriteLine("6 的阶乘是： {0}", n.factorial(6));
              Console.WriteLine("7 的阶乘是： {0}", n.factorial(7));
              Console.WriteLine("8 的阶乘是： {0}", n.factorial(8));
              Console.ReadLine();
  
          }
      }
  }
  ```

  

### 十一、枚举类型

#### 1、什么是枚举

- 枚举是一组命名整型常量。枚举类型是使用 **enum** 关键字声明的。

- C# 枚举是值类型。换句话说，枚举包含自己的值，且不能继承或传递继承。

#### 2、声明枚举

- 声明枚举的一般语法：

  ```csharp
  enum <enum_name>
  { 
      enumeration list 
  };
  ```

- *enum_name* 指定枚举的类型名称。

- *enumeration list* 是一个用逗号分隔的标识符列表。

- 枚举列表中的每个符号代表一个整数值，一个比它前面的符号大的整数值。默认情况下，第一个枚举符号的值是 0.例如：

  ```csharp
  enum Days { Sun, Mon, tue, Wed, thu, Fri, Sat };
  ```

#### 3、枚举实例

```csharp
using System;

public class EnumTest
{
    enum Day { Sun, Mon, Tue, Wed, Thu, Fri, Sat };

    static void Main()
    {
        int x = (int)Day.Sun;
        int y = (int)Day.Fri;
        Console.WriteLine("Sun = {0}", x);
        Console.WriteLine("Fri = {0}", y);
    }
}

//枚举赋值
enum GameState
{ 
    Sun,Mon,Tue=10,Wed=12
}
```



### 十二、结构体

#### 1、什么是结构体？

- 参考链接 [C# 结构体（Struct）](https://www.runoob.com/csharp/csharp-struct.html)
- 在 C# 中，结构体（struct）是一种值类型（value type），用于组织和存储相关数据。

- 在 C# 中，结构体是值类型数据结构，这样使得一个单一变量可以存储各种数据类型的相关数据。

- **struct** 关键字用于创建结构体。

- 结构体是用来代表一个记录，假设您想跟踪图书馆中书的动态，您可能想跟踪每本书的以下属性：

  - Title

  - Author

  - Subject

  - Book ID

#### 2、定义结构体（创建结构体）

- 为了定义一个结构体，您必须使用 **struct** 语句。

  ```csharp
  struct Books
  {
     public string title;
     public string author;
     public string subject;
     public int book_id;
  };  
  
  ```

- 实例：

  ```csharp
  using System;
  using System.Text;
       
  struct Books
  {
     public string title;
     public string author;
     public string subject;
     public int book_id;
  };  
  
  public class testStructure
  {
     public static void Main(string[] args)
     {
  
        Books Book1;        /* 声明 Book1，类型为 Books */
        Books Book2;        /* 声明 Book2，类型为 Books */
  
        /* book 1 详述 */
        Book1.title = "C Programming";
        Book1.author = "Nuha Ali"; 
        Book1.subject = "C Programming Tutorial";
        Book1.book_id = 6495407;
  
        /* book 2 详述 */
        Book2.title = "Telecom Billing";
        Book2.author = "Zara Ali";
        Book2.subject =  "Telecom Billing Tutorial";
        Book2.book_id = 6495700;
  
        /* 打印 Book1 信息 */
        Console.WriteLine( "Book 1 title : {0}", Book1.title);
        Console.WriteLine("Book 1 author : {0}", Book1.author);
        Console.WriteLine("Book 1 subject : {0}", Book1.subject);
        Console.WriteLine("Book 1 book_id :{0}", Book1.book_id);
  
        /* 打印 Book2 信息 */
        Console.WriteLine("Book 2 title : {0}", Book2.title);
        Console.WriteLine("Book 2 author : {0}", Book2.author);
        Console.WriteLine("Book 2 subject : {0}", Book2.subject);
        Console.WriteLine("Book 2 book_id : {0}", Book2.book_id);       
  
        Console.ReadKey();
  
     }
  }
  ```

#### 3、C#结构体的特点

**结构提供了一种轻量级的数据类型，适用于表示简单的数据结构，具有较好的性能特性和值语义：**

- 结构可带有方法、字段、索引、属性、运算符方法和事件，适用于表示轻量级数据的情况，如坐标、范围、日期、时间等。
- 结构可定义构造函数，但不能定义析构函数。但是，您不能为结构定义无参构造函数。无参构造函数(默认)是自动定义的，且不能被改变。
- 与类不同，结构不能继承其他的结构或类。
- 结构不能作为其他结构或类的基础结构。
- 结构可实现一个或多个接口。
- 结构成员不能指定为 abstract、virtual 或 protected。
- 当您使用 **New** 操作符创建一个结构对象时，会调用适当的构造函数来创建结构。与类不同，结构可以不使用 New 操作符即可被实例化。
- 如果不使用 New 操作符，只有在所有的字段都被初始化之后，字段才被赋值，对象才被使用。
- 结构变量通常分配在栈上，这使得它们的创建和销毁速度更快。但是，如果将结构用作类的字段，且这个类是引用类型，那么结构将存储在堆上。
- 结构默认情况下是可变的，这意味着你可以修改它们的字段。但是，如果结构定义为只读，那么它的字段将是不可变的。

### 十三、委托类型（delegate）

#### 1、什么是委托

- 参考网址（[C# 委托（Delegate） | 菜鸟教程](https://www.runoob.com/csharp/csharp-delegate.html)）
- 委托就是一个空的函数体，函数体可以直接赋值给委托，委托就拥有了赋值函数体。

- 委托是一种存储函数引用的类型。
- 委托定义制定了一个返回类型和一个参数列表。
- 定义了委托之后，就可以声明委托的变量，接着就可以把一个返回类型跟参数列表跟委托一样的函数复制给这个变量。
- 委托的使用分两步
  - 定义
  - 声明（变量）

- 结构体，枚举的使用同上都分为定义和声明。
- 整数类型、数组类型、字符串类型都是直接声明变量的，因为类型的定义已经完成了（CLR中已经完成定义）
- 委托就是一个函数类型，可以吧一个函数赋值给委托类型。
- 定义委托的时候，跟函数有点像，只不过没有函数体。
- 只能赋值-参数和返回值一样的函数。

#### 2、声明委托

```
public delegate <return type> <delegate-name> <parameter list>
//中文格式说明
public delegate 返回类型 委托名(参数类型 参数名, ...);
public delegate int MathOperation(int x, int y);
public delegate int MyDelegate (string s);
```

#### 3、实例化委托

```csharp
using System;

delegate int NumberChanger(int n);
namespace DelegateAppl
{
   class TestDelegate
   {
      static int num = 10;
      public static int AddNum(int p)
      {
         num += p;
         return num;
      }

      public static int MultNum(int q)
      {
         num *= q;
         return num;
      }
      public static int getNum()
      {
         return num;
      }

      static void Main(string[] args)
      {
         // 创建委托实例
         NumberChanger nc1 = new NumberChanger(AddNum);
         NumberChanger nc2 = new NumberChanger(MultNum);
         // 使用委托对象调用方法
         nc1(25);
         Console.WriteLine("Value of Num: {0}", getNum());
         nc2(5);
         Console.WriteLine("Value of Num: {0}", getNum());
         Console.ReadKey();
      }
   }
}
```



#### 

