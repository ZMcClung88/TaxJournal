angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc) {
  $scope.name = 'Zac';

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
    })
  };
  $scope.getAllEntries();

})
