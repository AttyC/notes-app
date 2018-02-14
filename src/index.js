// (function(exports){
//
//   //instantiates everything
//   this.noteList = new NoteList();
//   this.noteView = new NoteListView(this.noteList);
//   this.noteController = new NoteController(this.noteList, this.noteView);
//
// })(this)

(function(){
  //instantiates everything
  var noteList = new NoteList();
  var noteView = new NoteListView(noteList);
  noteList.createNote('Favourite drink: seltzer');
  var noteController = new NoteController(noteList, noteView);
  noteController.insertHtml();

})();
