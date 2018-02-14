(function(exports){

  //instantiates everything
  this.noteList = new NoteList();
  this.noteView = new NoteListView(this.noteList);
  this.noteController = new NoteController(this.noteList, this.noteView);
})(this)
