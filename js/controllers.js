app.controller('FundController', ["$scope", function($scope){

	// starting contribution amount	
	var total = 0;

	// starting contribution amount needed
	$scope.remaining = 500;

	// this function adds money to the total donation amount,
	// and updates the funding amount remaining
	var updateTotalAndRemaining = function () {
		total += parseInt($scope.donation);
		$scope.remaining -= parseInt($scope.donation);
	}; // END FUNCTION

	// when a real number value is entered into $scope.donation,
	// this function runs updateTotalAndRemaining(), 
	// updates the progress bar percentage complete,
	// and clears donation input field
	$scope.addMoney = function () {
		if (parseInt($scope.donation)) {     
			updateTotalAndRemaining();
			var percentDone = (total / 500) * 100;
			$("#progress-bar").css("width",percentDone+"%");
			$scope.donation = null;
		}; // END IF
	}; // END FUNCTION

	//this function makes the tool-tip-container visible
	$scope.progressBarHoverOn = function () {
		$('#tool-tip-container').css('opacity','1');
	}; // END FUNCTION

	//this function makes the tool-tip-container invisible
	$scope.progressBarHoverOff = function () {
		$('#tool-tip-container').css('opacity','0');
	}; // END FUNCTION

	//this event handler loads a new webpage in a new window
	$("#friends-button").click(function () {
		window.open('http://www.auction.com/');
	}); // END FUNCTION


}]) // END CONTROLLER