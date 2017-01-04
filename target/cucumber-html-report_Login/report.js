$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mercury/bdd/login/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Functionality Feature",
  "description": "",
  "id": "login-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page Login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality-feature;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-functionality-feature;login-functionality;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 12,
      "id": "login-functionality-feature;login-functionality;;2"
    },
    {
      "cells": [
        "snehap@cybage.com",
        "cybage@123"
      ],
      "line": 13,
      "id": "login-functionality-feature;login-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page Login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"mercury\" and \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 11680488861,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1289999498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 13
    },
    {
      "val": "mercury",
      "offset": 27
    }
  ],
  "location": "TestLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3740955275,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 27560137,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page Login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"snehap@cybage.com\" and \"cybage@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9098109955,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 1404461600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "snehap@cybage.com",
      "offset": 13
    },
    {
      "val": "cybage@123",
      "offset": 37
    }
  ],
  "location": "TestLogin.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3759052477,
  "status": "passed"
});
formatter.match({
  "location": "TestLogin.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 53775340,
  "status": "passed"
});
});