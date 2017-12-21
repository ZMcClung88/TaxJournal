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
    .state('user', {
      url: '/user/:id',
      templateUrl: './views/user.html'
    })
})
