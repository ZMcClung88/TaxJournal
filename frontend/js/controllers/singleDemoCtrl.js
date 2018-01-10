angular.module("myApp").controller('singleDemoCtrl', function($scope, mainSrvc, $stateParams) {
  $scope.getSingleDemo = () => {
    mainSrvc.getSingleDemo($stateParams.id).then(function(response) {
      $scope.singleDemo = response;
      console.log($scope.singleDemo);
    });
  }
  $scope.getSingleDemo();
})
