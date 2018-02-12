(function(exports){

  // Stores an array of note models.
  function testNoteListModelContainsEmptyArray(){

    var noteListModel = new NoteListModel();
    assert.isTrue(noteListModel.notes.length === 0);
  }
  testNoteListModelContainsEmptyArray();

  // Has a method that will return all the note models stored in the array.
  function testNoteListModelReturnsAllNoteModelsInArray(){

    var noteListModel = new NoteListModel();
    var arr = noteListModel.notes;

    assert.isTrue(noteListModel.getNotes.length === arr.length);
  }
  testNoteListModelReturnsAllNoteModelsInArray();

  // Has a method that creates and stores a new single note model.
  // This function takes as an argument a string that will be the value of the
  // text property of the note e.g. "Favourite drink: seltzer".

  function testNoteListModelStoresSingleNoteModel(){

    var noteListModel = new NoteListModel();
    noteListModel.createNote('Favourite drink: seltzer')

    assert.isTrue(noteListModel.notes[0].text === 'Favourite drink: seltzer');
  }
  testNoteListModelStoresSingleNoteModel();

})(this)
