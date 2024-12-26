import todo from "../pages/todo";

const { I, todoPage } = inject();

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
  I.seeTodo('First todo');
});

Given('I am on Home Page calling Page Object', () => {
  todoPage.onHomePage();
});

When('I create a todo calling Page Object', () => {
  todoPage.createTodo('First todo');
});

Then('I see my todo in the list calling Page Object', () => {
  todoPage.seeTodo('First todo');
});