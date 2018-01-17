angular.module("myApp").controller('accountCtrl', function($rootScope, $scope, mainSrvc, $location, $timeout) {
  $scope.user = $rootScope.loggedUser;
  $scope.userId = $rootScope.loggedUser.user_id;
  console.log("looking for name", $scope.user);


  $scope.getUserEntries = () => {
    let user = $scope.user;
    console.log(user);
    mainSrvc.getUserEntries(user).then(response => {
      console.log("here i am", response);
      $scope.entries = response;

      $scope.total = response.map(entry => {
        return entry.breakfast + entry.lunch + entry.dinner + entry.golf + entry.cocktails + entry.office_supplies + entry.other
      }).reduce((acc, cur) => acc += cur);

      $scope.totalMiles = response.map(entry => {
        return entry.end_miles - entry.beg_miles;
      }).reduce((acc, cur) => acc += cur);

      $scope.totalMeals = response.map(entry => {
        return entry.breakfast + entry.lunch + entry.dinner + entry.cocktails;
      }).reduce((acc, cur) => acc += cur);

      $scope.date = response.map(entry => entry.date);
      console.log($scope.date)
    });
  }
  $scope.getUserEntries();

  $scope.userAddEntry = (entry, id) => {
    var id = $rootScope.loggedUser.user_id;

    mainSrvc.userAddEntry(entry, id).then(response => {
      $scope.entry.date = '';
      $scope.entry.time = '';
      $scope.entry.who = '';
      $scope.entry.location = '';
      $scope.entry.why = '';
      $scope.entry.breakfast = '';
      $scope.entry.lunch = '';
      $scope.entry.dinner = '';
      $scope.entry.golf = '';
      $scope.entry.cocktails = '';
      $scope.entry.office_supplies = '';
      $scope.entry.beg_miles = '';
      $scope.entry.end_miles = '';
      $scope.entry.other = '';

      swal({
        title: "Success",
        text: "Entry Added!",
        icon: "success"
      });
    })
  }

  $('#add-btn').on('click', function() {
    $('#add').show();
    $('#add').css('display', 'flex');
    $('#all').hide();
    $('#graph').hide();
  }),
  $('#all-btn').on('click', function() {
    $('#add').hide();
    $('#all').show();
    $('#graph').hide();
  }),
  $('#graph-btn').on('click', function() {
    $('#add').hide();
    $('#all').hide();
    $('#graph').show();
  })



})
