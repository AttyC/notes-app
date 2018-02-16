(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  };

  NoteListView.prototype.createHTML = function () {

    var htmlString = '';
    if( this.noteList.notes.length > 0 ) {
      htmlString = '<ul>';
      this.noteList.notes.map(function(note){
        htmlString += `<li><a href='http://localhost:8080#notes/${note.id}'>${note.text.slice(0,19)}</a></li>`;
      });
      htmlString += '</ul>';
    }
    return htmlString;
  };
  exports.NoteListView = NoteListView;

})(this)
