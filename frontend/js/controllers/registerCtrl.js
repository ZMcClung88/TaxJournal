angular.module('myApp').controller('registerCtrl', function($scope, mainSrvc) {

  $scope.register = (user) => {
    let flag = true
    // console.log(user)
    if (flag) {
      mainSrvc.register(user).then(response => {
          swal({
            title: "Success",
            icon: "success"
          });
      })
    }

  }
})
