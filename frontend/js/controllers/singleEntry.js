angular.module('myApp').controller('singleEntryCtrl', function($scope, mainSrvc, $state, $stateParams, $rootScope) {
  $scope.user = $rootScope.loggedUser;
  ////////////GETTING ONE USER ENTRY\\\\\\\\\\\\
  $scope.getSingleEntry = () => {
    mainSrvc.getSingleEntry($stateParams.id).then(function(response) {
      $scope.singleEntry = response;
      console.log('singleEntry', $scope.singleEntry);
      $scope.total =
        response.breakfast +
        response.lunch +
        response.dinner +
        response.golf +
        response.cocktails +
        response.office_supplies +
        response.other;
      $scope.totalMiles = response.end_miles - response.beg_miles;
    });
  };
  $scope.getSingleEntry();

  ////////////DELETING AN ENTRY\\\\\\\\\\\\
  $scope.deleteEntry = id => {
    console.log('delete button', id);
    mainSrvc.deleteEntry(id);
    $state.reload();
  };

  //////////// UPDATE ENTRY - NEED TO FIX \\\\\\\\\\\\
  $scope.updateEntry = (id = $rootScope.loggedUser, singleEntry) => {
    console.log('!!! trying to update entry !!!');
    console.log(id, singleEntry);

    mainSrvc.updateEntry().then();
  };

  if ($rootScope.loggedUser) {
    $('#login').hide();
    $('#register').hide();
  } else {
    $('#account').hide();
  }

  $('#delete_entry').on('click', function() {
    $('#delete_entry_modal').show();
    $('#delete_entry_modal').css('display', 'flex');
  });

  $('#keep_entry').on('click', function() {
    $('#delete_entry_modal').hide();
  });

  $('#edit_button').on('click', function() {
    $('#edit_wrapper').show();
    $('#edit_wrapper').css('display', 'flex');
    $('#singleEntry').hide();
    $('#save_button').show();
    $('#edit_button').hide();
  });
});
