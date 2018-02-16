(function(exports){

  function Note(text){
    this.text = text;
  };

  Note.prototype.getID = function (note) {
    this.id = note.id;
  };
  exports.Note = Note;

})(this);
