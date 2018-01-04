angular.module('myApp').controller('demoCtrl', function($scope, mainSrvc) {

  $scope.getAllEntries = () => {
    mainSrvc.getAllEntries().then(response => {
      $scope.entries = response;
      // console.log($scope.entries);
    })
  };
  $scope.getAllEntries();

  $scope.addEntry = (entry) => {
    // console.log(entry)
    mainSrvc.addEntry(entry).then(response => {
      $scope.entry.date = '';
      $scope.entry.who = '';
      $scope.entry.location = '';
      $scope.entry.why = '';
      $scope.entry.breakfast = '';
      $scope.entry.lunch = '';
      $scope.entry.dinner = '';
      $scope.entry.home = '';
      $scope.entry.golf = '';
      $scope.entry.cocktails = '';
      $scope.entry.other = '';
      $scope.entry.total1 = '';
      $scope.entry.total2 = '';
      $scope.entry.total3 = '';
      
      swal({
        title: "Success",
        text: "Entry Added!",
        icon: "success"
      });
    })
  }

  // $scope.resetForm = () => {
  //   console.log("reset function working")
  //   $scope.entry.date = '';
  //   $scope.entry.who = '';
  //   $scope.entry.location = '';
  //   $scope.entry.why = '';
  //   $scope.entry.breakfast = '';
  //   $scope.entry.lunch = '';
  //   $scope.entry.dinner = '';
  //   $scope.entry.home = '';
  //   $scope.entry.golf = '';
  //   $scope.entry.cocktails = '';
  //   $scope.entry.other = '';
  //   $scope.entry.total1 = '';
  //   $scope.entry.total2 = '';
  //   $scope.entry.total3 = '';
  // }

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
