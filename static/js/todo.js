var app = angular.module('toDo', []);
app.controller('toDoController', function($scope, $http) {
    // $scope.todoList = [{todoText: 'Finish this app', done: false}];
    $http.get('/todo/api/').then(function(response) {
        $scope.todoList = [];
        for (var i = 0; i < response.data.length; i++) {

            var todo = {};
            todo.todoText = response.data[i].text

            todo.done = response.data[i].done
            todo.id = response.data[i].id
            $scope.todoList.push(todo);
        }
    });
    $scope.saveData = function() {
        var data = {text: $scope.todoInput, done: false}
        $http.put('/todo/api/', data)
    }

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = '';
    };
    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(todo) {
            if (todo.done) {
                $http.delete('/todo/api/' + todo.id + '/');
            } else {
                $scope.todoList.push(todo);
            }
        })
    }
})
