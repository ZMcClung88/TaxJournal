angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc) {

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
      console.log($scope.entries);
    })
  };
  $scope.getAllEntries();

  $scope.addEntry = (entry) => {
    // console.log(entry)
    mainSrvc.addEntry(entry).then(response => {

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
