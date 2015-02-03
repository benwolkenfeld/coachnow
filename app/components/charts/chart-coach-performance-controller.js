var app = angular.module('nvd3Charts.CoachPerformanceChartController', ['nvd3']);

app.controller('nvd3Charts.CoachPerformanceChartCtrl', function($scope) {
  $scope.options = {
    chart: {
      type: 'pieChart',
      height: 300,
      donut: true,
      donutRatio: .4,
      donutLabelsOutside: false,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: false,
      color: ['#51C1DC', '#F3AB58', '#F7464A'],
      pie: {
        startAngle: function(d) { return d.startAngle -Math.PI/2 },
        endAngle: function(d) { return d.endAngle -Math.PI/2 }
      },
      transitionDuration: 500,
      legend: {
        margin: {
          top: 5,
          right: 70,
          bottom: 0,
          left: 0
        }
      }
    }
  };

  $scope.data = [
    {
      key: "Complete",
      y: 5
    },
    {
      key: "Rescheduled",
      y: 2
    },
    {
      key: "Skipped",
      y: 3
    }
  ];
});
