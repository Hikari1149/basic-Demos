

window.onload=function () {
    var outer=document.getElementById('subject');
    var list=outer.getElementsByTagName('li');
    for(var i=0;i<list.length;i++)
        bind(list[i],'mouseover',mouseoverHandler);
    function bind(el,eventType,callback){
        if(typeof el.addEventListener ==='function')
            el.addEventListener(eventType,callback,false);
        else if(typeof  el.attachEvent === 'function')
            el.attachEvent('on'+eventType,callback);
    }
    function mouseoverHandler(e){
        var target=e.target||e.scrElement;
        var outer=document.getElementById('subject');
        var list=outer.getElementsByTagName('li');
        for(var i=0;i<list.length;i++)
            list[i].className=list[i].className.replace('big',' ');
      //  alert(target.tagName);
        while(target.tagName!='LI')
            target=target.parentNode;
        target.className='big';
    }
}