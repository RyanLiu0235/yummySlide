# yummySlide
###### yummySlide 是一个专门针对于H5的滑页插件，based on jQuery，以下简要介绍使用方法

### 使用方法
- `	<div class="y-slide">
		<div class="container">
			<div class="page"></div>
			<div class="page"></div>
			<div class="page"></div>
		</div>
	</div>`
- `	$('.y-slide').yummySlide({
        mode: 'normal',
        direction: 'vertical',
        loop: true
    });`
###### 以上就能正确使用 *yummySlide* 了，当然，引入必要的文件也是必不可少的

### 依赖文件
- jQuery.js v-1.6^
- yummySlide.js
###### *yummySlide* 依赖于jQuery，建议使用1.6及以上版本的jQuery，同时，引入yummySlide的核心文件，**yummySlide.js**
###### *yummySlide* 建议将动画写入 ./less 目录下的 *y-slide.less* less文件中，按照已有动画的规范

### 接口定义
###### *yummySlide* 目前定义了一下接口

| API           | USAGE                                | VALUE                           | DEFAULT     |
| ------------- |:------------------------------------:| :------------------------------:| -----------:|
| mode          | define which kind of switch you want | normal cover scale fade         | normal      |
| direction     | define which direction you want <br> it to slide| vertical horizontal  | horizontal  |
| loop          | if the slide is loop                 | true false                      | false       |
| order         | define the order the slide works     | sequential reverse [array]      | sequential  |
| custom        | define the way to trigger slide      | two params, trigger is the<br> way and obj is the<br> object which you <br>bind to| none        | 
