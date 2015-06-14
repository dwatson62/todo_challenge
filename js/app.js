var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {

  var self = this;
  self.list = [];
  self.tasks = false;
  self.taskNumber = 0;

  self.defaultMessage = function () {
    if (self.list.length === 0) {
      self.tasks = false;
    } else {
      self.tasks = true;
    }
  };

  self.updateTotal = function() {
    self.taskNumber = 0;
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.status == 'pending') {
        self.taskNumber ++;
      }
    }
  };

  self.addTask = function() {
    self.list.push( { 'task': self.newTask, 'status': 'pending' } );
    self.defaultMessage();
    self.updateTotal();
  };

  self.completeTask = function() {
    task = Object.keys(self.markComplete);
    task = task.pop();
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.task == task) {
        item.status = 'completed';
      }
    }
    self.updateTotal();
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
    self.updateTotal();
  };

}]);
