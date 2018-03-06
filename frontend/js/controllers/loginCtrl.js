angular.module('myApp').controller('loginCtrl', function($rootScope, $location, $scope, mainSrvc) {
  ////////////LOG IN USER\\\\\\\\\\\\
  $scope.login = user => {
    let userEmail = user.email;
    let userPassword = user.password;

    mainSrvc.login(userEmail, userPassword).then(function(response) {
      if (response) {
        console.log(response);
        $rootScope.loggedUser = response;
        $scope.email = '';
        $scope.password = '';
        $location.path('account');
      } else {
        swal({
          title: 'Login Failed',
          text: 'please try again',
          icon: 'warning'
        });
      }
      console.log($rootScope.loggedUser, 'beer here!');
    });
  };
});
