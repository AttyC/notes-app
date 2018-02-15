// The note controller has a method that gets HTML from the
// note list view and inserts it into the app element.

(function(){

  // Stores an array of note models.
  function testNoteControllerHasNoteList(){

    var mockNoteListView = {
     createHTML: function() { return "<ul><li><Favourite drink: seltzer</li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView);
    assert.isTrue(noteController.noteList !== null, 'NoteController has NoteList');
  }
  testNoteControllerHasNoteList();

  function testCreateHtml(){
    var mockElement = {
      innerHTML : ""
    };

    var mockNoteListView = {
     createHTML: function() { return "<ul><li><Take dog to vet</li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView, mockElement);
    noteController.insertHtml();
    assert.isTrue( mockElement.innerHTML == "<ul><li>Take dog to vet</li></ul>", 'createHtml returns correct value');
  }
  testCreateHtml();



})(this)
  //
  //
  // var mockElement = {
  //   innerHTML : null
  // }
