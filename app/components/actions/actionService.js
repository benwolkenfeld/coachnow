var actionSvc = angular.module('coachNow.actionservice', []);

actionSvc.factory('ActionService', function($http) {
  var allTasks = [];


  // pulls actions from the actions service for display
  // on main page in the task view
  // Ben Wolkenfeld, 1/7/15
  return {
    getTasks: function(actionUrl) {
      return $http.get(actionUrl).then(function(result) {
        allTasks = result.data;     // store it in the service
        return result.data;        // return it to the controller that called the service
      });
    },

    addTask: function(theTask) {
      allTasks.push(theTask);
      console.log('in factory');
      console.log('setTasks - a big number = ' + allTasks.length);
    },

    refreshTasks: function() {
      return allTasks;
    },

    markTaskComplete: function(theTask) {
      // find the task in the array of tasks and update:
      //    taskStatus, taskCompleteDateTime, taskDue
      for (var i = 0; i< allTasks.length; i++) {
        if (allTasks[i].taskId == theTask.taskId) {
          allTasks[i].taskStatus = 'complete';
          allTasks[i].taskCompleteDateTime = theTask.taskCompleteDateTime;
          allTasks[i].taskDue = 'complete';
          break;
        }
      }
    },

    findTaskById: function(taskId) {
      for(var i = 0; i < allTasks.length; i++) {
        if (allTasks[i].taskId == taskId) {
          return allTasks[i];
        }
      }
    },

    // used on actions page - coach performance chart
    chartRefreshCoachPerformance: function(actionUrl) {
      return $http.get(actionUrl).then(function(result) {
        allTasks = result.data;     // store it in the service
                                    // to do item - rewire all $http calls to lean rest services
        var numSkipped = 0,
            numCompleted = 0,
            numRescheduled = 0;

        for(var i = 0; i < allTasks.length; i++) {
          switch (result.data[i].taskStatus) {
            case 'complete':
              numCompleted++;
              break;
            case 'rescheduled':
              numRescheduled++;
              break;
            case 'skipped':
              numSkipped++;
              break;
          }
        }

        // assemble the data for the chart
        var chartData = [
          {
            value: numCompleted,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Completed"
          },
          {
            value: numRescheduled,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Rescheduled"
          },
          {
            value: numSkipped,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Skipped"
          }
        ];

        return chartData;
      })
    }
  }
});

// value: 300,
// color:"#F7464A",
// highlight: "#FF5A5E",
// label: "Red"
// },
// {
//   value: 50,
//   color: "#46BFBD",
//   highlight: "#5AD3D1",
//   label: "Green"
// },
// {
//   value: 100,
//   color: "#FDB45C",
//   highlight: "#FFC870",
//   label: "Yellow"

// {
//   "taskId": 1,
//   "taskTitle": "30-day phone call due",
//   "taskDueDate": "2015-01-02T12:00-06:00",
//   "taskDue":"today",
//   "taskStatus":"incomplete",
//   "taskCompleteDateTime": "",
//   "lastContactDateTime": "2015-01-02T10:00-06:00",
//   "lastContactTitle": "Coaching session",
//   "clientId": 100,
//   "clientFullName": "Ben Wolkenfeld",
//   "clientImage": "img/ben_wolkenfeld.jpg",
//   "clientSpecialty": "Cycling",
//   "clientFee": 150,
//   "clientPaymentStatus": "Current",
//   "actionsAvailable": ["complete","reschedule","skip"]
// }
