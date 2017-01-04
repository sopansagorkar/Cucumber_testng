@Login
Feature: Login Functionality Feature

Scenario Outline: Login Functionality
  Given User is on Home Page Login
  When User Navigate to LogIn Page
  And User enters "<username>" and "<password>"
  Then Message displayed Login Successfully

  Examples: 
    | username          | password  |
    | mercury           | mercury   |
    | snehap@cybage.com | cybage@3|   
   	