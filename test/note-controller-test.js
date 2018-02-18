(function(){

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
  
})(this)
