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

  it('starts with no tasks', function() {
    expect(ctrl.list.length).toEqual(0);
  });

  it('can add a task', function () {
    ctrl.newTask = 'Get Milk';
    ctrl.addTask();
    console.log(ctrl.list)
    expect(ctrl.list).toEqual(testTasks);
  });

  it('can mark a test as completed', function () {
    // not passing
    ctrl.newTask = 'Get Milk';
    ctrl.addTask();
    ctrl.completeTask();
    expect(ctrl.list).toEqual(completedTasks);
  });

});