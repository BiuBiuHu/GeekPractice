/**
 * Created by BiuBiu_Jiao on 2016/9/20.
 */

define(function(require, exports, module) {

    // 通过 require 引入依赖
    require('./jquery');
    // 或者通过 module.exports 提供整个接口
    module.exports = function(){
        $(document).ready(function(e){

            $("#search-btn").click(function(e){
                $("#searchbox").addClass("scale")
            });

            $("#close-btn").click(function(e){
                $("#searchbox").removeClass("scale");
            });

            $("li.list-icon").click(function(){
                $("#changeid").addClass("lesson-list2");
                $("#changeid").removeClass("lesson-list");
                var array = $("div.lesson-infor p");
                $.each(array,function(index){
                    $(array[index]).css({
                        "display":"block",
                        "height":"36px",
                        "opacity":"0"
                    });
                });
                $(".learn-number").css({"display":"block"});
                $(".lessonicon-box").hide();
            });

            $("li.kuai-icon").click(function(){
                $("#changeid").addClass("lesson-list");
                $("#changeid").removeClass("lesson-list2");
                var array = $("div.lesson-infor p");
                $.each(array,function(index,obj){
                    $(array[index]).css({
                        "display":"none",
                        "height":"36px",
                        "opacity":"0"
                    });
                });
                $(".learn-number").css({"display":"none"});
                $(".lessonicon-box").show();
            });
            //动画效果，这部分做起来比较难，因为要考虑各个元素显示先后顺序的配合。
            //而且有display，也有opacity两种情况，需要对不同的情况做区分
            //后来考虑的方法是，使用fadeIn、FadeIn、fadeOut、animate相互结合的方法
            //其实用css3做，加keyframe也不错呢

            $("ul.cf li").each(function(i,obj){
                $(obj).hover(function(){
                    $(this).find("i.lesson-shoucang").fadeIn();
                    $(this).find("div.lessonplay").fadeTo("150","1");
                    if(!$("#changeid").hasClass("lesson-list2")){
                        $(this).find(".lesson-infor").animate({height:"175px"},250);
                        $(this).find(".learn-number").css("display","block");
                        $(this).find(".zhongji").css("display","block");

                        $(this).find(".lesson-infor p").css({
                            height:"52px",
                            opacity:"1",
                            display:"block"
                        });

                        $(this).find(".lessonicon-box").css("bottom","-2px");
                    }



                },function(){
                    $(this).find("i.lesson-shoucang").fadeOut();
                    $(this).find("div.lessonplay").fadeTo("150","0");
                    if(!$("#changeid").hasClass("lesson-list2")){
                        //return false;

                        $(this).find(".lesson-infor").animate({height:"88px"},350);
                        $(this).find(".learn-number").css("display","none");
                        $(this).find(".zhongji").css("display","none");

                        $(this).find(".lesson-infor p").animate({
                            "height":"0",
                            "opacity":"0"
                        },250);

                        $(this).find(".lessonicon-box").css("bottom","-2px");
                    }


                });
            });


        });
    };

});