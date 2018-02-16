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
    this.notes.push(note);
    this.addID(note);
  }

  NoteList.prototype.addID = function (note) {
    var index = this.notes.indexOf(note);
    this.notes[index].id = index;
    note.getID(note);
  };

  exports.NoteList = NoteList;

})(this)
