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

Scenario: Webpack Dev Server
  Go To  ${SERVER}
  Wait until page contains  Hello World
  Page Should Contain  Hello World


*** Keywords ***

Test Setup
  Open Browser  ${SERVER}  ${BROWSER}
  Set Window Size  1280  1024

Test Teardown
  Close Browser
