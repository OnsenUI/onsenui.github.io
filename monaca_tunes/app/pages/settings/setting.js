(function() {

	var app = angular.module('myApp');
	app.controller('SettingController', ['$scope', '$rootScope', '$timeout', 'SettingService',
		function($scope, $rootScope, $timeout, SettingService) {
			var lang = SettingService.get('language');
			$scope.language = lang;

			$scope.languages = [
				"English",
				"日本語"
			];

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