(function(exports){

  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  NoteList.prototype.createNote = function (text) {
    var note = new Note(text);
    this.storeNote(note);
  };

  NoteList.prototype.storeNote = function(note){
    this.notes.push(note)
  }

  exports.NoteList = NoteList;

})(this)
