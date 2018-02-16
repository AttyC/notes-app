(function(exports){

  function testNoteListContainsEmptyArray(){

    var noteList = new NoteList();
    assert.isTrue(noteList.notes.length === 0, 'NoteList contains empty array');
  }
  testNoteListContainsEmptyArray();

  function testNoteListReturnsAllNoteListsInArray(){

    var noteList = new NoteList();
    var arr = noteList.notes;

    assert.isTrue(noteList.getNotes.length === arr.length, 'NoteList returns all NoteLists in array');
  }
  testNoteListReturnsAllNoteListsInArray();

  function testNoteListStoresSingleNoteModel(){

    var noteList = new NoteList();
    noteList.createNote('Favourite drink: hot milk with cinnamon')
    assert.isTrue(noteList.notes[0].text === 'Favourite drink: hot milk with cinnamon', 'NoteList stores single NoteModel');
  }
  testNoteListStoresSingleNoteModel();

  function testCreateNoteReturnsNoteID(){

    var noteList = new NoteList();
    noteList.createNote('Favourite drink: hot milk with cinnamon')
    assert.isTrue(noteList.notes[0].id === 0, 'Note list createNote returns note ID');
  }
  testCreateNoteReturnsNoteID();

})(this)
