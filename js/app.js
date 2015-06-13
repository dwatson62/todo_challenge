var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {

  var self = this;
  self.list = [];

  self.addTask = function() {
    self.list.push( { 'task': self.newTask, 'status': 'pending' } );
  };

  var hey;

  self.completeTask = function() {
    task = Object.keys(self.markComplete);
    task = task.pop();
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x]
      if (item.task == task) {
        item.status = 'completed';
      }
    }
  };

  self.deleteTask = function() {
    task = Object.keys(self.markComplete);
    task = task.pop();
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x]
      if (item.task == task) {
        self.list.splice(x, 1);
      }
    }
  };

}]);
