const { I } = inject();

export = {

  onHomePage: function() {
    I.amOnPage('/');
    I.seeTextEquals('todos', '//h1');
    I.seeElement('$text-input');
    I.dontSeeElement('$footer');
  },

  createTodo: function(todo) { // TODO: pass array with strings to create multiple todos
    I.fillField('$text-input', todo); 
    I.pressKey('Enter');
  },

  seeTodo: function(todo) {
    I.see(todo, '$todo-item-label');
  },

  deleteTodo: function(todo) {
    I.moveCursorTo('//label[text()="' + todo + '"]');
    I.click('//label[text()="' + todo + '"]/../button');
  },

  dontSeeTodo: function(todo) {
    I.dontSeeElementInDOM('//label[text()="' + todo + '"]');
  },

  completeTodo: function(todo) {
    I.click('//label[text()="'+ todo + '"]/../input');
  },
 
  seeTodoIsComplete: function(todo) {
    I.seeCheckboxIsChecked('//label[text()="' + todo + '"]/../input');
  },
  
  updateTodo: function(oldTodo, diff) {
    I.doubleClick('//label[text()="' + oldTodo + '"]');
    I.type(diff);
    I.pressKey('Enter');
  },

}
