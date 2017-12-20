# zyskin

## 掌阅书城皮肤定制方案1.0

根据掌阅最新的UI规范，基于预处理器Less实施，核心思想是变量覆盖，其次是逻辑场景控制
，重要的是和设计团队(甲方)沟通把握定制的基准方向，更多的体现在高频样式变更的改动点上。

### 基变量

```less
/**
 * ireader基础皮肤
 */
@skin: ireader;
/**
 * 计算标准calculate
 */
@px-base: 3px;
@rem-base: 60rem;
@cal-base: 60rem;
/**
 * 字相关
 */ 
@font-size-base: 39/@px-base;
@font-size-xxl: 54/@px-base;// extra extra large
@font-size-xl: 48/@px-base; // extra large
@font-size-l: 45/@px-base;  // large
@font-size-m: 36/@px-base;  // middle
@font-size-s: 33/@px-base;  // small
@font-size-xs: 30/@px-base; // extra small
/**
 * 基础黑
 */
@black-base: #363a3d;
/**
 * 基础色，黑，用于文字标题等一级文本
 */
@color-base: @black-base;
/**
 * 不可点击色
 */
@unlink-color: fade(@color-base, 35%);
/**
 * 信息色，二级文本色
 */
@info-color: fade(@color-base, 65%);
/**
 * 分割栏色，无内容底色
 */
@split-color: fade(@color-base, 5%);
/**
 * 点击态色
 */
@active-color: fade(@color-base, 8%);
...
```

### 基控制

#### 逻辑“或”

```less
/**
 * 基础按钮样式
 */
.base-btn when(@skin = ireader), (@skin = ios) {
    .round-btn(72,30,@font-size-s,@theme-color); // lib/mixins.less
    .active(@active-color);
    min-width: (208-30*2)/@px-base;
    text-align: center;
    &:after {
        border: 0;
    }
    border: 1px solid @theme-color;
}
```

#### 逻辑“非”、逻辑“与”

```less
/**
 * 边框弧度定制接口
 * @param @r 边框弧度值，可通过传入空字符串''不使用弧度样式
 */
.border-1px-radius(@r) when not (ispixel(@r)) and (isnumber(@r)) {
    ...
    @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        &:after {
            border-radius: 3*@r/@cal-base;
        }
    }
}
// 快捷入口图标
.entrance-item-icon when (@skin = huawei) {
    width: 120/@cal-base;
    height: 120/@cal-base;
    border-radius: 50%;
    .active(rgba(255, 255, 255, .5));
    background-size: contain;
    background-repeat: no-repeat;
}
.entrance-item-icon when not (@skin = huawei) {
    width: 96/@cal-base;
    height: 96/@cal-base;
    background-size: contain;
    background-repeat: no-repeat;
}
```

### 定制准则

* 把握规范
* 图标CSS化
* 使用公共样式

### 预处理器迁移

借鉴less的案例也可以迁移到其它处理器

||Less|Sass、Scss|Stylus|
|:--|:--|:---|:---|
|变量定制|声明式(懒加载)变量，以最后一次被定义的值为准，直接覆盖变量值|指令式变量， 以最近一次定义的变量为准，!default仅当变量不存在时才赋值|同Sass|
|逻辑控制|使用mixin|@if、@else if、@else、@for、@each、@while|if、else if、else、unless、for...in|

### 命令行

```
npm install
npm run build
```