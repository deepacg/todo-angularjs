var app = angular.module('myApp', [])
        app.controller('myController', function($scope){
            $scope.tasks = []
            $scope.save_task = function(){
                $scope.tasks.push({task_title: $scope.task_name, status: false})
                document.getElementById('task').value=''
            }
            $scope.delete_task = function(i){
                $scope.tasks.splice(i,1)
            }
            $scope.update_task = function(i){
                $scope.tasks[i].status=true
            }
        })