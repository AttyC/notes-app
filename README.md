# Notes App - Makers Academy - Week 7

Fro the purposes of writing tests and code in JavaScript, test-drive a Notes App using plain JavaScript only (no libraries or frameworks).

## Getting Started

Clone this repo: https://github.com/AttyC/notes-app  
Open in a text editor

### Prerequisites

Install node:  
In your terminal, run:
`$ node -v`  
If you get a message that says `node: command not found`, run:
``$ brew install node`

Install http-server from npm : https://www.npmjs.com/get-npm   
Run http-server to serve index.html.  
Go to http://localhost:8080/ in a browser to view the home page.   

## Running the tests

Tests are in SpecRunner.html, at root level.  
You can open this file locally in your browser (e.g. in terminal, type open SpecRunner.html or open it from your text editor).  

*Then open Console (Cmd + Alt + J on a Mac) to see the test output in the console.*

### All Tests

Tests - test the models and controller.

Note Contains Text  
Note list contains empty array  
Note list returns all NoteLists in array  
NoteList stores single NoteModel  
Note list createNote returns note ID  
Note List View has NoteList  
Note list view returns Link  
NoteListView returns Html string with multiple notes and IDs  
NoteListView with 0 notes does not return Html string  
NoteController has Note list  
createHtml returns correct value  
Single Note View has Note List  
Single Note View returns first 20 chars of Note text  

## Built With

JavaScript (no libraries of frameworks) with the exception of Node.js npm to install http-server.

## Versioning

I use Git for versions
## Authors

* **Antonia Cronin**

## Acknowledgments

* Mark Somerfield for help with flickering js code
* Roland Vink and Sam Wood for discussions around mocking
