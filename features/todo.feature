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