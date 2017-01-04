$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mercury/bdd/register/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Registration Functionality Feature",
  "description": "",
  "id": "registration-functionality-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cphone\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"\u003cAddress\u003e\" and \"\u003cCity\u003e\" and \"\u003cState/Province\u003e\" and \"\u003cPostal Code\u003e\" and \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"\u003cUser Name\u003e\" and \"\u003cPassword\u003e\" and \"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "phone",
        "email",
        "Address",
        "City",
        "State/Province",
        "Postal Code",
        "Country",
        "User Name",
        "Password",
        "Confirm Password"
      ],
      "line": 13,
      "id": "registration-functionality-feature;register-functionality;;1"
    },
    {
      "cells": [
        "Sachin",
        "Patil",
        "98020246076",
        "sachinp@gmail.com",
        "Singhgad",
        "Pune",
        "Maharashtra",
        "412245",
        "2",
        "sachinp",
        "sachin@123",
        "sachin@123"
      ],
      "line": 14,
      "id": "registration-functionality-feature;register-functionality;;2"
    },
    {
      "cells": [
        "Shiva",
        "Pandey",
        "98020247676",
        "shivap@gmail.com",
        "Kalyani Nagar",
        "Pune",
        "Maharashtra",
        "412265",
        "146",
        "shivap",
        "shiva@123",
        "shiva@123"
      ],
      "line": 15,
      "id": "registration-functionality-feature;register-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"Sachin\" and \"Patil\" and \"98020246076\" and \"sachinp@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"Singhgad\" and \"Pune\" and \"Maharashtra\" and \"412245\" and \"2\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"sachinp\" and \"sachin@123\" and \"sachin@123\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8469673031,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.User_navigates_Registration_Page()"
});
formatter.result({
  "duration": 1404421023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 36
    },
    {
      "val": "Patil",
      "offset": 49
    },
    {
      "val": "98020246076",
      "offset": 61
    },
    {
      "val": "sachinp@gmail.com",
      "offset": 79
    }
  ],
  "location": "TestRegister.User_enters_Contact_information(String,String,String,String)"
});
formatter.result({
  "duration": 936120652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Singhgad",
      "offset": 36
    },
    {
      "val": "Pune",
      "offset": 51
    },
    {
      "val": "Maharashtra",
      "offset": 62
    },
    {
      "val": "412245",
      "offset": 80
    },
    {
      "val": "2",
      "offset": 93
    }
  ],
  "location": "TestRegister.User_enters_Mailing_information(String,String,String,String,String)"
});
formatter.result({
  "duration": 577931274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sachinp",
      "offset": 33
    },
    {
      "val": "sachin@123",
      "offset": 47
    },
    {
      "val": "sachin@123",
      "offset": 64
    }
  ],
  "location": "TestRegister.User_enters_User_information(String,String,String)"
});
formatter.result({
  "duration": 2485988094,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.Message_displayed()"
});
formatter.result({
  "duration": 121244,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Register Functionality",
  "description": "",
  "id": "registration-functionality-feature;register-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to Register Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Contact Information as \"Shiva\" and \"Pandey\" and \"98020247676\" and \"shivap@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Mailing Information as \"Kalyani Nagar\" and \"Pune\" and \"Maharashtra\" and \"412265\" and \"146\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters User Information as \"shivap\" and \"shiva@123\" and \"shiva@123\"",
  "matchedColumns": [
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registered Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TestRegister.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 8355640661,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.User_navigates_Registration_Page()"
});
formatter.result({
  "duration": 1443116583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shiva",
      "offset": 36
    },
    {
      "val": "Pandey",
      "offset": 48
    },
    {
      "val": "98020247676",
      "offset": 61
    },
    {
      "val": "shivap@gmail.com",
      "offset": 79
    }
  ],
  "location": "TestRegister.User_enters_Contact_information(String,String,String,String)"
});
formatter.result({
  "duration": 1090825160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kalyani Nagar",
      "offset": 36
    },
    {
      "val": "Pune",
      "offset": 56
    },
    {
      "val": "Maharashtra",
      "offset": 67
    },
    {
      "val": "412265",
      "offset": 85
    },
    {
      "val": "146",
      "offset": 98
    }
  ],
  "location": "TestRegister.User_enters_Mailing_information(String,String,String,String,String)"
});
formatter.result({
  "duration": 556751627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shivap",
      "offset": 33
    },
    {
      "val": "shiva@123",
      "offset": 46
    },
    {
      "val": "shiva@123",
      "offset": 62
    }
  ],
  "location": "TestRegister.User_enters_User_information(String,String,String)"
});
formatter.result({
  "duration": 2285602290,
  "status": "passed"
});
formatter.match({
  "location": "TestRegister.Message_displayed()"
});
formatter.result({
  "duration": 54755,
  "status": "passed"
});
});