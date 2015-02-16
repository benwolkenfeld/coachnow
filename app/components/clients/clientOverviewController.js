client.controller('clientOverviewController', function($scope, ClientService) {
  
//  $scope.athleteLoaded = false;

  $scope.$on('client.selectedClient', function (e, selectedClient){
  	if (selectedClient.length > 0)
  		$scope.athleteLoaded = false;
  	else
  		$scope.athleteLoaded = true;
   	
  	$scope.clientDetails = ClientService.getSelectedClient(selectedClient);
  });
});