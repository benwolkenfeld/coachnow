var app = angular.module('coachNow', ['ui.bootstrap', 'coachNow.actionservice']);
//var homeUrl = "http://10.37.129.2/~benwolkenfeld/CoachNow/";  // for testing in IE on parallels
var homeUrl = "http://localhost/~benwolkenfeld/CoachNow/";

// used for the action drop down on the Actions view panel
app.controller('dropdownTaskFilterCtrl', function($scope, $filter, ActionService) {

  // *************** BEGIN new task entry section ****************
  $scope.addTask = function () {

    // TO DO - replace with new task form entry (need rules)
    var newTask = {
      "taskId": 9,
      "taskTitle": "Ride your bike!",
      "taskDueDate": "2015-01-02T18:00-06:00",
      "taskDue":"later",
      "taskStatus":"incomplete",
      "taskCompleteDateTime": "",
      "lastContactDateTime": "2014-12-09T08:30-06:00",
      "lastContactTitle": "Time trial training ride",
      "clientId": 100,
      "clientFullName": "Ben Wolkenfeld",
      "clientImage": "img/ben_wolkenfeld.jpg",
      "clientSpecialty": "Cycling",
      "clientFee": 150,
      "clientPaymentStatus": "Current",
      "actionsAvailable": ["complete","reschedule","skip"]
    };
    ActionService.addTask(newTask);
    $scope.tasks = ActionService.refreshTasks();
  }


  // *************** BEGIN task data retrieval section ***************
  // grab open actions from the action service and store them in scope
  ActionService.getTasks(homeUrl + 'data/tasks.json').then(function(data) {
    $scope.tasks = data;
  });
  // *************** END task data retrieval section ***************

  // *************** BEGIN task label display logic section ***************
  $scope.getTaskStatusStyle = function(taskId) {
    if ($scope.getTaskDue(taskId) == 'yesterday') {
      return 'label-danger';
    } else if ($scope.getTaskDue(taskId) == 'today') {
      return 'label-warning';
    } else if ($scope.getTaskDue(taskId) == 'tomorrow') {
      return 'label-info';
    } else if ($scope.getTaskDue(taskId) == 'later') {
      return 'label-default';
    } else if ($scope.getTaskDue(taskId) == 'complete') {
      return 'label-success';
    }
  };

  $scope.getTaskDue = function(taskId) {
    return ActionService.findTaskById(taskId).taskDue;
  };
  // *************** END task label display logic section ***************

  // *************** BEGIN task completed display logic section ***************
  $scope.getCompletedInfo = function(taskId) {
    var taskComplete = ActionService.findTaskById(taskId);
    if (taskComplete.taskCompleteDateTime != '')
      return 'Completed on ' + $filter('date')(taskComplete.taskCompleteDateTime, 'short');
  }
  // *************** BEGIN task completed display logic section ***************

  // *************** BEGIN task drop down and filter section ***************
  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event, $scope) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  // list of filters here - can add more as needed
  var filter1 = {taskDue: 'yesterday'};
  var filter2 = {taskDue: 'today'};
  var filter3 = {taskDue: 'tomorrow'};
  var filter4 = {taskDue: 'later'};
  var filter5 = {taskDue: ''};

  $scope.setTaskFilter = function(filter) {
	  if(filter == '1'){
	  	$scope.taskFilter = filter1;
	  } else if (filter == '2'){
	  	$scope.taskFilter = filter2;
	  } else if (filter == '3'){
		$scope.taskFilter = filter3;
	  } else if (filter == '4'){
	  	$scope.taskFilter = filter4;
	  } else if (filter == '5') {
      $scope.taskFilter = filter5;
    }
  };
  // *************** end task drop down and filter section ***************

  $scope.getLastContactDate = function (lastContactEpic) {
    return new Date(lastContactEpic);
  }
});

// custom task filter - 1 of 3
app.filter('TasksDueToday', function () {
  return function (items) {
    var filtered = [];
    console.log("items.length = " + items.length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.taskDue == "today") {
        filtered.push(item);
      }
    }
    return filtered;
  }
});

// custom task filter - 2 of 3
app.filter('TasksDueTomorrow', function () {
  return function (items) {
    var filtered = [];
    console.log("items.length = " + items.length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.taskDue == "tomorrow") {
        filtered.push(item);
      }
    }
    return filtered;
  }
});

// custom task filter - 3 of 3
app.filter('TasksDueLater', function () {
  return function (items) {
    var filtered = [];
    console.log("items.length = " + items.length);
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.taskDue == "later") {
        filtered.push(item);
      }
    }
    return filtered;
  }
});

// used in the task list to manage the modal generated by the
// task action dropdown on each task row
// Ben Wolkenfeld, 1/4/2015 1:24 pm
app.controller('taskActionModalCtrl', function ($scope, $modal, $log, ActionService) {

  // ******************* begin drop down button section *******************
  // used for drop down button on each task action row
  $scope.status = {
    isopen: false
  };

  // ??? MYSTERY MAGIC ??? //
  // how does the dropdown-toggle directive map to this function??? //
  // Ben Wolkenfeld, 12/27/2014 //

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
  // ******************* end drop down button section *******************

  // ******************* begin modal dialog controller section *******************
  $scope.open = function (size, selectedForm, task) {
    var modalInstance = $modal.open({
      templateUrl: './modal-task-action-template.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        selectedForm: function () {
          return selectedForm;
        },
        task: function() {
          return task;
        }
      }
    });

    modalInstance.result.then(function () {

      // update a the task model with the selected action
      task = ActionService.markTaskComplete($scope.task);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  // ******************* end modal dialog controller section *******************
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, selectedForm, task, ActionService, $filter) {

  $scope.selectedForm = selectedForm;
  $scope.task = task;

  $scope.ok = function () {

    // return the task with whatever changes the 'selectedForm' allowed
    // the user to make in the model in this controller's $scope
    // Ben Wolkenfeld, 1/10/2015
    if (selectedForm == 'Mark Complete') {
      $scope.task.taskCompleteDateTime = $scope.getTaskCompleteDate();
      $modalInstance.close($scope.task);
    }
    else {
      $modalInstance.close($scope.task);
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  // ***************** Begin Date Picker Section *****************
  $scope.today = function() {
    $scope.datePicked = new Date();
    if ($scope.datePicked.getHours() > 12) {
      $scope.timePickerHour = $scope.datePicked.getHours() - 12;
      $scope.timePickerAMPM = 'PM';
    }
    else{
      $scope.timePickerHour = $scope.datePicked.getHours();
      $scope.timePickerAMPM = 'AM';
    }
    var theMinutes = $scope.datePicked.getMinutes();
    if (theMinutes < 8){
      $scope.timePickerMinute = ':00';
    } else if (theMinutes < 23) {
      $scope.timePickerMinute = ':15';
    } else if (theMinutes < 38) {
      $scope.timePickerMinute = ':30';
    } else if (theMinutes < 60) {

      // if we are at hh:59, not going to move the hour
      // ahead - just set to 11:45 as default
      // Ben Wolkenfeld, 1/12/2015
      $scope.timePickerMinute = ':45';
    }
  };
  $scope.today();

  $scope.clear = function () {
    $scope.datePicked = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };
  // ***************** End Date Picker Section *****************

  $scope.getTaskCompleteDate = function() {
    var theDateStr = $filter('date')($scope.datePicked, 'yyyy/MM/dd');

    var theTimeHour;
    if ($scope.timePickerAMPM == 'PM') {
      theTimeHour = parseInt($scope.timePickerHour) + 12;
    } else {
      theTimeHour = parseInt($scope.timePickerHour);
    }
    var theTimeStr = theTimeHour + $scope.timePickerMinute + ':00';

    var theDateTimeStr = theDateStr + ' ' + theTimeStr;
    theDate = new Date(theDateTimeStr);
    return theDate.toISOString();
  }
});
