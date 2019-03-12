window.onload=function ()
{
    $('#search-input').bind('keyup',function ()
    {
       var searchText=$('#search-input').val();
       info(searchText);//输入的数据上传服务处查询
    });
    /*将ajax封装到函数中*/
    function info(value){
        /*百度搜索框智能提示的接口*/
        var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
        /*需要传入的参数，cb是callback的缩写*/
        var data = {
            wd : value,
            cb : "helloword"
        }
        /*因为涉及跨域，这里使用jsonp*/
        $.ajax({
            url : url,
            data : data,
            type : "GET",
            dataType : "jsonp",
            jsonpCallback : "helloword",
            /*跨域成功的时候返回的数据*/
            success : function (result){
                /*返回成功之后可以在开发者工具里的Console打印看一下*/
                console.log(result.s);
                /*将获取的数据整理后返回到页面*/
                var a = result.s;
                var list = "";
                for(var i in a ){
                    var l = a[i];
                    list += "<li>"+l+"</li>";
                }
                $('#search-result').html(list);
                $("#search-suggest").show().css({
                    top:$("#search-form").offset().top+$("#search-form").height()+10,
                    left:$("#search-form").offset().left,
                    position:"absolute"
                });
            },
            /*跨域失败的时候返回的数据*/
            error : function(){
                console.log("error");
            }
        })
    }
    $(document).bind('click',function ()
    {
       $('#search-suggest').hide();
    });
    $('#search-result').on('click','li',function () {
       var keyword=$(this).text();
       location.href='http://cn.bing.com/search?q='+keyword;
    });
    $('#search-input-button').on('click',function () {
        var keytext=$('#search-input').val();
        location.href = 'http://cn.bing.com/search?q='+keytext;
    });
};