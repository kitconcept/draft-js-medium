*** Variables ***

${HOST}                 127.0.0.1
${PORT}                 3000
${BROWSER}              chrome
${SERVER}               http://${HOST}:${PORT}


*** Settings ***

Documentation   draft-js-medium Acceptance Tests
Library         Selenium2Library  timeout=10  implicit_wait=0
Test Setup      Test Setup
Test Teardown   Test Teardown


*** Test Cases ***

Scenario: As a user I can see a rich text editing field
  Go To  ${SERVER}
  Wait until page contains  Draft.js Medium
  Page should contain  Draft.js Medium

*** Keywords ***

Test Setup
  ${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
  Call Method  ${options}  add_argument  headless
  Call Method  ${options}  add_argument  disable-extensions
  Call Method  ${options}  add_argument  start-maximized
  Create WebDriver  Chrome  chrome_options=${options}

Test Teardown
  Close Browser
