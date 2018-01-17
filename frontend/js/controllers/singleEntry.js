angular.module("myApp").controller('singleEntryCtrl', function($scope, mainSrvc, $stateParams) {
  $scope.getSingleEntry = () => {
    mainSrvc.getSingleEntry($stateParams.id).then(function(response) {
      $scope.singleEntry = response;
      console.log("singleEntry", $scope.singleEntry);
    });
  }
  $scope.getSingleEntry();
})
