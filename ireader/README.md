ireader 样式库

## 预处理

less@version1.7.5

    [less(http://lesscss.org/)

## 目录

ireader
-lib 公共函数类(只定义变量和函数，不生产代码)
-mod 组件样式类(依赖lib公共函数，生产对应模块样式代码)

## 规范

轮播图比例 <720*300>  <1080*450>

书封比例<3:4> : <275*367>

## 注意事项

### Notice：

字体加粗font-weight，一些手机上没有效果，依据产品考虑适当采用此设计方案

### Warn

https://github.com/philipwalton/flexbugs

旧版本flex要求伸缩项目必须是block元素

旧版本flex不支持伸缩流换行，所以在其他版本flex中尽量不要使用换行操作

旧版本flex的主轴对齐属性中没有扩散对齐属性space-around，所以在其他版本flex中尽量不要使用该属性值

旧版本flex的伸缩性只有一个值，表示基于伸缩项目本身尺寸大小的扩展或收缩比率，旧版本的-webkit-box-flex:1;相当于新版本的flex:auto;所以要想实现不基于伸缩项目本身尺寸大小的伸缩需要显式地将伸缩项目的宽度width设置为0

旧版本flex的显示顺序是以1为默认值的正整数，而新版本flex的显示顺序是以0为默认值的自然数。所以在设置显示顺序时，跳过1，从2开始设置

在flex容器上不能正常应用text-overflow:ellipsis属性，转为容器项目完成打点

float、clear和vertical-align属性在伸缩项目上没有效果

伸缩容器的margin与其内容的margin不会重叠

text-align属性在伸缩容器上没有效果，因为其只可应用于块级block容器

columns属性伸缩容器上没有效果

### Info

书城采用flex布局，伸缩容器（flex）伸缩项目（flex-item）

点击态目前频道页统一按:active实现

爱读掌阅标签色值替换，涉及到书城和客户端，具体色值如下：

VIP：#ffbb05

免费：#0dace7

包月：#3ae5de

特价：#ff9a37

lib 函数库

## 简写规则

m: margin
p: padding
x: 水平方向左右两边，x尺码
y: 垂直方向上下两边
t: top
b: bottom
l: left 或 l尺码
r: right

## 变量

@spacer 间隔
https://v4-alpha.getbootstrap.com/utilities/spacing/
