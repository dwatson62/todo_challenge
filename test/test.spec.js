describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;
  var testTasks;
  var completedTasks;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
    testTasks = [{
        'task': 'Get Milk', 'status': 'pending'
      }]
    completedTasks = [{
        'task': 'Get Milk', 'status': 'completed'
      }]
  }));

  describe('starts with no tasks', function () {
    it('so it has an empty list', function() {
      expect(ctrl.list.length).toEqual(0);
    });

    it('and a default message can be displayed', function() {
      expect(ctrl.tasks).toBe(false);
    });
  });

  describe('can add a task', function () {
    beforeEach(function() {
      ctrl.newTask = 'Get Milk';
      ctrl.addTask();
    });

    it('and be added to the list as pending', function () {
      expect(ctrl.list).toEqual(testTasks);
    });

    it('and the default message disappears', function () {
      expect(ctrl.tasks).toBe(true);
    });

    it('and later mark as completed', function () {
      // not passing
      ctrl.completeTask();
      expect(ctrl.list).toEqual(completedTasks);
    });

  });

});