window.onload = function(){
    showtime();
}
function checktime(t){
    if(t<10)    t="0"+t;
    return t;
}
function showtime() {
    var myDate=new Date();
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var date=myDate.getDate();//显示日期1~31.

    var day=myDate.getDay();//显示0~6;
    var weekday=new Array(7);
    weekday[0]="星期天";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    var hour=myDate.getHours();
    var minute=myDate.getMinutes();
    var second=myDate.getSeconds();
    minute=checktime(minute);
    second=checktime(second);
    document.getElementById('show').innerHTML=year+'年'+month
        +'月'+date+'日'+weekday[day]+hour+":"+minute+":"+second;
    setTimeout(showtime,500);
}