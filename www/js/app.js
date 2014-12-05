// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })


      .state('tab.recipe', {
          url: '/Top10Recipe',
          views: {
              'tab-recipe': {
                  templateUrl: 'tab-recipe.html',
                  controller: 'homeCtrl',

                  resolve:{

                      recipe: ['$http', function($http){
                          return $http.get('../api/recipe.json')
                              .then(function(response){


                                  return response.data;
                              })

                      }],

                      recipe1: ['$http', function($http){
                          return $http.get('../api/recipe.json')
                              .then(function(result){


                                  return result.data;
                              })

                      }]
                  }
              }
          }
      })

      .state('tab.recipe-detail', {
          url: '/test/:jobId',
          views: {
              'tab-recipe': {
                  templateUrl: 'recipe-detail.html',
                  controller: 'homeCtrl',

                  resolve:{

                      recipe: ['$http', function($http){
                          return $http.get('../api/recipe.json')
                              .then(function(response){


                                  return response.data;
                              })

                      }],

                      recipe1: ['$http', function($http){
                          return $http.get('../api/recipe.json')
                              .then(function(result){


                                  return result.data;
                              })

                      }]
                  }



              }
          }
      })

    .state('tab.friends', {
      url: '/Newsletter',
      views: {
        'tab-friends': {
          templateUrl: 'tab-friends.html',
          controller: 'homeCtrl',


            resolve:{

                recipe: ['$http', function($http){
                    return $http.get('../api/recipe.json')
                        .then(function(response){


                            return response.data;
                        })

                }],

                recipe1: ['$http', function($http){
                    return $http.get('../api/recipe.json')
                        .then(function(result){


                            return result.data;
                        })

                }]
            }

        }
      }
    })
    .state('tab.friend-detail', {
      url: '/test/:jobId',
      views: {
        'tab-friends': {
          templateUrl: 'friend-detail.html',
          controller: 'homeCtrl',

            resolve:{

                recipe: ['$http', function($http){
                    return $http.get('../api/recipe.json')
                        .then(function(response){


                            return response.data;
                        })

                }],

                recipe1: ['$http', function($http){
                    return $http.get('../api/recipe.json')
                        .then(function(result){


                            return result.data;
                        })

                }]
            }

        }
      }
    })

      .state('tab.Calc', {
          url: '/Calculator',
          views: {
              'tab-Calc': {
                  templateUrl: 'Calc.html'

              }
          }
      })



        .state('tab.account', {
      url: '/workout',
      views: {
        'tab-workout': {
          templateUrl: 'workout.html'

        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});


