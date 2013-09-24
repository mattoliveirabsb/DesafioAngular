'use strict';

var desafioApp = angular.module('desafioApp', ["ui.router"])
    desafioApp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/main")
      
      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "main.html",
            controller: "MainCtrl"
        })
          
          
        .state('cart', {
            url: "/cart",
            templateUrl: "cart.html",
            controller: "MainCtrl"
        })

        .state('checkout', {
            url: "/checkout",
            templateUrl: "checkout.html",
            controller: "MainCtrl"
        })
          
    })

