( function(exports){
  function init(){

    var noteList = new NoteList();
    var singleNoteView = new SingleNoteView(noteList.notes[0]);
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteView);
    noteController.insertHtml();
    noteController.changeUrl(noteList);
    noteController.formSubmit(noteController, noteList);
  }
  exports.init = init;
})(this)
