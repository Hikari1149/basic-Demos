$(window).on('load',function(){
    waterFall();
    $(window).on('scroll',function(){
        var dataInt={"data":[{"src":"../src/40.jpg"},{"src":"../src/48.jpg"},{"src":"../src/47.jpg"},{"src":"../src/41.jpg"},{"src":"../src/42.jpg"},{"src":"../src/43.jpg"},{"src":"../src/44.jpg"},{"src":"../src/45.jpg"},{"src":"../src/46.jpg"},]}
        if(checkScroll()){
            $.each(dataInt.data,function(key,value){
                let oBox=$('<div>').addClass('box').appendTo('#pn');
                let oPic=$('<div>').addClass('pic').appendTo($(oBox));
                let oImg=$('<img>').attr('src',$(value).attr('src')).appendTo($(oPic));
            });
            waterFall();
        }
    })
});
function waterFall() {
    let $box=$('#pn>div');//父元素为pn的所有div元素.
    let w=$box.eq(0).width();
    let cols=Math.floor($(window).width()/w);
    $('#pn').width(w*cols).css('margin','0 auto');
  //  console.log(cols);
    let hArr=[];
    $box.each(function(index,value){
        let h=$box.eq(index).outerHeight();
        if(index<cols)hArr[index]=h;
        else{
            let Hmin=Math.min.apply(null,hArr);
            let idx=hArr.indexOf(Hmin);
            $(value).css({
                'position':'absolute',
                'top':Hmin+'px',
                'left':idx*w+30+'px',
            });
            hArr[idx]+=h;
        }
    })
}

function checkScroll(){
    let $lastBox=$('#pn>div').last();
    let lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.clientHeight ||document.documentElement.clientHeight;
  //  console.log(lastBoxDis);
   // console.log(scrollTop);
    return scrollTop+height>=lastBoxDis;//最后一个图片在可视范围内.

}