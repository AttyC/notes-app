( function(exports){

  function init(){
    //instantiates everything
    // var HTMLelement = null;
    var noteList = new NoteList();
    noteList.createNote('Favourite drink: sweet cold Milo Ice');
    noteList.createNote('Blah test with some more words to check length');
    noteList.createNote('Sweet test sweets sweetie, for fun');
    var singleNoteView = new SingleNoteView(noteList.notes[0]);
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteView);
    noteController.insertHtml();
  }
  exports.init = init;
})(this)
