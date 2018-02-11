(function(exports){

  function NoteListModel(){
    this.notes = [];
  };

  NoteListModel.prototype.getNotes = function () {

    return this.notes;

  };

  exports.NoteListModel = NoteListModel;

})(this)
