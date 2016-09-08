angular.module('fireApp')
.controller('HomeCtrl', function($scope, FibonacciSvc) {
	$scope.fibonacciSequence = [];
	$scope.printFibonacci = function() {
		for(var i = 2; i <= 15; i++) {
			var num = FibonacciSvc.looping(i)
			console.info("Fibonacci: ", num)
			$scope.fibonacciSequence.push(num)
		}
	}
})