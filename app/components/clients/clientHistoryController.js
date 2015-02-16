client.controller('clientHistoryController', function($scope, ClientService) {
  $scope.athleteLoaded = false;
  $scope.$on('client.selectedClient', function (e, selectedClient){
  	console.log('selectedClient = ' + selectedClient);
  	if (selectedClient.length > 0)
  		$scope.athleteLoaded = false;
  	else
  		$scope.athleteLoaded = true;
   	
  	console.log('$scope.athleteLoaded = ' + $scope.athleteLoaded);
  });

  $scope.doPopup = function(theString) {
  	alert(theString);
  };
});