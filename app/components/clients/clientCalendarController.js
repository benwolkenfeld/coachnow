client.controller('clientCalendarController', function($scope, ClientService) {
  
  $scope.athleteLoaded = false;

  $scope.doPopup = function(theString) {
  	alert(theString);
  };
});