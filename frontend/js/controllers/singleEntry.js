angular.module('myApp').controller('singleEntryCtrl', function($scope, mainSrvc, $state, $stateParams, $rootScope) {
  $scope.user = $rootScope.loggedUser;

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
      // console.log('total', $scope.total);
      $scope.totalMiles = response.end_miles - response.beg_miles;
      // console.log('miles', $scope.totalMiles);
    });
  };
  $scope.getSingleEntry();

  $scope.deleteEntry = id => {
    console.log('delete button', id);
    mainSrvc.deleteEntry(id);
    $state.reload();
  };

  if ($rootScope.loggedUser) {
    // console.log("!!!singleEntry is working!!!")
    $('#login').hide();
    $('#register').hide();
  } else {
    // console.log("!!!im not working!!!")
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
