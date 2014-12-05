/**
 * Created by Robert on 11/21/2014.
 */

/**
 * An example service that returns some data. Rest of API is in app.js (homeCtrl
 */

angular
    .module('starter')
    .controller('homeCtrl',  ['$scope', 'recipe', 'recipe1', function($scope, recipe, recipe1) {

        $scope.recipe = recipe;

        $scope.recipe1 = recipe1;


}]);

