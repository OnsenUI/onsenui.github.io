(function(localStorage) {
	var myApp = angular.module('myApp');

	myApp.factory('LocalStorageArrayUtil', function() {

		var LocalStorageArrayUtil = Class.extend({
			init: function(keyName) {
				this.keyName = keyName;
			},

			getArray: function() {
				var array = JSON.parse(localStorage.getItem(this.keyName));
				if (!array) {
					array = [];
				}
				return array;
			},

			add: function(item) {
				var array = this.getArray();
				array.push(item);
				this.save(array);
			},

			remove: function(item, uniqueProperty) {
				var array = this.getArray();
				var other;
				for (var i = 0; i < array.length; i++) {
					other = array[i];
					if (item[uniqueProperty] === other[uniqueProperty]) {
						array.slice(i, 1);
						this.save(array);
						return;
					}
				}
			},

			addUnique: function(item, uniqueProperty) {
				var exist = this.exist(item, uniqueProperty);
				if (exist) {
					return;
				} else {
					this.add(item);
				}
			},

			exist: function(item, uniqueProperty) {
				var array = this.getArray();
				var arrayLength = array.length;
				var other;
				while (arrayLength--) {
					other = array[arrayLength];
					if (item[uniqueProperty] === other[uniqueProperty]) {
						return true;
					}
				}

				return false;
			},

			save: function(array) {
				localStorage.setItem(this.keyName, JSON.stringify(array));
			}
		});

		return LocalStorageArrayUtil;

	});
})(localStorage);