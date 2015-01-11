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
          allTasks[i].taskCompleteDateTime = theTask.taskCompleteDateTime.toISOString();
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
    }
  }
});

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
