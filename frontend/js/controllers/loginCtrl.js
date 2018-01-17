angular.module('myApp').controller('loginCtrl', function($rootScope, $location, $scope, mainSrvc) {

  $scope.login = (user) => {
    let userEmail = user.email;
    let userPassword = user.password;
    // console.log(userEmail, userPassword)

    mainSrvc.login(userEmail, userPassword).then(function(response) {
      if (response[0]) {
        $rootScope.loggedUser = response[0];
        $scope.email = '';
        $scope.password = '';
        $location.path('account');
        // $rootScope.refreshHeader();
      } else {
        // $scope.noMatch = true;
        swal({
          title: "Login Failed",
          text: "please try again",
          icon: "warning"
        })
      }
    })
  }

})
