const { I } = inject();

Given('I am on Home Page', () => {
  I.amOnPage('/');
  I.seeTextEquals('todos', '//h1');
  I.seeElement('$text-input');
  I.dontSeeElement('$footer');
});

When('I create a todo', () => {
  I.createTodo('First todo');
});

Then('I see my todo in the list', () => {
  I.seeElement('$footer');
  I.seeTodo('First todo');
});