(function(exports){

  // Stores an array of note models.
  function testNoteControllerHasNoteList(){

    var noteController = new NoteController();
    assert.isTrue(noteController.noteList !== null, 'NoteController has NoteList');
  }
  testNoteControllerHasNoteList();
})(this)
