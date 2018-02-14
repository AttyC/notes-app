(function(exports){
  // Stores an array of note models.
  function testNoteControllerHasNoteList(){
    var noteList = new NoteList();
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, noteView);
    assert.isTrue(noteController.noteList !== null, 'NoteController has NoteList');
  }
  testNoteControllerHasNoteList();



  function testCreateHtml(){
    var mockElement = {
      innerHtml : "hello"
    };

    var noteList = new NoteList();
    noteList.createNote('Take dog to vet');
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteList, noteView, mockElement);
    noteController.insertHtml();
    assert.isTrue( target.innerHTML === '<ul><li>Take dog to vet</li></ul>', 'createHtml returns correct value');
  }
  testCreateHtml();
})(this)
