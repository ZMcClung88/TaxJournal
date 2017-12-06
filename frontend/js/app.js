angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'mainCtrl'
    })
    .state('demo', {
      url: '/',
      templateUrl: './views/demo.html',
      controller: 'demoCtrl'
    })
    .state('register', {
      url: '/',
      templateUrl: './views/register.html',
      controller: 'registerCtrl'
    })
    .state('login', {
      url: '/',
      templateUrl: './views/login.html'
    })
    .state('user', {
      url: '/',
      templateUrl: './views/user.html'
    })
})
