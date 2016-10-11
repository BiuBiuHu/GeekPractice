/**
 * Created by BiuBiu_Jiao on 2016/9/30.
 */
var array = ["a","x","b","d","m","a","k","m","p","j","a"];
var object = {};
for(var a in array){
    var b = array[a];
    if(object[b] === undefined){
        object[b] = 1;
    }else{
        object[array[a]] = parseInt(object[array[a]],10) +1;
    }
}
//问题中的代码
//for(var a in array){
//    var b = array[a];
//    if(object.b === undefined){
//        object.b = 1;
//    }else{
//        object[array[a]] = parseInt(object[array[a]],10) +1;
//    }
//}
//查看对象
console.log(object)
var max = "";
var maxValue = "";
for(var c in object){
    if(max != ""){
        if(object[c] > maxValue){
            maxValue = object[c];
            max = c;
        }
    }else{
        maxValue = object[c];
        max = c;
    }
}
//求取最大值，以及键值, 出现最多的字母并给出个数和每一个所在的顺序
console.log("max",max,"maxValue",maxValue);

for(var i = 0, length = array.length ; i < length ; i++){
    if(array[i] == max){
        console.log(max,"在数组中出现的位置",i);
    }
}
