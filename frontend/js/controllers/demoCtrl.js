angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc, $rootScope, $state) {
  $scope.user = $rootScope.loggedUser;

  ////////////GETTING ALL ENTRIES FOR DEMO\\\\\\\\\\\\
  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      console.log('response', response);

      if (response.length === 0) {
        $scope.total = 0;
        $scope.totalMiles = 0;
        $scope.totalMeals = 0;
        $scope.totalSupplies = 0;
        $scope.totalLeisure = 0;
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
      console.log('total meals', $scope.totalMeals);

      $scope.date = response.map(entry => entry.date);

      $scope.totalSupplies = response
        .map(entry => {
          return entry.office_supplies;
        })
        .reduce((acc, cur) => (acc += cur));
      console.log('total supply', $scope.totalSupplies);

      $scope.totalLeisure = response
        .map(entry => {
          return entry.golf + entry.cocktails;
        })
        .reduce((acc, cur) => (acc += cur));
    });
  };
  $scope.getAllEntries();

  ////////////ADDING AN ENTRY\\\\\\\\\\\\
  $scope.addEntry = entry => {
    mainSrvc.addEntry(entry).then(response => {
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
      $state.reload();
    });
  };

  ////////////RESET/DELETE DEMO ENTRIES\\\\\\\\\\\\
  $scope.deleteDemoEntries = () => {
    mainSrvc.deleteDemoEntries().then(response => {});
    $state.reload();
  };

  if ($rootScope.loggedUser) {
    console.log('!!!im working!!!');
    $('#login').hide();
    $('#register').hide();
  } else {
    console.log('!!!im not working!!!');
    $('#account').hide();
    $('#home_greeting').hide();
  }
  /////PANEL ACTION BUTTONS\\\\\
  $('#add-btn').on('click', function() {
    $('#add').show();
    $('#add').css('display', 'flex');
    $('#all').hide();
    $('#graph').hide();
    $('#reset_btn').hide();
  }), $('#all-btn').on('click', function() {
    $('#add').hide();
    $('#all').show();
    $('#graph').hide();
    $('#reset_btn').show();
  }), $('#graph-btn').on('click', function() {
    $('#add').hide();
    $('#all').hide();
    $('#graph').show();
    $('#reset_btn').show();
  });
  $('#reset-btn').on('click', function() {
    $('#reset_demo_modal').show();
    $('#reset_demo_modal').css('display', 'flex');
  });
  $('#keep_demo').on('click', function() {
    $('#reset_demo_modal').hide();
  });
});
