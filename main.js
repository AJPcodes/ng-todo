//initialize app
var app = angular.module('TodoApp',[])

//make a controller
//$scope adds variables to the DOM
app.controller('TodoCtrl', function($scope){
	$scope.title = "Welcome to your Angular Todo App";
})

app.controller("PastaCtrl", function($scope){
	$scope.pasta = "Linguini";
	$scope.foods="";
})