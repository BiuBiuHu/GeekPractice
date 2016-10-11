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
    $("#settings").mouseenter(function(e){
        e.stopPropagation();
        e.preventDefault();
        var display = $("#hover-box").css("display");
        if(display == "none"){
            $("#hover-box").show();
        }
    });
    //鼠标离开高级设置的效果
    $("#hover-box").mouseleave(function(){
        var display = $("#hover-box").css("display");
        if(display != "none"){
            $("#hover-box").hide();
        }
    });

});