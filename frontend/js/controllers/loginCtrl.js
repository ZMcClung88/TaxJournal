angular.module('myApp').controller('loginCtrl', function($scope, mainSrvc) {

  $scope.login = (user) => {
    // console.log('function working here!');
    let userEmail = user.email;
    let userPassword = user.password;
    // console.log(userEmail, userPassword)

    mainSrvc.login(userEmail, userPassword).then(function(response) {
      $scope.currentUser = response;
      console.log($scope.currentUser)
      $scope.user.email = '';
      $scope.user.password = '';
    })
  }

})
