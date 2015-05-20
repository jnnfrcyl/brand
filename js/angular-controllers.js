angular.module('ngStyleGuide', ['ngRoute'])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html'
			})
			.when('/typography', {
				templateUrl: 'views/typography.html'
			})
			.when('/logos', {
				templateUrl: 'views/logos.html'
			})
			.when('/imagery', {
				templateUrl: 'views/imagery.html'
			})
			.when('/palettes', {
				templateUrl: 'views/palettes.html'
			})
			.when('/colors', {
				controller: 'ColorsController',
				templateUrl: 'views/colors.html'
			});
	})

	.controller('NavigationController', function ($scope, $location) {
		$scope.path = function () {
			return $location.path();
		};
	})

	.controller('ColorsController', function ($scope, $http) {
		$http.get('data/color-groups.json').success(function (data) {
			$scope.ColorGroups = data;
		});
	});