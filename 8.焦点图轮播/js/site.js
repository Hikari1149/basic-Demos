window.onload=function () {
    var pp=document.getElementById('pp');//点击上/下一张按钮时.
    var list=document.getElementById('list');//
    var buttons=document.getElementById('pn').getElementsByTagName('span');//按钮
    var index=0;//初始按钮为0;
    var flag=false;
    function change(offset){
        flag=true;
        var left=parseInt(list.style.left);//获取list的left,并转成整数....list的left要写在标签中才能获取到..
        var nl=left+offset;
        var time=600;//动画时间
        var fre=30;//动画频率;
        var count=parseInt(time/fre);//变化次数
        var dif=offset/count;//每次变化大小
        function go() {
            if((offset<0&&left+dif>nl)||(offset>0&&left+dif<nl)){
                left+=dif;
                list.style.left=left+'px';
                setTimeout(go,fre);
            }
            else{
                flag=false;
                if(nl>=0)   nl=-3000;//副本跳到原图.
                if(nl<=-3600)   nl=-600;
                list.style.left=nl+'px';
                return;
            }
        }
        go();
    }
    function go_next() {
        if(flag)    return;
        buttons[index].className='';
        change(-600);
        index=(index+1)%5;
        buttons[index].className="on";
    }
    pp.addEventListener('click',function (event) {
        var ele=event.target;//当前事件目标.
        if(ele.tagName.toLowerCase()!="a")    return;
        if(flag)    return;
        for(var i=0;i<buttons.length;i++) {
            if(buttons[i].className=='on')
                buttons[i].className="";
        }

        if(ele.id=='prev'){
            if(!flag)//已经在滚动.
                change(600);
            //button高亮部分.
            index=(index-1+5)%5;
            buttons[index].className="on";
        }
        else if(ele.id=='next'){
            go_next();
        }
    });
    //点击按钮跳转部分.
    for(var i=0;i<buttons.length;i++){
        let id=i;//闭包,let重复声明,别用var
        buttons[i].onclick=function () {
            if(id==index)   return;
            if(!flag)
                change(-600*(id-index));
            buttons[index].className="";
            index=id;
            buttons[index].className='on';
        }
    }
    //自动播放部分
    var timer,pn=document.getElementById('pn');
    pn.onmouseout=function () {
        timer=setInterval(go_next,1000);//鼠标移开时,每隔1秒向下移动一张图片.
    }
    pn.onmouseover=function () {
        clearTimeout(timer);

    }


}