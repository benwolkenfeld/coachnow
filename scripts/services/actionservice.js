angular.module('coachNow.actionservice', [])
.factory('actionService', function($http) {

  // pulls actions from the actions service for display
  // on main page in the task view
  // Ben Wolkenfeld, 1/7/15
  return {
    actions: function(actionUrl) {
      return $http.get(actionUrl).then(function(result) {
        return result.data;
      });
    }
  }

  var testVal = '';

  this.setTestVal = function(theVal) {
    testVal = theVal;
  };
});
