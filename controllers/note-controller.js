(function(exports){
  function NoteController(noteList, noteView){
    this.noteList = noteList;
    this.noteView = noteView;
  }

  NoteController.prototype.insertHtml = function() {
    document.getElementById('app').innerHTML = this.noteView.createHTML();
  };

  exports.NoteController = NoteController;

})(this)
