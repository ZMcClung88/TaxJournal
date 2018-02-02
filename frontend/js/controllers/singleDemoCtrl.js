angular.module("myApp").controller('singleDemoCtrl', function($scope, mainSrvc, $stateParams, $rootScope) {

  $scope.user = $rootScope.loggedUser;

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
    $("#home_greeting").hide();
    $("#account").hide();
  }
})
