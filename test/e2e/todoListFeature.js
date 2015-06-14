describe('ToDo List', function () {
  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List')
  });

  it("displays 'No tasks yet' when empty", function () {
    expect(element(by.id('no-tasks')).getText()).toEqual('No tasks yet');
  });

  describe('When a task is added', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      element(by.id('addtask')).click();
    });

    it('the default display message disappears', function () {
      expect(element(by.id('no-tasks')).isDisplayed()).toBe(false);
    });

    it('it appears as pending', function () {
      expect(element(by.id('list')).getText()).toContain('Get Milk pending');
    });

    it('the total number of tasks is displayed', function () {
      expect(element(by.id('total')).getText()).toEqual('1 Tasks Active')
    });

    it('it can be marked off as completed', function () {
      element(by.className('checkbox')).click();
      element(by.id('completetask')).click();
      expect(element(by.id('list')).getText()).toContain('Get Milk completed');
    });

    it('after completing a task, the total active tasks are updated', function () {
      element(by.className('checkbox')).click();
      element(by.id('completetask')).click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active')
    });

    it('can be deleted', function () {
      element(by.className('checkbox')).click();
      element(by.id('deletetask')).click();
      expect(element(by.id('no-tasks')).getText()).toEqual('No tasks yet');
    });

  });

});
