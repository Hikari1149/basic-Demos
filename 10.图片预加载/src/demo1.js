window.onload=function(){
    let pics=['../src/ngKMWd4.jpg','../src/pic2.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552838739195&di=3136e29d35b7409fa95231f67debde42&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201704%2F04%2F20170404211406_ufzcn.png'
        ,'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2294274319,3153041512&fm=26&gp=0.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10939.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10942.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10940.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10941.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10943.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10944.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10945.jpg'
    ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10946.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10850.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10851.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10852.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10853.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10854.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10855.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10856.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10857.jpg'

        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10860.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10861.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10862.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10863.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10864.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10865.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10866.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10867.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10870.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10921.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10922.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10923.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10924.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10925.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10926.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10927.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10910.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10911.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10912.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10913.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10914.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10915.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10916.jpg'
        ,'http://pic2.sc.chinaz.com/files/pic/pic9/201903/bpic10917.jpg'];
    let idx=0,count=0,$progress=$('.progress');

    $.each(pics,function(i,src){
        let imgObj=new Image();
        $(imgObj).on('load',function(){
            count++;
            $progress.html(Math.round(count/pics.length*100) +'%');
            if(count===pics.length){
                $('.loading').hide();//加载完成.隐藏进度条
            }
        });
        imgObj.src=src;//
    });
    $('.btn').on('click',function(event){
        //console.log($(this).data('control'));
        //console.log(event.target.id);
        //console.log(this.id);
        event.preventDefault();
        if(this.id==='prev')    idx=Math.max(0,--idx);
        else    idx=Math.min(pics.length-1,++idx);
        $('#img').attr('src',pics[idx]);
    });



};