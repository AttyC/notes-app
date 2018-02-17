(function(){

  // Stores an array of note models.
  function testNoteControllerHasNoteList(){

    var mockNoteListView = {
     createHTML: function() { return "<ul><li>Favourite drink: sweet cold Milo Ice</li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView);
    assert.isTrue(noteController.noteList !== null, 'NoteController has Note list');
  }
  testNoteControllerHasNoteList();

  function testCreateHtml(){
    var mockElement = {
      innerHTML : ""
    };

    var mockNoteListView = {
     createHTML: function() { return "<ul><li><a href='http://localhost:8080#notes/0'>Take dog to vet</a></li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView, mockElement);

    noteController.insertHtml();
    assert.isTrue( mockElement.innerHTML === "<ul><li><a href='http://localhost:8080#notes/0'>Take dog to vet</a></li></ul>", 'createHtml returns correct value');
  }
  testCreateHtml();

// Using TDD, update your note-controller.js to load content for the single note page.
// The note controller code should listen for hashchange events. When one happens,
// if the new browser URL is for a single note page, it should change the content
// of the app element to be the HTML for that note.

  function testLoadContentSinglePage() {
    var mockElement = {
      innerHTML : ""
    };

    var mockNoteListView = {
     createHTML: function() { return "<ul><li><a href='http://localhost:8080#notes/0'>Take dog to vet</a></li><li><a href='http://localhost:8080#notes/1'>Put cat on bed</a></li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView, mockElement);
    noteController.insertHtml();
    var mockShowSingleNotePage = {

    }
    // noteController.showSingleNotePage();
    //
    // var hashChg = {
    //   location : 'http://localhost:8080#notes/1'
    // }
    assert.isTrue(mockElement.innerHTML === "<li><a href='http://localhost:8080#notes/1'>Put cat on bed</a></li>", 'Load content for single page');
  }
  testLoadContentSinglePage()

})(this)
