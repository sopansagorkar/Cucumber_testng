@Register
Feature: Registration Functionality Feature

  Scenario Outline: Register Functionality
    Given User is on Home Page
    When User Navigate to Register Page
    And User enters Contact Information as "<firstname>" and "<lastname>" and "<phone>" and "<email>"
    And User enters Mailing Information as "<Address>" and "<City>" and "<State/Province>" and "<Postal Code>" and "<Country>"
    And User enters User Information as "<User Name>" and "<Password>" and "<Confirm Password>"
    Then Message displayed Registered Successfully

    Examples: 
      | firstname | lastname | phone       | email             | Address       | City | State/Province | Postal Code | Country | User Name | Password   | Confirm Password |
      | Sachin    | Patil    | 98020246076 | sachinp@gmail.com | Singhgad      | Pune | Maharashtra    |      412245 |       2 | sachinp   | sachin@123 | sachin@123       |
      | Shiva     | Pandey   | 98020247676 | shivap@gmail.com  | Kalyani Nagar | Pune | Maharashtra    |      412265 |     146 | shivap    | shiva@123  | shiva@123        |
