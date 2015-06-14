var todoList = angular.module('ToDoList', [] );

todoList.controller('ToDoListController', [ function() {

  var self = this;
  self.list = [];
  self.tasks = false;
  self.taskNumber = 0;

  self.updateTotal = function() {
    self.taskNumber = 0;
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.status == 'active') {
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
    self.list.push( { 'task': self.newTask, 'status': 'active' } );
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
    self.updateTotal();
  };

  self.clearCompleted = function() {
    for (x = 0; x < self.list.length; x ++ ) {
      item = self.list[x];
      if (item.status == 'completed') {
        self.list.splice(x, 1);
      }
    }
    self.updateTotal();
  }

}]);
