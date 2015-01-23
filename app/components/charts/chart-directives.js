var chartDir = angular.module('coachNow.chart-directives', ['coachNow.actionservice']);

chartDir.directive('coachnowChartDonut', function(ActionService) {
  return {
    restrict: 'A',
    scope: {
      chartName: '@',
      chartType: '@',   // can be pie chart or donut
      chartSubject: '@'
    },
    template: '<canvas id="{{chartName}}" chartType="{{chartType}}" chartData="{{chartSubject}}"></canvas>',
    link: function (scope, element, attrs) {

      // today Ben has been humbled by a simple solution provided by Kevin Krauss.
      // https://github.com/earlonrails.
      // WTF.  January 19, 2015
      var canvas = element.find('canvas')[0],
          context = canvas.getContext('2d'),
          chart = new Chart(context),
          doughnutData = [];

      // get the data for our chart from the service here
      ActionService.chartRefreshCoachPerformance('app/components/actions/actions.json').then(function(data) {
            doughnutData = data;
            chart.Doughnut(doughnutData,
            {
              responsive: true,
            });
      });
    }
  }
})
// scope items:
// - pie or donut (boolean)
// - data source
//    athlete activity (active athletes vs. inactive vs. dormant),
//    payment status (current, 30, 60, 90 days),
//    coach performance against actions (complete, rescheduled, or skipped)
//

// to do - add line chart, bar chart below
