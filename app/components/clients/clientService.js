client.factory('ClientService', function($http, $rootScope) {
  var allClients = [];
  return {
    getClients: function() {
      return $http.get('app/components/clients/clients.json').then(function(result) {
        allClients = result.data;     // store it in the service
        return result.data;           // return it to the entity (e.g., controller) that called the service
      });
    },
    setSelectedClient: function(selectedClient) {
      $rootScope.selectedClient = selectedClient;
      $rootScope.$broadcast('client.selectedClient', selectedClient);
      return;
    },
    getClientDetail: function() {
      return;
    },
    getClientHistory: function() {
      return;
    },
    getClientCalendar: function() {
      return;
    },
    getClientNotes: function() {
      return;
    }
  }
});
