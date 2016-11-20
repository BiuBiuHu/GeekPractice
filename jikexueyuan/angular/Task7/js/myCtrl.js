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
.controller('userCtrl',function($scope,Data){ //依赖注入
	$scope.user = {
		isShowImg:true,
		showIcon:true,
		uname:'',
		psw:'',
		zw:'2',
		sex:'0',
		icon:'img/wo.jpg',
		aihao:[1,2]
	};
	$scope.isChecked = function(n){
		var isok = false;
		for(var i = 0;i<$scope.user.aihao.length ; i++){
			if(n == $scope.user.aihao[i]){
				isok = true;
				break;
			}
		}
		return isok;
	};
	$scope.regiest = function(user){
		console.log(user);
	}
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