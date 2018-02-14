(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.createHTML = function () {

    var htmlString = '';

    if( this.noteList.notes.length > 0 ) {
      htmlString = '<ul>';

      this.noteList.notes.map(function(note){
        htmlString += '<li>' + note.text + '</li>';
      });
      htmlString += '</ul>';

    }
      return htmlString;
  };

  exports.NoteListView = NoteListView;

})(this)
