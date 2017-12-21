angular.module('myApp').service('mainSrvc', function($http) {

  this.getAllEntries = () => {
    return $http({
      method: 'GET',
      url: '/api/entries'
    }).then(response => response.data)
  }

  this.register = (user) => {
    // console.log(user)
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(response => response)
  };

  this.login = (email, password) => {
    console.log('service', email, password);
    return $http({
      method: 'POST',
      url: '/api/login',
      data: {
        email,
        password
      }
    }).then(response => response.data);
  };

})
