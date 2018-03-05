angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc, $rootScope) {
  $scope.user = $rootScope.loggedUser;

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
    });
  };
  $scope.getAllEntries();

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 150) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  console.log('mainCtrl', $rootScope.loggedUser);
  if ($rootScope.loggedUser) {
    console.log('!!!im working!!!');
    $('#login').hide();
    $('#register').hide();
    $('#signup').hide();
  } else {
    console.log('!!!im not working!!!');
    $('#account').hide();
    $('#home_greeting').hide();
  }
});
