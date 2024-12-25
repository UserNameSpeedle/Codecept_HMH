export = function() {
  return actor({
    
    haveNoTodo: function() {
      this.amOnPage('/');

    },

    haveOneTodo: function() {
      this.amOnPage('/');
      this.createTodo('Premade todo 1');
      this.seeNumberOfTodo(1);
    },

    haveTwoTodo: function() {
      this.amOnPage('/');
      this.createTodo('Premade todo 1');
      this.createTodo('Premade todo 2');
      this.seeNumberOfTodo(2);
    },

    haveFourTodo: function() {
      this.amOnPage('/');
      this.createTodo('Premade todo 1');
      this.createTodo('Premade todo 2');
      this.createTodo('Premade todo 3');
      this.createTodo('Premade todo 4');
      this.seeNumberOfTodo(4);
    },

    createTodo: function(todo) {
      this.fillField('$text-input', todo);
      this.pressKey('Enter');
    },

    updateTodo: function(oldTodo, newTodo) {
      this.doubleClick('//label[text()="' + oldTodo + '"]');
      this.type(newTodo);
      this.pressKey('Enter');
    },

    deleteTodo: function(todo) {
      this.moveCursorTo('//label[text()="' + todo + '"]');
      this.click('//label[text()="' + todo + '"]/../button');
    },
    
    seeTodo: function(todo) {
      this.see(todo, '$todo-item-label');
    },

    seeNumberOfTodo: function(number) { // Visible elements
      this.seeNumberOfVisibleElements('$todo-item', number);
    },

    dontSeeTodo: function(todo) {
      this.dontSeeElement('//label[text()="' + todo + '"]');
    },

    verifyTodoExists: function(todo) {
      this.seeElementInDOM('//label[text()="' + todo + '"]');
    },
  
   verifyTodoDoesNotExist: function(todo) {
      this.dontSeeElementInDOM('//label[text()="' + todo + '"]');
    },

    completeTodo: function(todo) {
      this.click('//label[text()="'+ todo + '"]/../input');
    },

    clickCompleteAll: function() {
      this.click('$toggle-all');
    },

    seeTodoIsComplete: function(todo) {
      this.seeCheckboxIsChecked('//label[text()="' + todo + '"]/../input');
    },

    clickActive:  function() {
      this.click('//a[text()="Active"]');
    },

    clickClearCompleted:  function() {
      this.click('//button[@class="clear-completed"]');
    },

  });
}
