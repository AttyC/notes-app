
// The single note view has a method that, when called,
// returns a string of HTML that represents the note model.
// For example: <div>Favourite drink: seltzer</div>.
(function(){

  function testSingleNoteViewContainsNoteModel(){
    debugger;
    var mockNote = {
      text : 'test note model - this is as much fun as cheese'
    }
    var singleNoteView = new SingleNoteView(mockNote);
    assert.isTrue(singleNoteView.noteList !== null, 'Single Note View has Note List');
  }
  testSingleNoteViewContainsNoteModel();

  function testSingleNoteViewReturnsNoteText() {
    var mockNote = {
      text : 'test note model - this is as much fun as rollercoasters'
    }
    var singleNoteView = new SingleNoteView(mockNote);
    assert.isTrue(singleNoteView.createSingleNoteHtml() === "test note model - this is as much fun as rollercoasters", 'Single Note View returns Note Text');
  }
  testSingleNoteViewReturnsNoteText();

})(this)
