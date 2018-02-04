angular.module('myApp').controller('singleDemoCtrl', function($scope, mainSrvc, $stateParams, $rootScope) {
  $scope.user = $rootScope.loggedUser;

  $scope.getSingleDemo = () => {
    mainSrvc.getSingleDemo($stateParams.id).then(function(response) {
      $scope.singleDemo = response.data[0];
      console.log($scope.singleDemo);
      $scope.total =
        response.data[0].breakfast +
        response.data[0].lunch +
        response.data[0].dinner +
        response.data[0].golf +
        response.data[0].cocktails +
        response.data[0].office_supplies +
        response.data[0].other;
      console.log('total', $scope.total);
    });
  };
  $scope.getSingleDemo();

  if ($rootScope.loggedUser) {
    console.log('!!!im working!!!');
    $('#login').hide();
    $('#register').hide();
  } else {
    console.log('!!!im not working!!!');
    $('#home_greeting').hide();
    $('#account').hide();
  }
});
