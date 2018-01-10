angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc) {
  $scope.name = 'Zac';

  $(window).on("scroll", function() {
    console.log("scrolling...")
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

})
