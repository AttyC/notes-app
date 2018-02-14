(function(exports){
  function NoteController(noteList, noteView, HTMLelement){
    this.noteList = noteList;
    this.noteView = noteView;
    this.HTMLelement = HTMLelement;
  }

  NoteController.prototype.insertHtml = function() {
    this.HTMLelement.innerHTML = this.noteView.createHTML();
  };

  exports.NoteController = NoteController;

})(this)
