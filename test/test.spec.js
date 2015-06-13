describe('ToDo List', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController')
  }));

  it('starts with an empty todo list', function() {
    expect(ctrl.list).toBeUndefined();
  });

});