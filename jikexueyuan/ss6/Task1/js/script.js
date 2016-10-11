/**
 * Created by BiuBiu_Jiao on 2016/10/3.
 */
//获取ID
var $id = function(id){
    return document.getElementById(id);
};

//获取标签内容
var $tagName = function(name){
    return document.getElementsByTagName(name);
};

//获取输入内容
var getInput = function(id){
    var inputValue = document.getElementById(id);
    return inputValue.innerHTML;
};

//计算核心
function caculator(a , b ,op){
    var result;
    a = parseFloat(a , 10);
    b = parseFloat(b , 10);
    switch (op){
        case "+":
            result = a+b;
            break;
        case "-":
            result = a-b;
            break;
        case "x":
            result = a*b;
            break;
        case "÷":
            if(b == 0){
                alert("被除数不可以为0！")
                result = "";
                break;
            }
            result = a/b;
            break;
        case "sin":
            result = Math.sin((b/180)*Math.PI);
            break;
        case "cos":
            result = Math.cos((b/180)*Math.PI);
            break;
        default :
            break;
    };
    return result;
}
//表达式分析模块
var strAnalyse = function(str){
    if(str == ""){
        return [];
    }
    var opArray = ["+","-","x","÷"]
    var strTemp = "";
    var flag = "";
    for(var index in opArray){
        var op = opArray[index];
        flag = str.indexOf(op);
        if(flag >= 0){
            strTemp = str.split(op);
            strTemp.push(op);
            return strTemp;
        }
    }
    if(flag == -1){
        return [];
    }

};
//获得运算结果
var getResult = function(value,trangel,inputArray,topScreen,btScreen){
    var ca = [];
    var result;

    var valStr = inputArray.join("");
    ca = strAnalyse(valStr);

    inputArray = [];
    if(ca.length == 3){
        topScreen.innerHTML = valStr;
        result = caculator(ca[0],ca[1],ca[2]);
        if(result != ""){
            result = result.toFixed(6);
            result = parseFloat(result,10);
            btScreen.innerHTML = result;
        }
    }else if(trangel == "sin" || trangel == "cos"){
        result = caculator("",valStr,trangel);
        result = result.toFixed(6);
        result = parseFloat(result,10);
    }
    inputArray.push(result);
    return inputArray;
};

//判断输入
var judgeSingle = function(value){
    if(value == "x" || value == "÷" || value == "+" || value == "-"){
        return true;
    }else{
        return false;
    }
};

window.onload = function(e){
    var result = "";
    var trangel = "";
    var inputArray = [];
    var topScreen = $id("topScreen");
    var btScreen = $id("bottomScreen");
    var array = $tagName("button");
    //绑定点击事件
    for(var node in array){
        array[node].onclick = function(){
            var value = this.innerHTML;

            //处理不同的绑定逻辑
            switch (value){
                case "C":
                    inputArray.pop();
                    if(inputArray.length == 0){
                        btScreen.innerHTML = "";
                    }
                    break;
                case "=":
                    inputArray = getResult(value,trangel,inputArray,topScreen,btScreen);
                    break;
                case "sin":
                    trangel = "sin";
                    btScreen.innerHTML = "";
                    inputArray.length = 0;
                    topScreen.innerHTML = value;
                    break;
                case "cos":
                    trangel = "cos";
                    btScreen.innerHTML = "";
                    inputArray.length = 0;
                    topScreen.innerHTML = value;
                    break;
                default :
                    if(judgeSingle(value)){
                        if(inputArray.length == 0){
                            inputArray.length = 0;
                            break;
                        }
                        //如果在已经有成形表达式后，输入符号，直接计算结果
                        if(inputArray.length == 3 || trangel == 'sin' || trangel == 'cos'){
                            if(inputArray[inputArray.length-2] == '.'){
                                console.log(value)
                                inputArray.push(value);
                                break;
                            }
                            inputArray = getResult(value,trangel,inputArray,topScreen,btScreen);
                            if(inputArray.length){
                                trangel = "";
                            }
                            break;
                        }
                        //针对连续输入符号做处理
                        var nextOpr = inputArray[inputArray.length - 1];
                        if(judgeSingle(nextOpr)){
                            break;
                        }
                    }
                    inputArray.push(value);

            };
            if(inputArray.length != 0){
                btScreen.innerHTML = inputArray.join("");
            };
        };
    };
};