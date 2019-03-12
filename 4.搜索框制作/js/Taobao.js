window.onload=function ()
{
    var getDOM=function (id) {
        return document.getElementById(id);
    }
    var addEvent=function (id,event,fn) {
        var el=getDOM(id)||document;
        if(el.addEventListener){
            el.addEventListener(event,fn,false);
        }else if(el.attachEvent){
            el.attachEvent('on'+event,fn);
        }
    }
    var flag=false;//是否发生点击事件
    addEvent('search_tab','mouseover',function () {
       this.className+=' trigger-hover';
    });

    addEvent('tab_1','mouseover',function () {
        if(this.className.indexOf('selected')<0)
             this.className+=' selected';
    });
    addEvent('tab_1','mouseout',function () {
        if(!flag)
            this.className='';
        flag=false;//点击事件结束
    });
    addEvent('tab_2','mouseover',function () {
        if(this.className.indexOf('selected')<0)
            this.className+=' selected';
    });
    addEvent('tab_2','mouseout',function () {
        if(!flag)
             this.className='';
        flag=false;

    });

    addEvent('tab_1','click',function () {
        getDOM('search_tab').className='search-list';
        this.className='selected';
        flag=true;
    });
    addEvent('tab_2','click',function () {
        getDOM('search_tab').className='search-list';
        this.className='selected';
        flag=true;
    });


}