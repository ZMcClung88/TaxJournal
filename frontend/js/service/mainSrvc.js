angular.module('myApp').service('mainSrvc', function($http) {
  this.getAllEntries = () => {
    return $http({
      method: 'GET',
      url: 'api/entries'
    }).then(response => response.data)
  }
})
