(function(localStorage) {
	var myApp = angular.module('myApp');

	myApp.factory('LanguageService', function() {

		var LanguageService = Class.extend({
			init: function() {
				this.languages = {
					'日本語': 'ja',
					'English': 'en'
				}
			},

			getISO: function(language) {
				return this.languages[language];
			}
		});

		return new LanguageService;

	});
})(localStorage);