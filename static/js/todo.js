var app = angular.module('toDo', []); 
app.controller('toDoController', function($scope) {
    $scope.todoList = [{todoText:'Finish this app', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = '';
    };
});
