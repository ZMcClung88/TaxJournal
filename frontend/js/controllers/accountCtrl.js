angular.module("myApp").controller('accountCtrl', function($rootScope, $scope, mainSrvc, $location, $timeout) {
  $scope.user = $rootScope.loggedUser;
  console.log($scope.user);
})
