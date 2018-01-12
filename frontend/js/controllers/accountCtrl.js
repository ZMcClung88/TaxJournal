angular.module("myApp").controller('accountCtrl', function($rootScope, $scope, mainSrvc, $location, $timeout) {
  $scope.user = $rootScope.loggedUser;
  $scope.userId = $rootScope.loggedUser.user_id;


  $scope.getUserEntries = () => {
    let user = $scope.user;
    console.log(user);
    mainSrvc.getUserEntries(user).then(response => {
      console.log(response);
      $scope.entries = response;
    });
  }
  $scope.getUserEntries();
})
