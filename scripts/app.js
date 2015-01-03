var app = angular.module("main", ["ui.bootstrap"]);
var homeUrl = "http://localhost/~benwolkenfeld/CoachNow/";

// used for the action drop down on the Actions view panel
app.controller("dropdownTaskFilterCtrl", function($scope, $http) {

  //grab the open tasks from the service
  $http.get(homeUrl + "data/tasks.json").
  success(function(data, status, headers, config) {
    $scope.tasks = data;
    console.log("length of my data = " + data.length);
    console.log("")
  }).
  error(function(data, status, headers, config) {

    //TO DO ITEM - figure out how to log errors and what we do with those
    console.log("error fetching data from tasks.json" + status);
  });

  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event, $scope) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  // list of filters here - can add more as needed
  var filter1 = {taskDue: ''};
  var filter2 = {taskDue: 'today'};
  var filter3 = {taskDue: 'tomorrow'};
  var filter4 = {taskDue: 'later'};

  $scope.setTaskFilter = function(filter) {
	  console.log("taskFilter = " + $scope.taskFilter);

	  if(filter == '1'){
	  	$scope.taskFilter = filter1;
	  } else if (filter == '2'){
	  	$scope.taskFilter = filter2;
	  } else if (filter == '3'){
		$scope.taskFilter = filter3;
	  } else if (filter == '4'){
	  	$scope.taskFilter = filter4;
	  }

	  console.log("new filter = " + $scope.taskFilter);
  };
});

// used for the action drop down on each task (see 'taskCtrl' below)
app.controller("dropdownTaskActionCtrl", function($scope) {
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
});

// used to populate the task list from a server
app.controller("tasksCtrl", function($scope, $http){
  $http.get(homeUrl + "data/tasks.json").
    success(function(data, status, headers, config) {
      $scope.tasks = data;
      console.log("length of my data = " + data.length);
      console.log("")
    }).
    error(function(data, status, headers, config) {

      //TO DO ITEM - figure out how to log errors and what we do with those
      //console.log("error fetching data from tasks.json");
    });
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

app.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'atemplate',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});