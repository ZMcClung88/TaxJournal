angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc) {
  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
      console.log($scope.entries);
    })
  };
  $scope.getAllEntries();
})
