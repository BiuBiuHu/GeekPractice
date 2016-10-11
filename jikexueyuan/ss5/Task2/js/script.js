/**
 * Created by BiuBiu_Jiao on 2016/10/1.
 */
function caculator(a , b ,op){
    var result;
    switch (op){
        case "+":
            console.log("加法运算\r\n");
            result = a+b;
            break;
        case "加":
            console.log("加法运算\r\n");
            result = a+b;
            op = "+";
            break;
        case "-":
            console.log("减法运算\r\n");
            result = a-b;
            break;
        case "减":
            console.log("减法运算\r\n");
            result = a-b;
            op = "-";
            break;
        case "*":
            console.log("乘法运算\r\n");
            result = a*b;
            break;
        case "乘":
            console.log("乘法运算\r\n");
            result = a*b;
            op = "*";
            break;
        case "/":
            console.log("除法运算\r\n");
            if(b == 0){
                console.log("被除数不能为 0 哟！");
                result = "Error";
                break;
            }
            result = a/b;
            break;
        case "除":
            console.log("除法运算\r\n");
            if(b == 0){
                console.log("被除数不能为 0 哟！");
                result = "Error";
                op = "/";
                break;
            }
            result = a/b;
            op = "/";
            break;
        default :
            console.log("只支持加减乘除运算，您输入的操作无效。")
    }
    console.log(a+ op +b + " = " + result);
    console.log("……………………")
}
//运算执行
caculator(1,5,"+");
caculator(10,5,"-");
caculator(1,5,"*");
caculator(1,5,"/");
caculator(1,0,"/");
//特殊运算符处理
caculator(1,5,"加");
caculator(10,5,"减");
caculator(1,5,"乘");
caculator(1,5,"除");
caculator(1,0,"除");