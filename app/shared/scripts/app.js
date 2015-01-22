var app = angular.module('coachNow', [
  'ngRoute',
  'ui.bootstrap',
  'coachNow.actionservice',
  'coachNow.actionview',
  'coachNow.chart-directives'
  ]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/actions', {
      templateUrl: 'app/components/actions/actionView.html'
    })
    .otherwise({
      redirectTo: '/actions'
    });
}]);
