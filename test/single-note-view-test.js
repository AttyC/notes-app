(function(){

  function testSingleNoteViewContainsNoteModel(){
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
