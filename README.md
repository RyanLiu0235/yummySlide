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

### 依赖文件

- jQuery.js v-1.6^
- yummySlide.js
*yummySlide* 依赖于jQuery，建议使用1.6及以上版本的jQuery，同时，引入yummySlide的核心文件，**yummySlide.js**
*yummySlide* 建议将动画写入 ./less 目录下的 **y-slide.less** 文件中，按照已有动画的规范

### 接口定义

*yummySlide* 目前定义了以下接口

| API           | USAGE                                | VALUE                           | DEFAULT     | EXAMPLE    |
| ------------- |:------------------------------------:| :------------------------------:|:-----------:|:----------:|
| mode          | define which kind of switch you want | normal cover scale fade         | normal      | mode: 'normal'|
| direction     | define which direction you want it to slide| vertical horizontal  | horizontal  | direction: 'horizontal' |
| loop          | if the slide is loop                 | true false                      | false       | loop: true |
| order         | define the order the slide works     | sequential reverse [array]      | sequential  | order: [2, 1, 4, 3, 0, 5] |
| custom        | define the way to trigger slide      | two params, trigger is the way and obj is the object which you bind to| none        | custom : {obj: $('ele'), trigger: 'click'}|
| init          | define the functions that executed after init | some logics and functions | null    | init: { $('ele').show();} |
| loadFn        | define the functions that executed after every page has shown | array | null | loadFn : [1: {fn: foo, arguments: boo}] |

### 以下是一个小例子

![yummySlide demo](./demo-qrcode.png "yummySlide demo")
