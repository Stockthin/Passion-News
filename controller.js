var app = angular.module('mainApp', ['ngRoute']);

app.config(function($RouteProvider){
	$RouteProvider
	.when('/', {
		templateUrl: 'login.html'
	})
	.when('/dashboard', {
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl', function($scope, $location){
	$scope.submit = function(){
		var username = $scope.username;
		var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$location.path('/dashboard.html');
		}
	};
});