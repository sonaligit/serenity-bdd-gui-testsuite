$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/serviceFeatures/login.feature");
formatter.feature({
  "name": "Free CRM application functional test cases",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testTagsToRunInParallel"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "gedam.sonali@gmail.com",
        "Sonali@123"
      ]
    },
    {
      "cells": [
        "pulluri.kittu1@gmail.com",
        "Cts@2017"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@testTagsToRunInParallel"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "info.stepDefinition.LoginDefinitions.user_is_already_on_Login_Page()"
});
