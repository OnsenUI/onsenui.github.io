(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Featured', function(BasePlaylist, SettingService, LanguageService) {

		var FeaturedPlaylist = BasePlaylist.extend({
			getNextData: function() {
				var defer = $.Deferred();
				var that = this;
				if(this.tracks.length > 0){
					setTimeout(function(){
						// defer.resolve([]);
						defer.resolve(that.tracks);
					}, 0);
				}else{
					var language = SettingService.get('language');
					var isoLanguage = LanguageService.getISO(language);
					var url = 'http://api.jamendo.com/v3.0/tracks/?client_id=615ea00d&order=popularity_week&include=stats&offset=' + this.skip + '&limit=' + this.perPage + '&lang=' + isoLanguage;
					$.ajax({
						url: url,
						success: function(response) {
							defer.resolve(response.results);
						},
						error: function(e) {
							defer.reject(e);
						}
					});
				}
				
				return defer.promise();
			}
		});

		return FeaturedPlaylist;
	});
})();