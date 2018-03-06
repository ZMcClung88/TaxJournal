angular.module('myApp').controller('accountCtrl', function($rootScope, $scope, mainSrvc, $location, $timeout, $state) {
  $scope.user = $rootScope.loggedUser;
  $scope.userId = $rootScope.loggedUser.user_id;

  ////////////GET ALL USER ENTRIES\\\\\\\\\\\\
  $scope.getUserEntries = () => {
    mainSrvc.getUserEntries($rootScope.loggedUser).then(response => {
      if (response.length === 0) {
        $scope.total = 0;
        $scope.totalMiles = 0;
        $scope.totalMeals = 0;
        $scope.totalSupplies = 0;
        $scope.totalLeisure = 0;

        $('#need_entries').show().css({ color: 'red', 'margin-top': '50px' });
      } else {
        $('#need_entries').hide();
      }

      $scope.entries = response;

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

      $scope.totalSupplies = response
        .map(entry => {
          return entry.office_supplies;
        })
        .reduce((acc, cur) => (acc += cur));

      $scope.totalLeisure = response
        .map(entry => {
          return entry.golf + entry.cocktails;
        })
        .reduce((acc, cur) => (acc += cur));
    });
  };
  $scope.getUserEntries();

  ////////////USER ADD ENTRY\\\\\\\\\\\\
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
        title: 'Success',
        text: 'Entry Added!',
        icon: 'success'
      });
    });
    $state.reload();
  };

  ////////////LOGOUT USER\\\\\\\\\\\\
  $scope.logOut = () => {
    mainSrvc.logOut().then(response => {});

    $timeout(() => {
      $location.path('login');
      $rootScope.$apply(($rootScope.loggedUser = false));
    }, 300);
  };

  if ($rootScope.loggedUser) {
    $('#login').hide();
    $('#register').hide();
  } else {
    $('#account').hide();
    $('#home_greeting').hide();
  }
  /////TOGGLE ACTION BUTTONS\\\\\
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
