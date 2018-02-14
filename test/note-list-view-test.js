(function(exports){

  function testNoteListViewHasNoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('This is an HTML test');
    noteListView.noteList.createNote('Blah test');
    noteListView.noteList.createNote('Sweet test');
    noteListView.createHTML(noteList);

    assert.isTrue(noteListView.noteList.notes[2].text == "Sweet test", 'Note List View has NoteList');

  }
  testNoteListViewHasNoteList();

  function testNoteListViewReturnsHtmlStringWithMultipleNotes(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('This is an HTML test');
    noteListView.noteList.createNote('Blah test');
    noteListView.noteList.createNote('Sweet test');

    assert.isTrue(noteListView.createHTML() === ('<ul><li>This is an HTML test</li><li>Blah test</li><li>Sweet test</li></ul>'), 'NoteListView returns Html string with multiple notes');
  }
  testNoteListViewReturnsHtmlStringWithMultipleNotes();

  function testNoteListViewWithZeroNotesDoesNotReturnHtmlString(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    ;
    assert.isTrue(noteListView.createHTML() === '', 'NoteListView with Zero Notes does not return Html string');

  }
  testNoteListViewWithZeroNotesDoesNotReturnHtmlString();

  function testNoteListViewReturnsHtmlStringWithOneNote(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('This is an HTML test');

    assert.isTrue(noteListView.createHTML() === ('<ul><li>This is an HTML test</li></ul>'), 'NoteListView returns Html string with one Note');

  }
  testNoteListViewReturnsHtmlStringWithOneNote();

})(this)
