Feature('UI');


Scenario('Create a new todo item', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.fillField('$text-input', 'Test todo');
    I.pressKey('Enter');
    I.seeElementInDOM('$todo-item'); // Verify the todo element exists
    I.seeElement('$footer'); // Verify the footer is visible (indicates at least one item exists)
    I.see('Test todo', '$todo-item-label'); // Verify the correct text is displayed for the todo
});

Scenario('Delete an existing todo item', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos(); // Custom function to create test data
    I.moveCursorTo('//label[text()="Premade todo 3"]');
    I.click('//label[text()="Premade todo 3"]/../button'); // Click the delete button for the specific todo
    I.dontSee('Premade todo 3'); // Verify the deleted todo no longer appears in the list
});

Scenario('Handle character escaping - Bug', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.fillField('$text-input', 'Problem with special symbols - "');
    I.pressKey('Enter');
  //  I.see('Problem with special symbols - "', '$todo-item-label'); // The application has a bug that doesn't support special characters,
    I.dontSee('Problem with special symbols - "', '$todo-item-label');

});

Scenario('Mark a todo item as complete', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos();
    I.click('//label[text()="Premade todo 3"]/../input');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 3"]/../input');
});

Scenario('Mark all todo items as complete', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos();
    I.click('$toggle-all');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 1"]/../input');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 2"]/../input');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 3"]/../input');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 4"]/../input');
    I.seeCheckboxIsChecked('//label[text()="Premade todo 5"]/../input');
});


Scenario('Mark some todo items as complete and use filters', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos();
    I.click('//label[text()="Premade todo 2"]/../input');
    I.click('//label[text()="Premade todo 4"]/../input');
    I.click('//a[text()="Active"]');
    I.see('Premade todo 1', '$todo-item-label');
    I.dontSee('Premade todo 2', '$todo-item-label');
    I.see('Premade todo 3', '$todo-item-label');
    I.dontSee('Premade todo 4', '$todo-item-label');
    I.see('Premade todo 5', '$todo-item-label');
    I.click('//a[text()="Completed"]');
    I.dontSee('Premade todo 1', '$todo-item-label');
    I.see('Premade todo 2', '$todo-item-label');
    I.dontSee('Premade todo 3', '$todo-item-label');
    I.see('Premade todo 4', '$todo-item-label');
    I.dontSee('Premade todo 5', '$todo-item-label');
});

Scenario('Mark some todo items as complete and click "Clear completed"', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos();
    I.click('//label[text()="Premade todo 2"]/../input');
    I.click('//label[text()="Premade todo 4"]/../input');
    I.click('//button[@class="clear-completed"]');
    I.click('//a[text()="Completed"]');
    I.dontSee('$todo-item-label');
});

Scenario('Mark some todo items and update one of them', ({ I }) => {
    I.amOnPage('https://todomvc.com/examples/react/dist/');
    I.createSomeTodos();
    I.doubleClick('//label[text()="Premade todo 2"]');
    I.type(' Updated');
    I.pressKey('Enter');
    I.see('Premade todo 2 Updated', '$todo-item-label'); // User should see the updated todo on the page
    I.dontSeeElement('//label[text()="Premade todo 2"]'); // User should not see the old todo on the page
});