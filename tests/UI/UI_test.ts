Feature('UI');

Scenario('Create a new todo', ({ I }) => {
    I.say('Given I don\'t have any todos');
    I.haveNoTodo();
    
    I.say('When I create a todo');
    I.createTodo('First todo');
    
    I.say('Then I should see the todo in my list');
    I.seeElementInDOM('$todo-item'); // Verify the todo element exists
    I.seeElement('$footer'); // Verify the footer is visible
    I.seeTodo('First todo'); // Verify the todo text is displayed
});

Scenario('Delete an existing todo item', ({ I }) => {
    I.say('Given I have one todo');
    I.haveOneTodo();
    
    I.say('When I delete the todo');
    I.deleteTodo('Premade todo 1');
    
    I.say('Then I should not see it in my list');
    I.dontSee('Premade todo 1');
});

Scenario('Handle character escaping - Bug', ({ I }) => {
    I.say('Given I don\'t have any todos');
    I.haveNoTodo();
    
    I.say('When I create a todo with special characters');
    I.createTodo('Problem with special characters - "');
    
    I.say('Then I should see the todo with properly escaped characters');
    I.seeTodo('Problem with special characters - "');
});

Scenario('Mark a todo item as complete', ({ I }) => {
    I.say('Given I have one todo');
    I.haveOneTodo();
    
    I.say('When I mark my todo as complete');
    I.completeTodo('Premade todo 1');
    
    I.say('Then I should see the todo marked as complete');
    I.seeTodoIsComplete('Premade todo 1');
});

Scenario('Mark all todo items as complete', ({ I }) => {
    I.say('Given I have four todos');
    I.haveFourTodo();

    I.say('When I click "Complete all"');
    I.clickCompleteAll();

    I.say('Then I should see only uncompleted todos');
    I.seeNumberOfTodo(4);
    I.seeTodoIsComplete('Premade todo 1');
    I.seeTodoIsComplete('Premade todo 2');
    I.seeTodoIsComplete('Premade todo 3');
    I.seeTodoIsComplete('Premade todo 4');
});


Scenario('Mark some todo items as complete and use filters', ({ I }) => {
    I.say('Given I have four todos')
    I.haveFourTodo();

    I.say('When I complete 2 of them and click "Active"');
    I.completeTodo('Premade todo 1');
    I.completeTodo('Premade todo 3');
    I.clickActive();

    I.say('Then I filtered only uncomleted todos');
    I.seeNumberOfTodo(2);
    I.seeTodo('Premade todo 2');
    I.seeTodo('Premade todo 4');
    I.dontSeeTodo('Premade todo 1');
    I.dontSeeTodo('Premade todo 3');
});

Scenario('Mark some todo items as complete and click "Clear completed"', ({ I }) => {
    I.say('Given I have four todos');
    I.haveFourTodo();

    I.say('When I complete 2 of them and click "Clear completed"');
    I.completeTodo('Premade todo 1');
    I.completeTodo('Premade todo 3');
    I.clickClearCompleted();

    I.say('Then I see the remaining uncompleted todos');
    I.seeTodo('Premade todo 2');
    I.seeTodo('Premade todo 4');
    I.verifyTodoDoesNotExist('Premade todo 1');
    I.verifyTodoDoesNotExist('Premade todo 3');
});

Scenario('Update todo', ({ I }) => {
    I.say('Given I have two todos');
    I.haveTwoTodo();

    I.say('When I Update one of them')
    I.updateTodo('Premade todo 1', ' Updated');

    I.say('Then I should see two todos, and one of them is updated')
    I.seeNumberOfTodo(2);
    I.verifyTodoExists('Premade todo 1 Updated');
    I.verifyTodoDoesNotExist('Premade todo 1');
});