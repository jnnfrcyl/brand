angular.module('ngStyleGuide', ['ngRoute'])

	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html'
			})
			.when('/typography', {
				templateUrl: 'views/typography.html'
			})
			.when('/logo-corporate', {
				templateUrl: 'views/logos/logo-corporate.html'
			})
			.when('/logo-emx', {
				templateUrl: 'views/logos/logo-emx.html'
			})
			.when('/logo-other', {
				templateUrl: 'views/logos/logo-other.html'
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