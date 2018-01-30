angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc, $rootScope) {
  $scope.name = 'Zac';
  $scope.user = $rootScope.loggedUser;

  $(window).on("scroll", function() {
    // console.log("scrolling...")
    if($(window).scrollTop() > 150) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  })

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
    })
  };
  $scope.getAllEntries();

  console.log('mainCtrl', $rootScope.loggedUser);
  if ($rootScope.loggedUser) {
    console.log("!!!im working!!!")
    $("#login").hide();
    $("#register").hide();
    $("#signup").hide();
  } else {
    console.log("!!!im not working!!!")
    $("#account").hide();
    $("#home_greeting").hide();
  }

})
