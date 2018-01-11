angular.module('myApp').controller('loginCtrl', function($rootScope, $location, $scope, mainSrvc) {

  $scope.login = (user) => {
    let userEmail = user.email;
    let userPassword = user.password;
    // console.log(userEmail, userPassword)

    mainSrvc.login(userEmail, userPassword).then(function(response) {
      // $scope.currentUser = response;
      // console.log($scope.currentUser)
      if(response.length === 0) {
        // console.log(response);
        swal({
          title: "Login Failed",
          text: "please try again",
          icon: "warning"
        })
      } else {
        $rootScope.loggedUser = response[0];
        $location.path('account');
        // $rootScope.refreshHeader();
        // console.log($scope.currentUser);
      }
      $scope.user.email = '';
      $scope.user.password = '';
    })
  }

})
