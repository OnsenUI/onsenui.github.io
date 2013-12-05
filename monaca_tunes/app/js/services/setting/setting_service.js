(function(localStorage) {
	var myApp = angular.module('myApp');

	myApp.factory('SettingService', function() {

		var SettingService = Class.extend({
			init: function() {
				
			},
			
			set: function(key, value){
				this.save(key, value);
			},

			get: function(key){
				var value = localStorage.getItem(key);
				if(typeof value !== 'string'){
					value = JSON.parse(value);	
				}
				
				return value;
			},

			save: function(key, value) {
				if(typeof value !== 'string'){
					value = JSON.stringify(value);
				}
				localStorage.setItem(key, value);
			}
		});

		return new SettingService;

	});
})(localStorage);