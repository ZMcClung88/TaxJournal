angular.module('myApp').controller('registerCtrl', function($scope, mainSrvc) {
  ////////////REGISTERING A USER\\\\\\\\\\\\
  $scope.register = user => {
    let flag = true;
    console.log('registerCtrl', user);
    if (flag) {
      mainSrvc.register(user).then(response => {
        $scope.user.first_name = '';
        $scope.user.last_name = '';
        $scope.user.email = '';
        $scope.user.password = '';

        swal({
          title: 'Success',
          icon: 'success'
        });
      });
    }
  };
});
