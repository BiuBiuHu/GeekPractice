/**
 * Created by BiuBiu_Jiao on 2016/9/30.
 */
//加载
window.onload = function(){
    //获取dom元素
    var $id = function(id){
        return document.getElementById(id);
    };
    var caculater = $id("caculater");
    var rank = 0;
    var result = "";
    //添加绑定事件
    caculater.onclick = function(){
        var score = $id("value").value;
        score = parseInt(score,10);
        switch (true){
            case score >= 90 && score <= 100:
                rank = 1;
                break;
            case score >= 80 && score < 90:
                rank = 2;
                break;
            case score >= 70 && score < 80:
                rank = 3;
                break;
            case score >= 60 && score < 70:
                rank = 4;
                break;
            case score >= 50 && score < 60:
                rank = 5;
                break;
            case score >= 40 && score < 50:
                rank = 6;
                break;
            case score >= 30 && score < 40:
                rank = 7;
                break;
            case score >= 20 && score < 30:
                rank = 8;
                break;
            case score >= 10 && score < 20:
                rank = 9;
                break;
            case score >=  0 && score < 10:
                rank = 10;
                break;
            default:
                result = "请输入0-100之间的整数!";
                $id("showResult").innerHTML = result;
                return;
        }
        //回显结果
        result = "该学生的等级为：" + rank;
        $id("showResult").innerHTML = result;
    }

};