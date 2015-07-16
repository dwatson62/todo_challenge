describe('ToDo List', function () {

  var addTaskBtn = element(by.id('addtask'));
  var checkBox = element(by.className('checkbox'));
  var allCheckBoxes = element.all(by.className('checkbox'));
  var completedTasks = element(by.id('completetask'));
  var clearCompleted = element(by.id('clearcompleted'));

  beforeEach(function () {
    browser.get('http://localhost:3000');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('ToDo List');
  });

  it("displays '0 Tasks Active' when empty", function () {
    expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
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
      expect(element(by.id('total')).getText()).toEqual('1 Tasks Active');
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
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
    });

  });

  describe('All completed tasks can be cleared', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      addTaskBtn.click();
      element(by.model('todo.newTask')).sendKeys('Walk Dog');
      addTaskBtn.click();
    });

    it('from the list', function () {
      checkBox.click();
      completedTasks.click();
      clearCompleted.click();
      expect(element(by.id('list')).getText()).toContain('Walk Dog Active');
    });

    it('and the total active tasks are updated', function () {
      allCheckBoxes.click();
      completedTasks.click();
      clearCompleted.click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
    });

  });

  describe('Can delete', function () {

    beforeEach(function () {
      element(by.model('todo.newTask')).sendKeys('Get Milk');
      addTaskBtn.click();
      element(by.model('todo.newTask')).sendKeys('Walk Dog');
      addTaskBtn.click();
    });

    it('individual tasks', function () {
      checkBox.click();
      element(by.id('deletetask')).click();
      expect(element(by.id('total')).getText()).toEqual('1 Tasks Active');
    });

    it('multiple tasks', function () {
      allCheckBoxes.click();
      element(by.id('deletetask')).click();
      expect(element(by.id('total')).getText()).toEqual('0 Tasks Active');
    });

  });

});
