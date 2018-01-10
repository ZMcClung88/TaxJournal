angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc) {

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
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

      $scope.date = response.map(entry => entry.date)[5];
      console.log($scope.date)
    })
  };
  $scope.getAllEntries();

  $scope.addEntry = (entry) => {
    // console.log('working here', entry)
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
