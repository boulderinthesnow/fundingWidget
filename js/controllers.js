app.controller('FundController', ["$scope", function($scope){

	// starting contribution amount	
	$scope.total = 0

	// this function adds money to the total donation amount,
	// modifies progress bar,
	// and clears donation input field
	$scope.addMoney = function () {
		$scope.total += parseInt($scope.donation)
		$scope.donation = undefined;
		var percentDone = ($scope.total / 500) * 100
		$("#progress-bar").css("width",percentDone+"%")
	}


}]) // END CONTROLLER