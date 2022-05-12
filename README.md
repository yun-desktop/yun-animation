# yun-animation

<p align="center">
  <a href="https://img.badgesize.io/https:/unpkg.com/yun-animation@0.0.2/packages/main.js?label=gzip%20size%3A%20JS&compression=gzip">
  	<img src="https://img.badgesize.io/https:/unpkg.com/yun-animation@0.0.2/packages/main.js?label=gzip%20size%3A%20JS&compression=gzip"/>
  </a>
  <a href="https://github.com/yun-desktop/yun-animation/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

>  A animation kit.

Provide only one method to apply animation to element.(only 0.89KB)

只提供一个函数来构建动画。（只有0.89KB）

## Install

```shell
npm install yun-animation -S
```

## Usage

It's easy to use.

很简单的就能使用。

```javascript
import defineAnimation from 'yun-animation';

var element1 = document.querySelector('#box1');
var element2 = document.querySelector('#box2');

/** define animation
 *	定义一个动画
 */
var animation = defineAnimation({
	left: '320px',
	transform: 'translate3d( -50%, -30%, 100px)',
  /** color: '#333'
  	Error: Color transformation is not supported！ 
  	错误：不支持颜色转换！*/
})

/** apply animation to element.(The element will stay at the end of the frame)
	* 将动画作用在元素上。（元素会停在最后1帧）
	*/
animation.to(element1)

/** animation complete callback.
  * 动画结束回调。
  */
animation.to(element2)
				 .end(() => {
  					// also use other animation.
  					// 当然也可以使用其它动画续接。
  					defineAnimation({left: '10px'}).to(element2)
					})

/** duration time.(default 2s)
  * 动画持续时间。(默认2秒)
  */
defineAnimation({top: '130px'}, 2).to(element2)
```

## Links🔗关联链接

> yun-desktop-ui
>
> https://www.npmjs.com/package/yun-animation
>
> A Component Library for Vue.js.（Developing...）
>
> 一个Vue组件库，专门用于构建云端桌面。(开发中...)

>yun-desktop（development....）
>
>https://bndiya.com/desktop#/login
>
>A desktop system By cloud.(Developing...)
>
>一个云端桌面形同。(开发中...)
