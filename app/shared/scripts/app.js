var app = angular.module('coachNow', [
  'ngRoute',
  'ui.bootstrap',
  'coachNow.actionservice',
  'coachNow.actionview',
  'nvd3Charts.SnapshotChartController',
  'nvd3Charts.CoachPerformanceChartController'
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
