describe('ToDo List', function () {
  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List')
  });

  it('can type in a new task and see it appear', function () {
    element(by.model('todo.newTask')).sendKeys('Get Milk');
    element(by.id('addtask')).click();
    expect(element(by.id('list')).getText()).toEqual('Get Milk');
  });
});
