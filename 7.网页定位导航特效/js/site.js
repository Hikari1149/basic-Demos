$(document).ready(function () {
    $(window).scroll(function () {
        var top=$(document).scrollTop();
        var menu=$('#menu');
        var items=$('#content').find(".item");
        var currentId="";//当前所在楼层
        items.each(function(){
           var m=$(this);
           var itemTop=m.offset().top;///
           if(top+200>itemTop)
               currentId='#'+m.attr('id');
           else
               return false;
        });
        var currentLink=menu.find('.current');//找到要取消的楼层.
        if(currentId&&currentLink.attr('href')!=currentId){
            currentLink.removeClass("current");
            menu.find("[href=" +currentId + "]").addClass("current");
        }
   });
});