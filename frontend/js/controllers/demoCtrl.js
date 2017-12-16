angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc) {

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
      console.log($scope.entries);
    })
  };
  $scope.getAllEntries();

  $('#add-btn').on('click', function() {
    $('#add').show();
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
