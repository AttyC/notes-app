( function(exports){
  function init(){

    var noteList = new NoteList();
    noteList.createNote('Favourite drink: sweet cold Milo Ice');
    noteList.createNote('Blah test with some more words to check length');
    noteList.createNote('Sweet test sweets sweetie, for fun');
    var singleNoteView = new SingleNoteView(noteList.notes[0]);
    var noteView = new NoteListView(noteList);
    var noteController = new NoteController(noteView);
    noteController.insertHtml();

    window.addEventListener('hashchange', function () {
      var id = location.hash.split("#notes/")[1];
      document
        .getElementById("show")
        .innerHTML = noteList.notes[id].text;
    }, false);

  }
  exports.init = init;
})(this)
