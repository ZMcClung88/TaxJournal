angular.module("myApp").controller('singleDemoCtrl', function($scope, mainSrvc, $stateParams, $rootScope) {
  $scope.getSingleDemo = () => {
    mainSrvc.getSingleDemo($stateParams.id).then(function(response) {
      $scope.singleDemo = response;
      console.log($scope.singleDemo);
    });
  }
  $scope.getSingleDemo();

  if ($rootScope.loggedUser) {
    console.log("!!!im working!!!")
    $("#login").hide();
    $("#register").hide()
  } else {
    console.log("!!!im not working!!!")
    $("#account").hide();
  }
})
