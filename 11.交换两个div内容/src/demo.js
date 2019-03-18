let srcdiv='';
function drag(ev){
    let divdom=this;
    console.log(divdom);
    srcdiv=divdom;
    ev.dataTransfer.setData('text/html',divdom.innerHTML);
}
function allowDrop(ev){
    ev.preventDefault();
}
function drop(ev){
    let divdom=this;
    console.log(divdom);//此时divdom为鼠标放置时的元素.
    ev.preventDefault();
    if(srcdiv!=divdom){
        srcdiv.innerHTML=divdom.innerHTML;
        //交换
        divdom.innerHTML=ev.dataTransfer.getData('text/html');
    }
}
let arr=document.getElementsByTagName('div');
for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('dragstart',drag);
    arr[i].addEventListener('dragover',allowDrop);
    arr[i].addEventListener('drop',drop)
}
