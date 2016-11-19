$(document).ready(function(){
    //鼠标进入更多产品的效果
    $("#more-porducts").mouseenter(function(e){
        e.stopPropagation();
        e.preventDefault();
        var display = $("#product-box").css("display");
        if(display == "none"){
            $("#product-box").show();
        }
    });
    //鼠标移出侧边栏的效果
    $("#product-box").mouseleave(function(){
        var display = $("#product-box").css("display");
        if(display != "none"){
            $("#product-box").hide();
        }
    });
    //鼠标进入顶部设置的效果
    $("#settings").hover(function(e){
        e.stopPropagation();
        e.preventDefault();
        var display = $("#hover-box").css("display");
        if(display == "none"){
            $("#hover-box").show();
        }
    });
    //鼠标离开顶部设置的效果
    $("div.head-list").mouseleave(function(e){
        var display = $("#hover-box").css("display");
        if(display != "none"){
            $("#hover-box").hide();
        }
    });

    //鼠标离开高级设置的效果
    $("#hover-box").mouseleave(function(){
        var display = $("#hover-box").css("display");
        if(display != "none"){
            $("#hover-box").hide();
        }
    });
    //制作输入框获取焦点时的效果
    $("input.search-box").focusin(function(){
       $("span.search-box-wrap").addClass("focueInput");
    });
    $("input.search-box").focusout(function(){
        $("span.search-box-wrap").removeClass("focueInput");
    });
    //鼠标放上去的时候
    $("input#baiduSerchBtn").mouseenter(function(){
        $("input#baiduSerchBtn").css("background","#317ef3");
    });

    //鼠标离开搜索按钮的时候
    $("input#baiduSerchBtn").mouseleave(function(){
        $("input#baiduSerchBtn").css("background","#3385ff");
    });


    //两部分构成了登陆用户信息的切换 ，这里是第一部分
    $("span.user-name").hover(function(){
        $("div#s_user_name_menu").show();
    },function(){
        $("div#s_user_name_menu").hide();
    });
    //接上面，这里是第二部分
    $("#s_user_name_menu").hover(function(){
        $("div#s_user_name_menu").show();
    },function(){
        $("div#s_user_name_menu").hide();
    });
    //tab切换
    $("#s_menu_mine").click(function(){
        $("#s_content_100").show();
        $("#s_content_1").hide();
        $("#s_xmancard_mine").show();
        $("#s_xmancard_nav").hide();
        $("#s_xmancard_shopping").hide();
    });
    //tab切换
    $("#daohang").click(function(){
        $("#s_content_100").hide();
        $("#s_content_1").show();
        $("#s_xmancard_mine").hide();
        $("#s_xmancard_nav").show();
        $("#s_xmancard_shopping").hide();
    });
    //点击换肤按钮出现弹框
    $("a.s-skin").click(function(e){
        //这里的两个禁止默认属性，用于阻止冒泡，使点击外围，弹框小时得以实现
        e.stopPropagation();
        e.preventDefault();
        $("div#s_skin_layer").animate({"top":"0"},"slow");
    });

    $("div#s_skin_layer").click(function(e){
        e.stopPropagation();
    });
    //点击外围，弹框消失
    $("div.wrapper").click(function(){
        $("div#s_skin_layer").animate({"top":"-500px"},"slow");
    });

    //固定更换后的壁纸
    var backgroundUrl = localStorage.backgroundUrl;
    if(backgroundUrl){
        $("div.s-skin-container").css({
            "background":"url("+backgroundUrl+")" + "no-repeat",
            "background-size":"100% 100%"
        });
        $("#s_skin_preview_skin").attr("src",backgroundUrl);
    }

    //更换壁纸的语言窗口效果
    var oldSrc = $("#s_skin_preview_skin").attr("src");
    $("li.skin-img-item").hover(function(){
        var url = $(this).find("img").attr("src");
        $("#s_skin_preview_skin").attr("src",url);
    },function(){
        console.log(oldSrc);
        $("#s_skin_preview_skin").attr("src",oldSrc);
    });

    //更换壁纸效果
    $("li.skin-img-item").click(function(){
        oldSrc = $(this).find("img").attr("src");
        url = oldSrc.replace("skin_plus","skin");
        //设置背景
        $("div.s-skin-container").css({
            "background":"url("+url+")" + "no-repeat",
            "background-size":"100% 100%"
        });
        //设置壁纸窗口预览效果
        $("#s_skin_preview_skin").attr("src",oldSrc);
        //将壁纸信息存储在localStorge中
        localStorage.backgroundUrl = url;
    });
    //显示天气信息
    var timeOut;
    $("div.s-weather-wrapper").hover(function(){
        timeOut = setTimeout(function(){
            $("div#s_mod_setweather").show();
        },1000);
    },function(){
        clearTimeout(timeOut);
        $("div#s_mod_setweather").hide();
    });

    //用jsonp获取天气信息
    var city = "beijing";
    function getWeather(city){
        var ts = new Date().getTime();
        var str = "ts="+ts+"&ttl=30&uid=U75028BE2C";
        var key = "hgcdryz9i2oaeqa4";
        var result = CryptoJS.HmacSHA1(str,key);
        var signature = result.toString(CryptoJS.enc.Base64);
        signature = encodeURI(signature);
        // var url = "https://api.thinkpage.cn/v3/weather/now.json?location="+ city +"&"+str+"&sig="+signature+"&callback=showWeather";
        var url = "https://api.thinkpage.cn/v3/weather/now.json?location="+ city +"&"+str+"&sig="+signature;

        $.ajax({
            type: "get",
            async: false,
            cache: true,
            url: url,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback:"showWeather",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
            success: function(json){
               var city = json.results[0].location.name;
               var temperature = json.results[0].now.temperature;
               var text = json.results[0].now.text;
               $("em.show-city-name").text(city);
               $("em.show-icon-temp").text(temperature+"℃")

            },
            error: function(){
                alert('fail');
            }
        });
    }
    var askWeather = "";
    //每10秒请求一次数据
    clearInterval(askWeather);
    askWeather = setInterval(function(){
        getWeather(city);
    },15000);
    
    getWeather(city);
     
});