angular.module('myApp').controller('loginCtrl', function($scope, mainSrvc) {

  $scope.login = (user) => {
    // console.log('function working here!');
    let userEmail = user.email;
    let userPassword = user.password;

    mainSrvc.login(userEmail, userPassword).then(function(response) {
      $scope.currentUser = response;
      // console.log($scope.currentUser)
    })
  }

})
