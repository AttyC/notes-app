(function(){

  // Stores an array of note models.
  function testNoteControllerHasNoteList(){

    var mockNoteListView = {
     createHTML: function() { return "<ul><li>Favourite drink: sweet cold Milo Ice</li></ul>" }
    };
    var noteController = new NoteController(mockNoteListView);
    assert.isTrue(noteController.noteList !== null, 'NoteController has Note list');
  }
  testNoteControllerHasNoteList();

  // function testCreateHtml(){
  //   var mockElement = {
  //     innerHTML : ""
  //   };
  //
  //   var mockNoteListView = {
  //    createHTML: function() { return "<ul><li><Take dog to vet</li></ul>" }
  //   };
  //   var noteController = new NoteController(mockNoteListView, mockElement);
  //
  //   noteController.insertHtml();
  //   assert.isTrue( mockElement.innerHTML === "<ul><li>Take dog to vet</li></ul>", 'createHtml returns correct value');
  // }
  // testCreateHtml();

})(this)
