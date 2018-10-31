'use strict';

angular.module('axialApp', ['ui.router','ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('app', {
    url:'/',
    views: {
      'header':{
        templateUrl:'views/header.html'
      },
      'content':{
        templateUrl:'views/home.html'
      },
      'footer':{
        templateUrl:'views/footer.html'
      }
    }
  })

  .state('app.ent', {
    url:'ent-e-bucomaxilofacial',
    views: {
      'content@':{
        templateUrl:'views/ent-e-bucomaxilofacial.html',
        controller:'ProductsController'
      }
    }
  })

  .state('app.coluna', {
    url:'coluna-e-ortopedia',
    views: {
      'content@':{
        templateUrl:'views/coluna-e-ortopedia.html',
        controller:'ProductsController'
      }
    }
  })

  .state('app.solucoes', {
    url:'outras-solucoes',
    views: {
      'content@':{
        templateUrl:'views/solucoes.html',
        controller:'ProductsController'
      }
    }
  })
});
