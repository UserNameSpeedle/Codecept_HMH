const { I } = inject();

export = {

  onHomePage: function() {
    I.amOnPage('/');
    I.seeTextEquals('todos', '//h1');
    I.seeElement('$text-input');
    I.dontSeeElement('$footer');
  },

  createTodo: function(todo) {
    I.fillField('$text-input', todo);
    I.pressKey('Enter');
  },

  seeTodo: function(todo) {
    I.see(todo, '$todo-item-label');
  },

}
