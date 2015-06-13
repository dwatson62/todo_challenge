describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
    var testTasks = [
      {
        'task': 'Get Milk'
      }
    ];

  }));

  it('starts with no tasks', function() {
    expect(ctrl.list.length).toEqual(0);
  });

  it('can add a task', function () {
    ctrl.newTask = 'Get Milk';
    ctrl.addTask();
    expect(ctrl.list.length).toEqual(1);
  });

});