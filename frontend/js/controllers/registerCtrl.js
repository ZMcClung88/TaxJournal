angular.module('myApp').controller('registerCtrl', function($scope, mainSrvc) {

  $scope.register = (user) => {
    let flag = true
    console.log(user)
    if (flag) {
      mainSrvc.register(user).then(function(response) {

      })
    }

  }
})
