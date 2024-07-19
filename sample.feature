
Feature: Login functionality

    Scenario: Successful Feature: login
        Given I am on the login page
        When I enter valid username and password
        And I click on the login button
        Then I should be redirected to the dashboard 

    Scenario: Unsuccessful login
        Given I am on the login page
        When I enter invalid username and password
        And I click on the login button
        Then I should see an error message
