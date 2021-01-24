# JS-Password-Generator

Password Generated created in Javascript

## Contents of Project

This project contains an index.html file, script.js file, and style.css file. To preview the project, click the link next to the description.

## Goals for Project

The project was designed for the following user story:

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## The Acceptance Criteria 

The Acceptance Criteria are as follows: 

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Satisfying the Acceptance Criteria

To satisfy the first criteria, a button was created in HTML and set up so that, when clicked, would fire the password generator script. 

To satisfy the second, third, and fourth criteria, a series of prompts are used to determine what kinds of characters the user wants to include as well as how many characters in the password are desired.

To satisfy the fifth criteria, the character prompts are checked to see if all are false. If so, the questions are asked again. The password length prompt checks for input above or below a certain threshold as well as NaN, null, and inputs that are not numbers.

To satisfy the sixth criteria, four character arrays are created with uppercase letters, lowercase letters, special characters, and numbers. Arrays to be included in password generation are pushed into an array. A loop is run for the length of the password, and two random numbers are generated. The first random number chooses which character array will be used and the second chooses a random charcter from the selected array. The character is then concatenated into a password string variable.

To satisfy the seventh criteria, the script modifies the HTML page to display the password after the password has been generated.

## Issues

The password length prompt does not check for undefined lengths. Attempts to correct this created an infinite loop. A possible workaround would be to use a form with a number box, which would keep incoming values as numbers within a predefined range.

## Future Developments

Along with the previous idea of using a form with a number box, there are other improvements that could be made outside of the scope of the assignment

Checkboxes could be used to select what kinds of values should be included in the password generation and a text area box could be used for password display. Approrpriate form aria attributes could also be used to improve the accessibility of the page.

The HTML page could also be modified to be more inline with any potential portfolio website. 

A second button could also be added to copy the contents of the password into the clipboard.
