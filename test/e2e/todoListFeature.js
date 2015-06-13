describe('ToDo List', function () {
  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List')
  });

  it('can type in a new task and see it appear as pending', function () {
    element(by.model('todo.newTask')).sendKeys('Get Milk');
    element(by.id('addtask')).click();
    expect(element(by.id('list')).getText()).toContain('Get Milk : pending');
  });

  it('can mark a task as completed', function () {
    element(by.model('todo.newTask')).sendKeys('Get Milk');
    element(by.id('addtask')).click();
    element(by.className('checkbox')).click();
    element(by.id('completetask')).click();
    expect(element(by.id('list')).getText()).toContain('Get Milk : completed');
  });

  it('can delete a task', function () {
    element(by.model('todo.newTask')).sendKeys('Get Milk');
    element(by.id('addtask')).click();
    element(by.className('checkbox')).click();
    element(by.id('deletetask')).click();

  });
});
