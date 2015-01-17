var app = angular.module('coachNow', [
  'ngRoute',
  'ui.bootstrap',
  'coachNow.actionservice',
  'coachNow.actionview'
  ]);

//var homeUrl = "http://10.37.129.2/~benwolkenfeld/CoachNow/";  // for testing in IE on parallels
//var homeUrl = "http://localhost/~benwolkenfeld/CoachNow/";
//var homeUrl = 'http://benwolkenfeld.github.io/coachnow/';
//var homeUrl = window.location;

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/actions', {
      templateUrl: 'app/components/actions/actionView.html'
    })
    .otherwise({
      redirectTo: '/actions'
    });
}]);
