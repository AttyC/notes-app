(function(exports){

  function NoteListModel(){
    this.notes = [];
  };

  NoteListModel.prototype.getNotes = function () {
    return this.notes;
  };

  NoteListModel.prototype.createNote = function (text) {
    var note = new NoteModel(text);
    this.storeNote(note);
  };

  NoteListModel.prototype.storeNote = function(note){
    this.notes.push(note)
  }

  exports.NoteListModel = NoteListModel;

})(this)
