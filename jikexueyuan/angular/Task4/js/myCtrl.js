angular.module('app',[])
.controller('firstCtrl',function($scope){ //依赖注入
	$scope.msg = "";
	$scope.user = {uname:'',pwd:''};
	$scope.errormsg = "";
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