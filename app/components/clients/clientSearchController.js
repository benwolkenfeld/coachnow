client.controller('clientSearchController', function($scope, $filter, ClientService) {
  
  // grab clients from the client service and 
  // store them in scope
  ClientService.getClients().then(function(data) {
    $scope.clients = data;
  });

  $scope.selectClient = function(selectedClient) {
  	ClientService.setSelectedClient(selectedClient);
  };

  $scope.doPopup = function(theString) {
  	alert(theString);
  };
});