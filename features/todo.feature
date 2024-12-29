Feature: todo Feature
  In order to track my goals
  As a persona
  I want to keep them in tracker

  Scenario: Create a new todo with gherkin
    Given I am on Home Page
    When I create a todo
    Then I see my todo in the list

  Scenario: Create a new todo calling Page Object
    Given I am on Home Page calling Page Object
    When I create a todo calling Page Object
    Then I see my todo in the list calling Page Object

  Scenario: Delete an existing todo item
    Given I have one todo
    When I delete the todo
    Then I don't see it on my todo list

  Scenario: Mark a todo item as complete
    Given I have one todo
    When I mark my todo as complete
    Then I see the todo marked as complete

  Scenario: Update todo
    Given I have one todo
    When I update my todo
    Then I see my todo is updated