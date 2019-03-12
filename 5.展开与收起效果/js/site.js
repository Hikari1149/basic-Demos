/*
function showdiv() {
    document.getElementById("hpn").style.display="block";
    document.getElementById("strHref").innerHTML="收起-";
    document.getElementById("strHref").onclick=hidediv;
}
function hidediv() {
    document.getElementById("hpn").style.display="none";
    document.getElementById("strHref").innerHTML="更多选项+";
    document.getElementById("strHref").onclick=showdiv;
}
window.onload=function ()
{
    document.getElementById("strHref").onclick=showdiv;
}
*/

$(document).ready(function () {
    var i=0;
    $('#strHref').click(function () {
        if(i%2==0){
            $(this).text("收起-");
            $("#hpn").show(1000);
        }
        else{
            $(this).text("更多选项-");
            $("#hpn").hide(1000);
        }
        i++;
    })
});
