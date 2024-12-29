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

Given('I have one todo', () => {
  todoPage.onHomePage();
  todoPage.createTodo('First todo');
});

When('I delete the todo', () => {
  todoPage.deleteTodo('First todo');
});

Then('I don\'t see it on my todo list', () => {
  todoPage.dontSeeTodo('First todo');
});

When('I mark my todo as complete', () => {
  todoPage.completeTodo('First todo');
});

Then('I see the todo marked as complete', () => {
  todoPage.seeTodoIsComplete('First todo');
});

When('I update my todo', () => {
  todoPage.updateTodo('First todo', ' updated')
});

Then('I see my todo is updated', () => {
  todoPage.seeTodo('First todo updated');
});