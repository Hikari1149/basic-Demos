window.onload=function () {
   var s=document.getElementById('show');
   var h=document.getElementById('hide');
    //因为当有多个文章要显示隐藏,getElementById会显得很繁琐.
    //直接a标签中传递this在用parentNode和nextSibling找到要显示和隐藏的部分即可.
   s.onclick=function () {
           //obj全文
           var x=s.parentNode;//摘要
           var y=x.nextSibling;//正文
           if(y.nodeType!=1)  y=y.nextSibling;//兼容
           //alert(y.nodeName);
           y.style.display='block';
           x.style.display='none';
   }
   h.onclick=function () {
       var y=h.parentNode.parentNode;
       var x=y.previousSibling;//摘要
       if(x.nodeType!=1)    x=x.previousSibling;
       x.style.display='block';
       y.style.display='none';
   }
}