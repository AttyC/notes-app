(function(exports){

  function NoteController(noteListView, element = document.getElementById('app')){
    this.noteView = noteListView;
    this.element = element;
  }

  NoteController.prototype.insertHtml = function () {
    this.element.innerHTML = this.noteView.createHTML();
  }

  NoteController.prototype.changeUrl = function(noteList){
    window.addEventListener('hashchange', function () {
      this.noteList = noteList;
      var id = location.hash.split("#notes/")[1];
      document
        .getElementById("show")
        .innerHTML = this.noteList.notes[id].text;
    }, false);
  }

  NoteController.prototype.formSubmit = function(noteController, noteList){

    document.getElementById('text-form').addEventListener('submit', function (event) {
      this.noteController = noteController;
      this.noteList = noteList;
      event.preventDefault();
      var textContent = document.getElementById("text").value;
      document.getElementById("text").value = '';
      this.noteList.createNote(textContent);
      noteController.insertHtml();
    }, false);

  }

  exports.NoteController = NoteController;

})(this)
