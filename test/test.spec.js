describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  var test1 = [{ 'task': 'Get Milk', 'status': 'Active' }];

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  describe('starts with no tasks', function () {
    it('so it has an empty list', function() {
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

    var test2 = [
      { 'task': 'Get Milk', 'status': 'Active' },
      { 'task': 'Walk Dog', 'status': 'Active' }
    ];
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
      ctrl.markComplete = test1;
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTest1);
    });

    it('multiple tasks at once', function () {
      ctrl.markComplete = test2;
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTest2);
    });

  })

});