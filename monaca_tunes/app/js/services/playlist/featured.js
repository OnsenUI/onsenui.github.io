(function() {
	var myApp = angular.module('myApp');

	myApp.factory('Featured', function(BasePlaylist) {

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
					$.ajax({
						url: 'http://api.jamendo.com/v3.0/tracks/?client_id=615ea00d&featured=1&include=stats&lang=en&offset=' + this.skip + '&limit=' + this.perPage,
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