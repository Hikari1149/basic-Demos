window.onload=function(){
    waterFall('pn','box');
    var dataInt={"data":[{"src":"../src/40.jpg"},{"src":"../src/48.jpg"},{"src":"../src/47.jpg"},{"src":"../src/41.jpg"},{"src":"../src/42.jpg"},{"src":"../src/43.jpg"},{"src":"../src/44.jpg"},{"src":"../src/45.jpg"},{"src":"../src/46.jpg"},]}
    document.onscroll=function(){
        //alert("on");
        if(checkOn()){
            var oParent=document.getElementById('pn');
            for(let i=0;i<dataInt.data.length;i++){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var oPic=document.createElement('div');
                oPic.className='pic';
                oBox.appendChild(oPic);
                var oImg=document.createElement('img');
                oImg.src=dataInt.data[i].src;
                oPic.append(oImg);
            }
            waterFall('pn','box');
        }
    }
};
function waterFall(parent,box) {
    let oParent=document.getElementById(parent);
    let oBox=getClass(oParent,box);
    let oBoxW=oBox[0].offsetWidth;//box-width
    let cols=Math.floor(document.documentElement.clientWidth/oBoxW);//box-col
    oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto;';//设置pn的宽度.
    let colH=[];
    for(let i=0;i<oBox.length;i++){
        if(i<cols)  {
            colH.push(oBox[i].offsetHeight);
            //console.log(oBox[i].offsetHeight);
        }
        else{
            let mnH=Math.min.apply(null,colH);
            let idx=colH.indexOf(mnH);
            oBox[i].style.cssText='position:absolute;top:'+mnH+'px;';
           // oBox[i].style.left=idx*oBoxW+'px';
            oBox[i].style.left=oBox[idx].offsetLeft+'px';
            colH[idx]+=oBox[i].offsetHeight;
        }
    }
}
function getClass(parent,cls){
    let oBox=[],
        oElement=parent.getElementsByTagName('*');//获取父元素下所有标签.
    for(let i=0;i<oElement.length;i++){
        if(oElement[i].className===cls)
            oBox.push(oElement[i]);
    }
    return oBox;
}
function checkOn(){
    var oParent=document.getElementById('pn');
    var oBox=getClass(oParent,'box');
    var lastBoxH=oBox[oBox.length-1].offsetTop+Math.floor(oBox[oBox.length-1].offsetHeight/2.0);
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var height=document.body.clientHeight ||document.documentElement.clientHeight;
    return scrollTop+height>=lastBoxH;

}
//瀑布流效果,确定图片宽度和屏幕宽度,得到col列,每列等宽.
//令colH[i]为第i列的最小高度.每次把图片放到colH最小的那一列上.
//绝对定位设置:top:mnH, left:oBox[index].offsetLeft即可.

//滚动滚动条时,加载出新的图片.(数据用数组模拟一下).
//什么时候插入新的图片?
//若滚动条高度+窗口高度>=当前最后一张图片高度/2.0+最后一张图片距离顶部的高度时 说明可以看到最后一张图片了.
//此时用document.createElement,appendChild将数据插入.然后在调用一次waterFall(设置位置)即可.
//(也可以用css3 column属性来完成多列布局)
