angular.module('app',[])
.value('relname','yue') 
.value('relname','song')  //value是可以改变的
.constant('http','www.baidu.com')
.constant('http','www.soho.com') //不可以改变
.factory('Data',function(){
	return {
		msg:'我来自一个msg'  //此时相当于一个公共的容器
	}
})
.service('User',function(){
	this.firstNmae = "上官";
	this.lastName = "飞燕";
	this.getName = function(){
		return this.firstNmae + this.lastName;
	}
})
.controller('firstCtrl',function($scope,Data){ //依赖注入
	$scope.data = Data;
})
.controller('secCtrl',function($scope,Data){
	$scope.data = Data;	
})

function dd(){
	this.msg = "上官";
	this.lastName = "飞燕";
	this.getName = function(){
		return this.firstNmae + this.lastName;
	}
	this.setMsg = function(){
		return this.msg = "飞燕"
	}
}