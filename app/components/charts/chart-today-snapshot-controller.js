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
        right: 20,
        bottom: 20,
        left: 100
      },
      transitionDuration: 250,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function(d, i){
          if (d==6)
          {
            return "Noon";
          }
          else if (d<6)
          {
            return (d+6)+":00am";
          }
          else
          {
            return (d-6)+":00pm";
          }
        }
      },
      tooltipContent: function (key, x, y, e, graph) {
        var parsedKey = key.split('..');
        return '<span style="padding: 5px;"><strong>' + parsedKey[0] + '</strong></span>' +
        '<span style="padding: 5px;">' + parsedKey[1] + '</span>'
      }
    }
  };

  $scope.data = [
  {
    "key": "Free..6:00am - 10:00am",
    "color": "#55B562",
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
    }]
  },
  {
    "key": "fillGap1",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
    },
    {
      "label" : "Training Session" ,
      "value" : 4
    },
    {
      "label" : "Phone Call" ,
      "value" : 4
    },
    {
      "label" : "Phone Call" ,
      "value" : 4
    }]
  },
  {
    "key": "Training Session..10:00am - 11:30am",
    "color": "#51C1DC",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
    } ,
    {
      "label" : "Training Session" ,
      "value" : 1.5
    } ,
    {
      "label" : "Phone Call" ,
      "value" : 0
    } ,
    {
      "label" : "Training Plan" ,
      "value" : 0
    }]
  },
  {
    "key": "FillGap2",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : 1.5
    } ,
    {
      "label" : "Training Session" ,
      "value" : 0
    } ,
    {
      "label" : "Phone Call" ,
      "value" : 1.5
    } ,
    {
      "label" : "Training Plan" ,
      "value" : 1.5
    }]
  },
  {
    "key": "Free..11:30am - 1:00pm",
    "color": "#55B562",
    "values": [
    {
      "label" : "Free" ,
      "value" : 1.5
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
    }]
  },
  {
    "key": "FillGap3",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
    } ,
    {
      "label" : "Training Session" ,
      "value" : 1.5
    } ,
    {
      "label" : "Phone Call" ,
      "value" : 1.5
    } ,
    {
      "label" : "Training Plan" ,
      "value" : 1.5
    }]
  },
  {
    "key": "Phone Call..1:00pm - 1:30pm - Call Ben regarding annual training plan",
    "color": "#F3AB58",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
    } ,
    {
      "label" : "Training Session" ,
      "value" : 0
    } ,
    {
      "label" : "Phone Call" ,
      "value" : .5
    } ,
    {
      "label" : "Training Plan" ,
      "value" : 0
    }]
  },
  {
    "key": "FillGap4",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : .5
    } ,
    {
      "label" : "Training Session" ,
      "value" : .5
    } ,
    {
      "label" : "Phone Call" ,
      "value" : 0
    } ,
    {
      "label" : "Training Plan" ,
      "value" : .5
    }]
  },
  {
    "key": "Free..1:30pm - 2:00pm",
    "color": "#55B562",
    "values": [
    {
      "label" : "Free" ,
      "value" : .5
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
    }]
  },
  {
    "key": "FillGap5",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
    } ,
    {
      "label" : "Training Session" ,
      "value" : .5
    } ,
    {
      "label" : "Phone Call" ,
      "value" : .5
    } ,
    {
      "label" : "Training Plan" ,
      "value" : .5
    }]
  },
  {
    "key": "Training Plan..2:00pm - 5:00pm",
    "color": "#DD5552",
    "values": [
    {
      "label" : "Free" ,
      "value" : 0
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
      "value" : 3
    }]
  },
  {
    "key": "FillGap6",
    "color": "none",
    "values": [
    {
      "label" : "Free" ,
      "value" : 3
    } ,
    {
      "label" : "Training Session" ,
      "value" : 3
    } ,
    {
      "label" : "Phone Call" ,
      "value" : 3
    } ,
    {
      "label" : "Training Plan" ,
      "value" : 0
    }]
  },
  {
    "key": "Free..5:00pm - 6:00pm",
    "color": "#55B562",
    "values": [
    {
      "label" : "Free" ,
      "value" : 1
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
    }]
  }]
});
