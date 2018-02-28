angular.module('myApp').service('mainSrvc', function($http, $rootScope) {
  this.getAllEntries = () => {
    return $http({
      method: 'GET',
      url: '/api/entries'
    }).then(response => response.data);
  };

  this.addEntry = entry => {
    return $http({
      method: 'POST',
      url: '/api/demo',
      data: { entry }
    }).then(response => {
      return response.data.entry;
    });
  };
  // this.deleteItemInCart = (product, user) => {
  //    return $http({
  //      method: 'DELETE',
  //      url: '/cart/clear/' + product + '/' + user
  //    }).then(response => response)
  //  };
  this.deleteEntry = id => {
    return $http({
      method: 'DELETE',
      url: '/api/deleteEntry/' + id + '/'
    });
  };

  this.deleteDemoEntries = () => {
    return $http({
      method: 'DELETE',
      url: '/api/deleteDemoEntries'
    });
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
    }).then(response => response);
  };

  this.register = user => {
    // console.log(user);
    return $http({
      method: 'POST',
      url: '/api/register',
      data: user
    }).then(response => response);
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

  this.logOut = () => {
    return $http({
      method: 'GET',
      url: '/logout'
    }).then(response => {});
  };

  this.checkLoginStatus = () => {
    return $http({
      method: 'GET',
      url: '/loggedUser'
    }).then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        return;
      }
    });
  };

  this.getUserEntries = user => {
    // console.log("user", user);
    return $http({
      method: 'POST',
      url: '/api/account',
      data: user
    }).then(response => response.data);
  };

  this.getSingleEntry = param => {
    return $http({
      method: 'GET',
      url: '/api/singleEntry/' + param + '/'
    }).then(response => response.data[0]);
  };

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
    });
  };

  this.updateEntry = (newEntry, id) => {
    return $http({
      method: 'PUT',
      url: '/api/updateEntry',
      data: {
        newEntry,
        id
      }
    }).then(response => response);
  };
});
