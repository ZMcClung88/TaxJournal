angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('demo', {
      url: '/demo',
      templateUrl: './views/demo.html',
      controller: 'demoCtrl'
    })
    .state('singleDemo', {
      url: '/demo/:id',
      templateUrl: './views/singleDemo.html',
      controller: 'singleDemoCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './views/register.html',
      controller: 'registerCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: 'loginCtrl'
    })
    .state('account', {
      url: '/account',  /*/:user_id*/
      templateUrl: './views/account.html',
      controller: 'accountCtrl'
    })
    .state('user', {
      url: '/user/:id',
      templateUrl: './views/user.html'
    })
    .state('singleEntry', {
      url: '/userEntry/:id',
      templateUrl: './views/singleEntry.html',
      controller: 'singleEntryCtrl'
    })
})
