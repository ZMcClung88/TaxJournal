angular.module("myApp").controller('singleEntryCtrl', function($scope, mainSrvc, $stateParams, $rootScope) {

  $scope.user = $rootScope.loggedUser;

  $scope.getSingleEntry = () => {
    mainSrvc.getSingleEntry($stateParams.id).then(function(response) {
      $scope.singleEntry = response;
      console.log("singleEntry", $scope.singleEntry);
    });
  }
  $scope.getSingleEntry();

  if ($rootScope.loggedUser) {
    console.log("!!!singleEntry is working!!!")
    $("#login").hide();
    $("#register").hide()
  } else {
    console.log("!!!im not working!!!")
    $("#account").hide();
  }
})
