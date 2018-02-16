(function(exports){

  function testNoteListViewHasNoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('Note with lots of silly text in it!');
    noteListView.noteList.createNote('Blah test with some more words to check length');
    noteListView.noteList.createNote('Sweet test sweets sweetie, for fun');
    noteListView.createHTML(noteList);

    assert.isTrue(noteListView.noteList.notes[2].text == "Sweet test sweets sweetie, for fun", 'Note List View has NoteList');

  }
  testNoteListViewHasNoteList();

  function testNoteListViewReturnsHtmlStringWithMultipleNotes(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('Note with lots of silly text in it!');
    noteListView.noteList.createNote('Blah test with some more words to check length');
    noteListView.noteList.createNote('Sweet test sweets sweetie, for fun');

    assert.isTrue(noteListView.createHTML() ===
    ("<ul><li>Note with lots of s</li><li>Blah test with some</li><li>Sweet test sweets s</li></ul>"), 'NoteListView returns Html string with multiple notes');
  }
  testNoteListViewReturnsHtmlStringWithMultipleNotes();

  function testNoteListViewWithZeroNotesDoesNotReturnHtmlString(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.createHTML() === '', 'NoteListView with Zero Notes does not return Html string');

  }
  testNoteListViewWithZeroNotesDoesNotReturnHtmlString();

  function testNoteListViewReturnsHtmlStringWithOneNote(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('Note with lots of silly text in it!');

    assert.isTrue(noteListView.createHTML() === ('<ul><li>Note with lots of s</li></ul>'), 'NoteListView returns Html string with one Note');

  }
  testNoteListViewReturnsHtmlStringWithOneNote();

})(this)
