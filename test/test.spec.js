describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  var test1 = [{ 'task': 'Get Milk', 'status': 'Active' }];

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('starts with no tasks', function () {
    it('so has an empty list', function() {
      expect(ctrl.list).toEqual([]);
    });
    it('so has 0 active tasks', function() {
      expect(ctrl.taskNumber).toEqual(0);
    });
  });

  describe('can add a task', function () {

    beforeEach(function() {
      ctrl.newTask = 'Get Milk';
      ctrl.addTask();
    });

    it('and be added to the list as active', function () {
      expect(ctrl.list).toEqual(test1);
    });

    it('and total number of active tasks are updated', function () {
      expect(ctrl.taskNumber).toEqual(1);
    });

    it('cannot add the same task twice', function () {
      ctrl.newTask = 'Get Milk';
      expect( function(){ ctrl.addTask(); } ).toThrow(new Error("Task already added"));
    });

  });

  describe('can mark as completed', function () {

    var completedTest1 = [
      { 'task': 'Get Milk', 'status': 'Completed' },
      { 'task': 'Walk Dog', 'status': 'Active' }
    ];
    var completedTest2 = [
      { 'task': 'Get Milk', 'status': 'Completed' },
      { 'task': 'Walk Dog', 'status': 'Completed' }
    ];

    beforeEach(function() {
      ctrl.newTask = 'Get Milk';
      ctrl.addTask();
      ctrl.newTask = 'Walk Dog';
      ctrl.addTask();
    });

    it('one task at a time', function () {
      ctrl.markedTasks = { 'Get Milk': true };
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTest1);
    });

    it('multiple tasks at once', function () {
      ctrl.markedTasks = { 'Get Milk': true, 'Walk Dog': true };
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTest2);
    });

  });

  describe('can delete', function () {

    var deleteTest1 = [ { 'task': 'Walk Dog', 'status': 'Active' } ];

    beforeEach(function() {
      ctrl.newTask = 'Get Milk';
      ctrl.addTask();
      ctrl.newTask = 'Walk Dog';
      ctrl.addTask();
    });

    it('one task at a time', function () {
      ctrl.markedTasks = { 'Get Milk': true };
      ctrl.deleteTask();
      expect(ctrl.list).toEqual(deleteTest1);
    });

    it('multiple tasks at once', function () {
      ctrl.markedTasks = { 'Get Milk': true, 'Walk Dog': true };
      ctrl.deleteTask();
      expect(ctrl.list).toEqual([]);
    });

    it('all completed tasks at once', function () {
      ctrl.markedTasks = { 'Get Milk': true, 'Walk Dog': true };
      ctrl.completeTask();
      ctrl.clearCompleted();
      expect(ctrl.list).toEqual([]);
    });

  });

  describe('can show correct number of active tasks', function () {
    beforeEach(function() {
      ctrl.newTask = 'Get Milk';
      ctrl.addTask();
      ctrl.newTask = 'Walk Dog';
      ctrl.addTask();
    });

    it('after adding 2 items', function () {
      expect(ctrl.taskNumber).toEqual(2);
    });

    it('after marking 1 down as complete', function () {
      ctrl.markedTasks = { 'Get Milk': true };
      ctrl.completeTask();
      expect(ctrl.taskNumber).toEqual(1);
    });

    it('after deleting 2 tasks', function () {
      ctrl.markedTasks = { 'Get Milk': true, 'Walk Dog': true };
      ctrl.deleteTask();
      expect(ctrl.taskNumber).toEqual(0);
    });

    it('after clearing 2 completed tasks', function () {
      ctrl.markedTasks = { 'Get Milk': true, 'Walk Dog': true };
      ctrl.completeTask();
      ctrl.clearCompleted();
      expect(ctrl.taskNumber).toEqual(0);
    });
  });

});