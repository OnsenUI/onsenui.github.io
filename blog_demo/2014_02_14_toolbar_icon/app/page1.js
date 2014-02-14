function Page1Controller($scope){

	// settimeout to simulate ajax request
	setTimeout(function() {
		var data = [{
			courseID: '0001',
			courseName: 'Programming Tech III'
		}, {
			courseID: '0002',
			courseName: 'Database'
		}];


		error = false; // change to true to see error message show

		if(!error){
			$scope.error = false;
			$scope.courses = data;
			$scope.$apply();	
		}else{
			$scope.courses = [];
			$scope.error = true;
			$scope.$apply();	
		}
		
	}, 0);


	// $.ajax({
	//     type: 'GET',
	//     url: '#myserverurlgoeshere',
	//     dataType: 'JSONp',
	//     timeout: 5000,
	//     success: function(data) {
	//			$scope.courses = data;
	//			$scope.$apply();
	//     },
	//     error: function(data) {
	//			$scope.error = true;
	//          $scope.$apply();
	//     }
	// });

}