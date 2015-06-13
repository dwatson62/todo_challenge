var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {
  var self = this;
  self.list = [];
  self.addTask = function() {
    self.list.push( { 'task': self.newTask } );
  }

}]);