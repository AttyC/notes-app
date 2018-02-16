( function(exports){

  function init(){
    //instantiates everything
    // var HTMLelement = null;
    var noteList = new NoteList();
    noteList.createNote('Favourite drink: sweet cold Milo Ice');
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteView);
    var singleNoteView = new SingleNoteView(notelist.note);
    noteController.insertHtml();
  }
  exports.init = init;
})(this)
