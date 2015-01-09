var actionSvc = angular.module('coachNow.actionservice', []);

actionSvc.factory('ActionService', function($http) {
  var allTasks = [];

  // pulls actions from the actions service for display
  // on main page in the task view
  // Ben Wolkenfeld, 1/7/15
  return {
    actions: function(actionUrl) {
      return $http.get(actionUrl).then(function(result) {
        allTasks = result.data;     // store it in the service
        return result.data;        // return it to the controller that called the service
      });
    },

    addTask: function(theTask) {
      //allTasks = theTasks;
      allTasks.push(theTask);
      console.log('in factory');
      console.log('setTasks - a big number = ' + allTasks.length);
    },

    refreshTasks: function() {
      return allTasks;
    }
  }
});
