/**
 * Created by BiuBiu_Jiao on 2016/10/5.
 */
window.onload = function(){

    //获取dom元素
    $id = function(id){
        return document.getElementById(id);
    };

    $class = function(className){
        return document.getElementsByClassName(className);
    };
    //设置背景颜色
    function setBackground(className,color){
        $class(className)[0].style.background = color;
    }
    //设置任意样式
    function setStyle(className,style,color){
        var classValue = $class(className);
        for(var i = 0, length = classValue.length; i < length ; i++){
            classValue[i].style[style] = color;
        }
    }
    //设置字体样式
    function setColor(className,color){
        var classValue = $class(className);
        for(var i = 0, length = classValue.length; i < length ; i++){
            classValue[i].style.color = color;
        }
    }

    function getCookie(name){
        var cookieName = name+"=";
        var cookieStart = document.cookie.indexOf(cookieName);
        var cookieValue = "";

        if(cookieStart>-1){
            var cookieEnd = document.cookie.indexOf(';',cookieStart);
            if(cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart + cookieName.length,cookieEnd);
        }

        return cookieValue;
    }


    //动态加载样式，并根据用户的选择决定选择哪种样式显示
    var bkcolorCookie = getCookie('color');
    var bkcolorlocalS = localStorage.style || "green";

    //如果cookie与localstorge中颜色相同，那么设置为相应的颜色，否则设置为默认的额绿色
    var bkcolor = "green";

    if(bkcolorCookie == bkcolorlocalS){
        bkcolor = bkcolorCookie;
    }

    $id('container').className = bkcolor;
    //颜色声明
    var grern = "rgb(10, 167, 112)";
    var red   = "rgb(225, 45, 109)";
    var qing  = "rgb(102, 249, 207)";
    var deepgreen = "rgb(20, 50, 74)";
    var fontColor = "";

    //添加点击事件
    var boxArray = $class("changeBox");
    for( var index in boxArray){
        boxArray[index].onclick = function(){

            var getColor = window.getComputedStyle(this);
            var bkColor = getColor.backgroundColor;
            var divBkColor = '';
            switch (bkColor){
                case "rgb(10, 167, 112)":
                    divBkColor = 'green';
                    fontColor = "#ff5500";
                    setColor('g_red',fontColor);
                    break;
                case "rgb(225, 45, 109)":
                    divBkColor = 'red';
                    fontColor = grern;
                    setColor('g_red',fontColor);
                    break;
                case "rgb(102, 249, 207)":
                    divBkColor = 'qing';
                    fontColor = red;
                    setColor('g_red',fontColor);
                    break;
                case "rgb(20, 50, 74)":
                    fontColor = "deepskyblue";
                    divBkColor = 'deepgreen';
                    setColor('g_red',fontColor);
                    break;
            }

            setBackground('active',bkColor);
            setStyle('menus','border-top-color',bkColor);
            $id('container').className = divBkColor;

            //设置cookie和localStorage
            localStorage.style = divBkColor;
            var date = new Date();
            date.setDate(date.getDate() + 7);
            document.cookie = "color="+ divBkColor +";expires="+date;
        }
    }




    //这部分的代码保留，因为不同的样式必定是写在不同的样式文件中，对于小型的问题，
    // 可以在一个样式文件中，写入不同皮肤的样式，但是对大型网站，必定是一个皮肤一种样式
    function loadStyle(url){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    //loadStyle('./css/'+bkcolor+'.css');
};