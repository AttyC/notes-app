(function(){
  //instantiates everything
  var HTMLelement = null;
  var noteList = new NoteList();
  noteList.createNote('Favourite drink: seltzer');
  var noteView = new NoteListView(noteList);
  var noteController = new NoteController(noteView, HTMLelement);
  noteController.insertHtml();
})()
