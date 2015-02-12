var app = angular.module('coachNow', [
  'ngRoute',
  'ui.bootstrap',
  'coachNow.actionservice',
  'coachNow.actionview',
  'coachNow.athleteview',
  'nvd3Charts.SnapshotChartController',
  'nvd3Charts.CoachPerformanceChartController'
  ]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/actions', {
      templateUrl: 'app/components/actions/actionView.html'
    })
    .when('/athletes',{
      templateUrl: 'app/components/athletes/athleteView.html'
    })
    .otherwise({
      redirectTo: '/actions'
    });
}]);
