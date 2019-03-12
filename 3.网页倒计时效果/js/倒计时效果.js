window.onload=function () {
    var st=new Date();
    var ed=new Date("2019,6,6");
    var dif=ed.getTime()- st.getTime();
    dif=Math.ceil(dif/(1000*60*60*24));
    document.getElementById("show").innerHTML="距离2019.6.6还有"+dif+"天";
}