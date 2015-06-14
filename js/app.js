var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {

  var self = this;
  self.list = [];
  self.tasks = false;

  self.defaultMessage = function () {

    if (self.list.length === 0) {
      self.tasks = false;
    } else {
      self.tasks = true;
    }

  };

  self.addTask = function() {
    self.list.push( { 'task': self.newTask, 'status': 'pending' } );
    self.defaultMessage();
  };

  var hey;

  self.completeTask = function() {
    task = Object.keys(self.markComplete);
    task = task.pop();
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.task == task) {
        item.status = 'completed';
      }
    }
  };

  self.deleteTask = function() {
    task = Object.keys(self.markComplete);
    task = task.pop();
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.task == task) {
        self.list.splice(x, 1);
      }
    }
    self.defaultMessage();
  };

}]);
