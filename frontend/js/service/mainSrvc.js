angular.module('myApp').service('mainSrvc', function($http, $rootScope) {

  this.getAllEntries = () => {
    return $http({
      method: 'GET',
      url: '/api/entries'
    }).then(response => response.data)
  };

  this.addEntry = (entry) => {
    return $http({
      method: 'POST',
      url: '/api/demo',
      data: {entry}
    }).then(response => {
      return response.data.entry;
    })
  };

  // this.getSingleProduct = (param) => {
  // return $http({
  //   method: 'GET',
  //   url: '/api/product/' + param + '/'
  // }).then(response => response.data)
  this.getSingleDemo = param => {
    return $http({
      method: 'GET',
      url: '/api/singleDemo/' + param + '/'
    }).then(response => response.data[0])
  }

  this.register = (user) => {
    console.log(user)
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(response => response)
  };

  this.login = (email, password) => {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: {
        email,
        password
      }
    }).then(response => response.data);
  };

  this.getUserEntries = (user) => {
    // console.log("user", user);
    return $http({
      method: "POST",
      url: '/api/account',
      data: user
    }).then(response => response.data)
  };

  this.getSingleEntry = param => {
    return $http({
      method: 'GET',
      url: '/api/singleEntry/' + param + '/'
    }).then(response => response.data[0])
  }

  this.userAddEntry = (entry, id) => {
    // console.log("mainSrvc", id)
    return $http({
      method: 'POST',
      url: '/api/account/addEntry',
      data: {
        entry,
        id
      }
    }).then(response => {
      // console.log(response)
      return response.data;
    })
  };


})
