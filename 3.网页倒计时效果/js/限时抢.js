window.onload=function(){
  showtime();
}
function showtime(){
    var st=new Date();
    var ed=new Date("2019/11/11,21:35:45");
    var t=parseInt((ed.getTime()-st.getTime())/1000);
    var d=parseInt(t/(60*60*24));
    var h=parseInt(t/(60*60))%24;
    var m=parseInt(t/60)%60;
    var s=t%60;
    document.getElementById("show").innerHTML="还剩"+d+"天"+h+"小时"+m+"分钟"+s+"秒结束";
    if(t<=0){
        document.getElementById("活动结束");
    }
    setTimeout(showtime,500);
}