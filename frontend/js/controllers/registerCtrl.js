angular.module('myApp').controller('registerCtrl', function($scope) {
  $scope.register = (user) => {
    let flag = true

    if (flag) {
      mainSrvc.register(user).then(function(response) {
        user.first_name = '';
        user.last_name = '';
        user.email = '';
        user.password = ''
      })
    }

  }
})
