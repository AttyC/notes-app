(function(exports){

  // Stores an array of note models.
  function testNoteListContainsEmptyArray(){

    var noteList = new NoteList();
    assert.isTrue(noteList.notes.length === 0, 'NoteList contains empty array');
  }
  testNoteListContainsEmptyArray();

  // Has a method that will return all the note models stored in the array.
  function testNoteListReturnsAllNoteListsInArray(){

    var noteList = new NoteList();
    var arr = noteList.notes;

    assert.isTrue(noteList.getNotes.length === arr.length, 'NoteList returns all NoteLists in array');
  }
  testNoteListReturnsAllNoteListsInArray();

  // Has a method that creates and stores a new single note model.
  // This function takes as an argument a string that will be the value of the
  // text property of the note e.g. "Favourite drink: seltzer".

  function testNoteListStoresSingleNoteModel(){

    var noteList = new NoteList();
    noteList.createNote('Favourite drink: sweet cold Milo Ice')
    assert.isTrue(noteList.notes[0].text === 'Favourite drink: sweet cold Milo Ice', 'NoteList stores single NoteModel');
  }
  testNoteListStoresSingleNoteModel();

})(this)
