(function(){

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

  function testNoteListViewReturnsHtmlStringWithOneNote(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('Note with lots of silly text in it!');

    assert.isTrue(noteListView.createHTML() ===
    ("<ul><li><a href='http://localhost:8080#notes/0'>Note with lots of s</a></li></ul>"), 'Note list view returns Link');
  }
  testNoteListViewReturnsHtmlStringWithOneNote();

  function testNoteListViewReturnsHtmlStringWithMultipleNotes(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteListView.noteList.createNote('Note with lots of silly text in it!');
    noteListView.noteList.createNote('Blah test with some more words to check length');
    noteListView.noteList.createNote('Sweet test sweets sweetie, for fun');

    assert.isTrue(noteListView.createHTML() ===
    ("<ul><li><a href='http://localhost:8080#notes/0'>Note with lots of s</a></li><li><a href='http://localhost:8080#notes/1'>Blah test with some</a></li><li><a href='http://localhost:8080#notes/2'>Sweet test sweets s</a></li></ul>"), 'NoteListView returns Html string with multiple notes and IDs');
  }
  testNoteListViewReturnsHtmlStringWithMultipleNotes();

  function testNoteListViewWithZeroNotesDoesNotReturnHtmlString(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);

    assert.isTrue(noteListView.createHTML() === '', 'NoteListView with 0 notes does not return Html string');

  }
  testNoteListViewWithZeroNotesDoesNotReturnHtmlString();

})()
