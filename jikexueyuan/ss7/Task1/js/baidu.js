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

        //鼠标离开的时候
    $("input#baiduSerchBtn").mouseleave(function(){
        $("input#baiduSerchBtn").css("background","#3385ff");
    });
});