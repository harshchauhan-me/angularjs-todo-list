var app = angular.module("app", [])
    .controller("todoCtrl", ["$scope","$window", function ($scope,$window) {
        $scope.message = "AngularJS Todo App";        
        $scope.todo="";
        $scope.todoArray=[];
        $scope.itemCompleted=false;

        $scope.addItemToList = function(){
            if($scope.todo){
                $scope.todoArray.push($scope.todo);
                $scope.todo="";
            }
            else {
                $window.alert("No task to add!");
            }            
        };
        
        $scope.checkList =function(itemCompleted){
            if(itemCompleted){
                return "task-completed";
            }
            else{
                return "";
            }
        };
        
        // ****ends here****
    }]
);