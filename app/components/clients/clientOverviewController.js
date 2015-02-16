client.controller('clientOverviewController', function($scope, ClientService) {
  
  $scope.athleteLoaded = false;

  $scope.doPopup = function(theString) {
  	alert(theString);
  };
});