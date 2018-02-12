// Has a method that, when called,
// returns a string of HTML
// that represents the note list model.
//
// For example: <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.

(function(exports){

  function testNoteListViewHasNoteListModel(){
    var model = new NoteListModel();
    var noteListView = new NoteListView(model);
    noteListView.model.createNote('This is an HTML test');
    noteListView.model.createNote('Blah test');
    noteListView.model.createNote('Sweet test');
    noteListView.createHTML(model);

    assert.isTrue(noteListView.model.notes[2].text == "Sweet test");

  }
  testNoteListViewHasNoteListModel();

  function testNoteListViewReturnsHtmlString(){
    var model = new NoteListModel();
    var noteListView = new NoteListView(model);
    noteListView.model.createNote('This is an HTML test');
    noteListView.model.createNote('Blah test');
    noteListView.model.createNote('Sweet test');
    noteListView.createHTML(model);

    assert.isTrue(noteListView.noteList === ('<ul><li>This is an HTML test</li><li>Blah test</li><li>Sweet test</li></ul>'));
  }
  testNoteListViewHasNoteListModel();
})(this)
