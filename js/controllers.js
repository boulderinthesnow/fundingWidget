app.controller('FundController', ["$scope", function($scope){

	// starting contribution amount	
	var total = 0

	// starting amount needed
	$scope.remaining = 500

	// when a real number value is entered into $scope.donation,
	// this function adds money to the total donation amount,
	// updates the progress bar percentage complete,
	// updates the funding amount remaining,
	// and clears donation input field
	$scope.addMoney = function () {
		if (parseInt($scope.donation)) {     
			total += parseInt($scope.donation)
			$scope.remaining -= parseInt($scope.donation)
			$scope.donation = null;
			var percentDone = (total / 500) * 100
			$("#progress-bar").css("width",percentDone+"%")
		}
	}

	//this function makes the tool-tip-container visible
	$scope.progressBarHoverOn = function () {
		$('#tool-tip-container').css('opacity','1')
	}
	//this function makes the tool-tip-container invisible
	$scope.progressBarHoverOff = function () {
		$('#tool-tip-container').css('opacity','0')
	}

	//this event handler loads a new webpage in a new window
	$("#friends-button").click(function () {
		window.open('http://www.auction.com/')
	})


}]) // END CONTROLLER