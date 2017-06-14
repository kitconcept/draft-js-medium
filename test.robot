*** Variables ***

${HOST}                 127.0.0.1
${PORT}                 7447
${BROWSER}              chrome
${SERVER}               http://${HOST}:${PORT}


*** Settings ***

Documentation   draft-js-medium Acceptance Tests
Library         Selenium2Library  timeout=10  implicit_wait=0
Test Setup      Test Setup
Test Teardown   Test Teardown


*** Test Cases ***

Scenario: Dummy
  Go To  https://kitconcept.com
  Wait until page contains  kitconcept
  Page Should Contain  kitconcept


*** Keywords ***

Test Setup
  ${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
  Call Method  ${options}  add_argument  disable-web-security
  Call Method  ${options}  add_argument  allow-running-insecure-content
  Call Method  ${options}  add_argument  disable-background-networking
  Call Method  ${options}  add_argument  disable-translate
  Call Method  ${options}  add_argument  no-default-browser-check
  Call Method  ${options}  add_argument  disable-desktop-notifications
  Create WebDriver  Chrome  chrome_options=${options}
  Set Window Size  1280  1024

Test Teardown
  Close Browser
