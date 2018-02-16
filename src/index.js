( function(exports){

  function init(){
    //instantiates everything
    // var HTMLelement = null;
    var noteList = new NoteList();
    noteList.createNote('Favourite drink: sweet cold Milo Ice');
  var singleNoteView = new SingleNoteView(noteList.notes[0]);
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteView);
    noteController.insertHtml();
  }
  exports.init = init;
})(this)
