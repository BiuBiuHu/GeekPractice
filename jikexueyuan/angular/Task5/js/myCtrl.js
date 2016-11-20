angular.module('app',[])
.value('relname','yue') 
.value('relname','song')  //value是可以改变的
.constant('http','www.baidu.com')
.constant('http','www.soho.com') //不可以改变
.factory('Data',function(){
	// return {
	// 	msg: "你好啊",
	// 	setMsg : function(){
	// 		this.msg = "早上好";
	// 	}
	// }
	// 
	return new dd();
})
.service('User',function(){
	this.firstNmae = "上官";
	this.lastName = "飞燕";
	this.getName = function(){
		return this.firstNmae + this.lastName;
	}
})
.controller('firstCtrl',function($scope,relname,http,Data,User){ //依赖注入
	$scope.msg = "";
	$scope.user = {uname:'',pwd:''};
	$scope.errormsg = "";

	//服务的学习
	$scope.relname = relname;
	$scope.http = http;
	$scope.data = Data;
	Data.setMsg();

	$scope.username = User.getName();

	$scope.revers = function(){
		return $scope.msg.split("").reverse().join("");
	};
	$scope.login = function(){
		if($scope.user.uname == "admin"){
			alert("登陆成功");
		}else{
			$scope.errormsg = "用户名密码错误";
		}
	};
})
.controller('secCtrl',function($scope){
	$scope.msg = "hellow 极客学院";	
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