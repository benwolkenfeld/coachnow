client.controller('clientCalendarController', function($scope, ClientService) {
  
  $scope.athleteLoaded = false;

  $scope.$on('client.selectedClient', function (e, selectedClient){
  	if (selectedClient.length > 0)
  		$scope.athleteLoaded = false;
  	else
  		$scope.athleteLoaded = true;
   	
  	var theClient = ClientService.getSelectedClient(selectedClient);
  	$scope.clientCalendarNext30Days = theClient.clientCalendarNext30Days;
  });
});