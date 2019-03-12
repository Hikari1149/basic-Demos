Bing搜索框制作.
logo和form同一行,两个元素同时向左float即可.
去掉input边框  border:0
去掉input-submit默认属性, 令其val=0即可
适当设置padding让input-text看起来不那么挤

Bing搜索-智能提示效果.
在搜索框输入关键字,浏览器将关键字「异步」发送给服务器
服务器经过处理。将相应数据以 Json 格式返回客户端(跨域使用jsonp)
浏览器接受服务器响应数据，解析之后使用 js 操作 dom 显示数据。

用<ul>来显示要提示的内容.
利用jquery-bind来进行事件绑定.当key-up时 显示提示内容ul.
利用offset,将内容放在form表单下方

ps(不知道为什么啥bing-api传的数据为空...有bug的时候记得console一下..)

切换菜单.
初始将li高度设置为块高度的一半.当鼠标移入li时,将div高度还原,就能将菜单展开.
鼠标移入相应的li时(mouseover),改变其背景颜色.
单击li切换,将初始li-display设置为none,选中的li(click)添加类selected.其display为block.

//ps:每次click都会触发mouseover事件.当click时用flag标志一下即可.
