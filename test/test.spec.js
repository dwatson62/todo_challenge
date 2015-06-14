describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;
  var testTasks;
  var completedTasks;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
    testTasks = [{
        'task': 'Get Milk', 'status': 'active'
      }]
    completedTasks = [{
        'task': 'Get Milk', 'status': 'completed'
      }]
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
      expect(ctrl.list).toEqual(testTasks);
    });

    it('and total number of active tasks are updated', function () {
      expect(ctrl.taskNumber).toEqual(1);
    });

    it('and later mark as completed', function () {
      // not passing
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTasks);
    });

    it('cannot add the same task twice', function () {
      ctrl.newTask = 'Get Milk';
      expect( function(){ ctrl.addTask(); } ).toThrow(new Error("Task already added"));
    });

  });

});