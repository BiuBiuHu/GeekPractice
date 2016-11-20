angular.module('app',[])
.controller('addCtrl',function($scope){ //依赖注入
	$scope.list = [{
		id:1,
		address:"莲花小区14栋2层"
	},{
		id:2,
		address:"长城小区14栋2层"
	},{
		id:3,
		address:"广夏小区14栋2层"
	},{
		id:4,
		address:"菲菲小区14栋2层"
	}]
})
