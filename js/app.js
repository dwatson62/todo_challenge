var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {

  var self = this;
  self.list = [];
  self.tasks = false;
  self.taskNumber = 0;
  // self.markComplete = [];

  self.updateTotal = function() {
    self.taskNumber = 0;
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.status == 'Active') {
        self.taskNumber ++;
      }
    }
  };

  self.checkTask = function() {
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.task == self.newTask) {
        throw Error('Task already added');
      }
    }
  };

  self.addTask = function() {
    self.checkTask();
    self.list.push( { 'task': self.newTask, 'status': 'Active' } );
    self.updateTotal();
  };

  self.completeTask = function() {
    Object.keys(self.markComplete).forEach( function (key) {
      for (x = 0; x < self.list.length; x ++ ) {
        item = self.list[x];
        if (item.task == key) {
          item.status = 'Completed';
        }
      }
    });
    self.updateTotal();
  };

  self.deleteTask = function() {
    Object.keys(self.markComplete).forEach( function (key) {
      for (x = 0; x < self.list.length; x ++ ) {
        item = self.list[x];
        if (item.task == key) {
          self.list.splice(x, 1);
        }
      }
    });
    self.updateTotal();
  };

  self.clearCompleted = function() {
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.status == 'Completed') {
        self.list.splice(x, 1);
        self.clearCompleted();
      }
    }
    self.updateTotal();
  };

}]);
