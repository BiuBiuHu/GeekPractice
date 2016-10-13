/**
 * Created by BiuBiu_Jiao on 2016/10/12.
 */
$(document).ready(function(){
    //判断图片是否加载完毕
    window.onload = function(){
        imgLocation();
        window.onscroll = function(){
            var box = $(".box");
            var dataImg = {
                "data":[
                    {"src":"1.jpg"},
                    {"src":"2.jpg"},
                    {"src":"3.jpg"},
                    {"src":"4.jpg"},
                    {"src":"5.jpg"},
                    {"src":"6.jpg"},
                    {"src":"7.jpg"},
                    {"src":"8.jpg"},
                    {"src":"9.jpg"}
                ]};
            var test = scrollGet();
            if(scrollGet()){
                $.each(dataImg.data, function (index,value){
                    var box = $("<div>").attr("class","box").appendTo($('div.container'));
                    var content = $("<div>").attr("class","content").appendTo(box);
                    var img = $("<img>").attr("src","img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation()
            }
        };
        window.onresize = function (){
            imgLocation();
        }
    }
});
//加载图片
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = parseInt($(window).width()/boxWidth,10);
    var boxArray = [];
    box.each(function(index,obj){
        var imgHeight = box.eq(index).height();
        var minHeight,minImgIndex;
        var initLeft = 0;
        if(index < num){
            boxArray.push(imgHeight);
            //动态计算初始化图片个数
            box.eq(index).css({
                position:"absolute",
                top: 0,
                left: index == 0 ? 0 : index*boxWidth
            });

        }else{
            minHeight = Math.min.apply(null,boxArray);
            minImgIndex = $.inArray(minHeight,boxArray);
            box.eq(index).css({
                position:"absolute",
                top: minHeight,
                left: box.eq(minImgIndex).position().left
            });
            boxArray[minImgIndex] += box.eq(index).height();
        }
    })
};
//检测滚动条
function scrollGet(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    var documentHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;
}

