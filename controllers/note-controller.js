(function(exports){

  function NoteController(noteListView, element = document.getElementById('app')){
    this.noteView = noteListView;
    this.element = element;
  }

  NoteController.prototype.insertHtml = function () {
    this.element.innerHTML = this.noteView.createHTML();
  }
  exports.NoteController = NoteController;

})(this)
