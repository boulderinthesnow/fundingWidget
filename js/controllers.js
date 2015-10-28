app.controller('FundController', ["$scope", function($scope){

	// starting contribution amount	
	var total = 0

	// starting amount needed
	$scope.remaining = 500


	// this function adds money to the total donation amount,
	// modifies progress bar,
	// and clears donation input field
	$scope.addMoney = function () {
		if (parseInt($scope.donation)) {     
			total += parseInt($scope.donation)
			$scope.remaining -= parseInt($scope.donation)
			$scope.donation = undefined;
			var percentDone = (total / 500) * 100
			$("#progress-bar").css("width",percentDone+"%")
		}
	}

	$scope.progressBarHoverOn = function () {
		$('#tool-tip-container').css('opacity','1')
	}

	$scope.progressBarHoverOff = function () {
		$('#tool-tip-container').css('opacity','0')
	}

	$("#friends-button").click(function () {
		window.open('http://www.auction.com/')
	})


}]) // END CONTROLLER