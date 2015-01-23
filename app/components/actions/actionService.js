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
            color: "#5CB85C",
            highlight: "#60d660",
            label: "Completed"
          },
          {
            value: numRescheduled,
            color: "#4D5360",
            highlight: "#616774",
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
