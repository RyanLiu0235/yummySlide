# yummySlide
yummySlide 是一个专门针对于H5的滑页插件，based on jQuery，以下简要介绍使用方法

### 使用方法

``` html
<div class="y-slide">
	<div class="container">
		<div class="page"></div>
		<div class="page"></div>
		<div class="page"></div>
	</div>
</div>
```
``` javascript
$('.y-slide').yummySlide({
	mode: 'normal',
	direction: 'vertical',
	loop: true
});
```

以上就能正确使用 *yummySlide* 了，当然，引入必要的文件也是必不可少的

### CSS3动画

yummySlide.js内部对CSS3动画的加载做了优化与规定，*yummySlide* 建议将动画写入 ./less 目录下的 **y-slide.less** 文件中，按照已有动画的规范，将对应的动画名称写入元素的 data-animation 属性中。页面滑动到对应page时，yummySlide 会在页面滑动结束时来一次性加载动画，如果需要延迟动画，请自行在 animation 中添加animation-delay值。规范的书写有利用您管理自己的动画，也有利于充分利用 yummySlide 。

### 依赖文件

- jQuery.js v-1.6^
- yummySlide.js
*yummySlide* 依赖于jQuery，建议使用1.6及以上版本的jQuery，同时，引入yummySlide的核心文件，**yummySlide.js**.


### 接口定义

*yummySlide* 目前定义了以下接口

| API           | USAGE                                | VALUE                           | DEFAULT     | EXAMPLE    |
| ------------- |:------------------------------------:| :------------------------------:|:-----------:|:----------:|
| mode          | define which kind of switch you want | normal cover scale fade         | normal      |``` javascript mode: 'normal' ```|
| direction     | define which direction you want it to slide| vertical horizontal  | horizontal  |``` javascript direction: 'horizontal'``` |
| loop          | if the slide is loop                 | true false                      | false       |``` javascript loop: true``` |
| order         | define the order the slide works     | sequential reverse [array]      | sequential  |``` javascript order: [2, 1, 4, 3, 0, 5]``` |
| custom        | define the way to trigger slide      | two params, trigger is the way and obj is the object which you bind to| none        |``` javascript custom : {obj: $('ele'), trigger: 'click'}```|
| init          | define the functions that executed after init | some logics and functions | null    |``` javascript init: { $('ele').show();}``` |
| loadFn        | define the functions that executed after every page has shown | array | null |``` javascript loadFn : 1: [{ fn: count, arguments: [$('.page').eq(1).find('.number')]}]``` |

### 以下是一个小例子

![yummySlide demo](./demo-qrcode.png "yummySlide demo")
