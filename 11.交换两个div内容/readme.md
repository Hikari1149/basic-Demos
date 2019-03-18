拖放(Drag和drop)是HTML5标准的组成部分.  

若元素的draggable='true' 则可拖动  

拖动时触发ondragstart   
dataTransfer.setData() 方法设置被拖数据的数据类型和值  

ondragover规定在何处放置被拖动的数据  

当放置拖放数据时,发生ondrop事件
  
现在要交换两个div的内容.
ondragstart时记录初始的节点,令srcdiv=(this当前指向).  
drop时 令divdom=(this指向要放置的节点)  
交换: divdom=srcdiv,  srcdiv=ev.dataTransfer.getData('text/html')


