(function() {

	var app = angular.module('myApp');
	app.controller('SettingController', ['$scope', '$rootScope', '$timeout', 'SettingService',
		function($scope, $rootScope, $timeout, SettingService) {
		
			$scope.languages = [
				"English",
				"日本語"
			];

			var lang = SettingService.get('language') || $scope.languages[0];
			$scope.language = lang;

			$scope.$watch('language', function(language){
				
				if(language){
					console.log('lang');
					SettingService.set('language', language);
					$rootScope.$broadcast('language:changed', language);	
				}
			});
		}
	]);
})();