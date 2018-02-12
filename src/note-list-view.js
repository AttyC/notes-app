(function(exports){

  function NoteListView(model){
    this.model = model;
    this.noteList = [];
  };

  NoteListView.prototype.createHTML = function (model) {

    if( model.notes.length > 0 ) {
      var htmlString = '<ul><li>';
      var htmlEnd = '</li></ul>';
      var notes = model.notes;

      var notesArray = notes.map(function(note){
        return note.text;
      });

      notesArray = notesArray.join('</li><li>');
      this.noteList = htmlString.concat(notesArray, htmlEnd);
    }
    this.noteList;

  };
  exports.NoteListView = NoteListView;

})(this)
