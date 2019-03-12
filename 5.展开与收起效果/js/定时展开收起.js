/*
var h=0;
function addH() {
    if(h<300){
        h+=5;
        document.getElementById('pn').style.height=h+'px';
    }
    else return;
    setTimeout(addH,30);
//setTimeout() 只执行 code 一次。如果要多次调用，请使用 setInterval() 或者让 code 自身再次调用 setTimeout()
}
function subH(){
    if(h>0){
        h-=5;
        document.getElementById('pn').style.height=h+'px';
    }
    else{
        document.getElementById('pn').style.display='none';
        return;
    }
    setTimeout(subH,30);
}
window.onload=function () {
    addH();
    setTimeout(subH,5000);
}
*/
var w=0;
function addW() {
    if(w<500){
        w+=5;
        document.getElementById('pn').style.width=w+'px';
    }
    else return;
    setTimeout(addW,30);
//setTimeout() 只执行 code 一次。如果要多次调用，请使用 setInterval() 或者让 code 自身再次调用 setTimeout()
}
function subW(){
    if(w>0){
        w-=5;
        document.getElementById('pn').style.width=w+'px';
    }
    else{
        document.getElementById('pn').style.display='none';
        return;
    }
    setTimeout(subW,30);
}
window.onload=function () {
    addW();
    setTimeout(subW,5000);
}