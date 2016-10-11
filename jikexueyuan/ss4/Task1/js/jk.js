/**
 * Created by BiuBiu_Jiao on 2016/9/20.
 */
$(document).ready(function(e){
    $("#search-btn").click(function(e){
        $("#searchbox").addClass("scale")
    });
    $("#close-btn").click(function(e){
        $("#searchbox").removeClass("scale")
    })
});