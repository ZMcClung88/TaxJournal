angular.module('myApp').controller('registerCtrl', function($scope, mainSrvc) {

  $scope.register = (user) => {
    let flag = true
    // console.log(user)
    if (flag) {
      mainSrvc.register(user).then(response => {
        $scope.user.first_name = '';
        $scope.user.last_name = '';
        $scope.user.email = '';
        $scope.user.password = '';

          swal({
            title: "Success",
            icon: "success"
          });
      })
    }

  }
})
