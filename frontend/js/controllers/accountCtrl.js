angular.module('myApp').controller('accountCtrl', function($rootScope, $scope, mainSrvc, $location, $timeout, $state) {
  $scope.user = $rootScope.loggedUser;
  $scope.userId = $rootScope.loggedUser.user_id;
  // sessionStorage.setItem("user", JSON.stringify($scope.user));
  // sessionStorage.getItem("user");

  // console.log("looking for storage", localStorage);

  $scope.getUserEntries = () => {
    // let user = $rootScope.loggedUser;
    // console.log("logged user", user);
    mainSrvc.getUserEntries($rootScope.loggedUser).then(response => {
      // console.log('here i am', response);
      if (response.length === 0) {
        $scope.total = 0;
        $scope.totalMiles = 0;
        $scope.totalMeals = 0;
        $scope.totalSupplies = 0;
        $scope.totalLeisure = 0;

        $('#need_entries').show().css({ color: 'red', 'margin-top': '50px' });
      }

      $scope.entries = response;
      // sessionStorage.setItem("entries", JSON.stringify($scope.entries));
      // console.log("testing", sessionStorage.getItem("entries"));

      $scope.total = response
        .map(entry => {
          return (
            entry.breakfast +
            entry.lunch +
            entry.dinner +
            entry.golf +
            entry.cocktails +
            entry.office_supplies +
            entry.other
          );
        })
        .reduce((acc, cur) => (acc += cur));

      $scope.totalMiles = response
        .map(entry => {
          return entry.end_miles - entry.beg_miles;
        })
        .reduce((acc, cur) => (acc += cur));

      $scope.totalMeals = response
        .map(entry => {
          return entry.breakfast + entry.lunch + entry.dinner + entry.cocktails;
        })
        .reduce((acc, cur) => (acc += cur));

      $scope.date = response.map(entry => entry.date);
      // console.log($scope.date)

      $scope.totalSupplies = response
        .map(entry => {
          return entry.office_supplies;
        })
        .reduce((acc, cur) => (acc += cur));
      // console.log('total supply', $scope.totalSupplies);

      $scope.totalLeisure = response
        .map(entry => {
          return entry.golf + entry.cocktails;
        })
        .reduce((acc, cur) => (acc += cur));
    });
  };
  $scope.getUserEntries();

  $scope.userAddEntry = (entry, id) => {
    var id = $rootScope.loggedUser.user_id;
    // console.log("working on date format", entry.date)

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
        title: 'Success',
        text: 'Entry Added!',
        icon: 'success'
      });
    });
    $state.reload();
  };

  $scope.logOut = () => {
    // console.log('logging out!');
    mainSrvc.logOut().then(response => {});

    $timeout(() => {
      $location.path('login');
      //  $scope.$apply();
      $rootScope.$apply(($rootScope.loggedUser = false));
    }, 300);
  };

  if ($rootScope.loggedUser) {
    // console.log("!!!im working!!!")
    $('#login').hide();
    $('#register').hide();
  } else {
    // console.log("!!!im not working!!!")
    $('#account').hide();
    $('#home_greeting').hide();
  }

  $('#add-btn').on('click', function() {
    $('#add').show();
    $('#add').css('display', 'flex');
    $('#all').hide();
    $('#graph').hide();
  }), $('#all-btn').on('click', function() {
    $('#add').hide();
    $('#all').show();
    $('#graph').hide();
  }), $('#graph-btn').on('click', function() {
    $('#add').hide();
    $('#all').hide();
    $('#graph').show();
  });
});
