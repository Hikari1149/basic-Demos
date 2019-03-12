瀑布流效果,确定图片宽度和屏幕宽度,得到col列,每列等宽.
令colH[i]为第i列的最小高度.每次把图片放到colH最小的那一列上.
绝对定位设置:top:mnH, left:oBox[index].offsetLeft即可.
滚动滚动条时,加载出新的图片.(数据用数组模拟一下).
什么时候插入新的图片?
若滚动条高度+窗口高度>=当前最后一张图片高度/2.0+最后一张图片距离顶部的高度时 说明可以看到最后一张图片了.
此时用document.createElement,appendChild将数据插入.然后在调用一次waterFall(设置位置)即可.
(也可以用css3 column属性来完成多列布局)
