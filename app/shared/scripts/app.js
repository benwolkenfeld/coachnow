var app = angular.module('coachNow', [
  'ngRoute',
  'ui.bootstrap',
  'coachNow.actionview',
  'coachNow.actionservice',
  'coachNow.client',
  'nvd3Charts.SnapshotChartController',
  'nvd3Charts.CoachPerformanceChartController'
  ]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/actions', {
      templateUrl: 'app/components/actions/actionView.html'
    })
    .when('/athletes',{
      templateUrl: 'app/components/clients/clientView.html'
    })
    .otherwise({
      redirectTo: '/actions'
    });
}]);
