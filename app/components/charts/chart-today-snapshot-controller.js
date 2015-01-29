var app = angular.module('nvd3Charts.SnapshotChartController', ['nvd3']);

app.controller('nvd3Charts.SnapshotChartCtrl', function($scope) {
  $scope.options = {
    chart: {
      type: 'multiBarHorizontalChart',
      height: 150,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: false,
      showValues: true,
      stacked: true,
      showLegend: false,
      margin:{
        top:20,
        right: 15,
        bottom: 20,
        left: 100
      },
      transitionDuration: 250,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function(d){
          return d3.format(',:00')(d+6);
        }
      }
    }
  };

  $scope.data = [
  {
    "key": "Series1",
    "color": "#1f77b4",
    "values": [
      {
        "label" : "Free" ,
        "value" : 4
      } ,
      {
        "label" : "Training Session" ,
        "value" : 0
      } ,
      {
        "label" : "Phone Call" ,
        "value" : 0
      } ,
      {
        "label" : "Training Plan" ,
        "value" : 0
      }
      ]
    },
    {
      "key": "gap 1",
      "color": "none",
      "values": [
        {
          "label" : "Free" ,
          "value" : 2
        } ,
        {
          "label" : "Training Session" ,
          "value" : 4
        } ,
        {
          "label" : "Phone Call" ,
          "value" : 5.5
        } ,
        {
          "label" : "Training Plan" ,
          "value" : 7.5
        }
      ]
    },
    {
      "key": "Series2",
      "color": "#1f77b4",
      "values": [
        {
          "label" : "Free" ,
          "value" : 1.5
        } ,
        {
          "label" : "Training Session" ,
          "value" : 1.5
        } ,
        {
          "label" : "Phone Call" ,
          "value" : .5
        } ,
        {
          "label" : "Training Plan" ,
          "value" : 1.5
        }
      ]
    },
    {
      "key": "gap 2",
      "color": "none",
      "values": [
        {
          "label" : "Free" ,
          "value" : 1.5
        } ,
        {
          "label" : "Training Session" ,
          "value" : 4
        } ,
        {
          "label" : "Phone Call" ,
          "value" : 0
        } ,
        {
          "label" : "Training Plan" ,
          "value" : 0
        }
        ]
      },
      {
      "key": "series 3",
      "color": "#1f77b4",
      "values": [
        {
          "label" : "Free" ,
          "value" : 3
        } ,
        {
          "label" : "Training Session" ,
          "value" : 0
        } ,
        {
          "label" : "Phone Call" ,
          "value" : .0
        } ,
        {
          "label" : "Training Plan" ,
          "value" : 0
        }
      ]
  }]
});
