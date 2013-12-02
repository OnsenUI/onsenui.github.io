/*
Copyright 2013 ASIAL CORPORATION, KRUY VANNA, HIROSHI SHIKATA

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/


(function() {
	'use strict';

	var directives = angular.module('onsen.directives'); // no [] -> referencing existing module

	directives.directive('onsListItem', function(ONSEN_CONSTANTS) {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			priority: 10,
			templateUrl: ONSEN_CONSTANTS.DIRECTIVE_TEMPLATE_URL + '/list_item.tpl',
			compile: function(elem, attrs, transcludeFn) {
				return function(scope, element, attrs) {
					transcludeFn(scope, function(clone) {
						element.append(clone);
					});
				};
			}
		};
	});
})();