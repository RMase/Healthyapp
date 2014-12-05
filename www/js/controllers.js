angular.module('starter.controllers', [])


    //workout.html  workout list controller

    .controller('ToDoListCtrl', function($scope,$ionicModal) {
        $scope.toDoListItems = [
            {


            }
        ];

        $scope.data = {
            showDelete: false
        };

        $scope.onItemDelete = function (data) {
            $scope.toDoListItems.splice($scope.toDoListItems.indexOf(data), 1);
        };


        $scope.AddItem = function (data) {
            $scope.toDoListItems.push({task: data.newItem, task2: data.newItem2, task3: data.newItem3, task4: data.newItem4, task5: data.newItem5});


            data.newItem = ' ';
            data.newItem2 = ' ';
            data.newItem3 = ' ';
            data.newItem4 = ' ';
            data.newItem5 = ' ';

            $scope.closeModal();
        };


        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.modal.remove();
        })

    })
 // ------------------------------------Calculator code------------------------------------




    .controller('bmiCtrl', function ($scope) {
        $scope.catClass = "default";
        $scope.catTitle = "Unknown";
        $scope.bmi = 0;

        $scope.$watch('weight_lb', function (newVal, oldVal, scope) {
            if(newVal) {
                var w_kg = (newVal * 0.453592);
                var h_m = (scope.height_foot * 0.3048) + (scope.height_inch * 0.0254);

                scope.bmi = (h_m) ? (w_kg/(h_m * h_m)) : 0.0;
            } else {
                scope.bmi = 0;
            }
        });

        $scope.$watch('height_foot', function (newVal, oldVal, scope) {
            if(newVal) {
                var w_kg = (scope.weight_lb * 0.453592);
                var h_m = (newVal * 0.3048) + (scope.height_inch * 0.0254);
                scope.bmi = (h_m) ? (w_kg / (h_m * h_m)) : 0.0;
            } else {
                scope.bmi = 0;
            }
        });

        $scope.$watch('height_inch', function (newVal, oldVal, scope) {
            if(newVal) {
                var w_kg = (scope.weight_lb * 0.453592);
                var h_m = (scope.height_foot * 0.3048) + (newVal * 0.0254);
                scope.bmi = (h_m) ? (w_kg / (h_m * h_m)) : 0.0;
            } else {
                scope.bmi = 0;
            }
        });




        $scope.$watch('bmi', function (newVal, oldVal, scope) {
            if(newVal) {
                if((newVal <= 24) && (newVal >= 19)) {
                    scope.catClass = "success";
                    scope.catTitle = "Normal";
                } else if((newVal < 19) && (newVal > 0)) {
                    scope.catClass = "danger";
                    scope.catTitle = "Underweight";
                } else if(newVal > 24) {
                    scope.catClass = "danger";
                    scope.catTitle = "Overweight";
                } else {
                    scope.catClass = "default";
                    scope.catTitle = "Unknown";
                }
            } else {
                scope.catClass = "default";
                scope.catTitle = "Unknown";
            }
        });


    })



.controller('DashCtrl', function($scope) {
})



.controller('workoutCtrl', function($scope) {


})

 .controller('CalcCtrl', function($scope) {

        $scope.height = function() {


        };
    });


