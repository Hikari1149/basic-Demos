
手风琴效果
若干张个div摆在一行(float:left),div为正方形,包含图片和文字.
利用绝对定位把图片放在div右下角,文字放在div左上角.

鼠标移入某个div时,放大该div并且产生明暗度变化.(opacity).并用transition产生过渡效果.
mouseover时可能是子元素触发事件,找到该子元素的div
放大时为该div添加类big.(big放大了该div宽度,修改其透明度.)


