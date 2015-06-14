describe('ToDo List', function () {

  var addTaskBtn = element(by.id('addtask'))
  var checkBox = element(by.className('checkbox'))
  var completedTasks = element(by.id('completetask'))

  beforeEach(function () {
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List')
  });

  it("displays '0 Tasks Active' when empty", function () {
    expect(element(by.id('total')).getText()).toEqual('0 Tasks Active')
  });

  describe('When a task is added', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      addTaskBtn.click();
    });

    it('it appears as active', function () {
      expect(element(by.id('list')).getText()).toContain('Get Milk Active');
    });

    it('the total number of tasks is displayed', function () {
      expect(element(by.id('total')).getText()).toEqual('1 Tasks Active')
    });

  });

  describe('Tasks can be marked completed', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      addTaskBtn.click();
    });

    it('and the list be updated', function () {
      checkBox.click();
      completedTasks.click();
      expect(element(by.id('list')).getText()).toContain('Get Milk Completed');
    });

    it('and the total active tasks are updated', function () {
      checkBox.click();
      completedTasks.click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active')
    });

  });

  describe('Can delete', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      addTaskBtn.click();
    });

    it('individual tasks', function () {
      checkBox.click();
      element(by.id('deletetask')).click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
    });

    it('all completed tasks', function () {
      checkBox.click();
      completedTasks.click();
      element(by.id('clearcompleted')).click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
    })

  });

});
