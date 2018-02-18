(function(){

  function testSingleNoteViewContainsNoteModel(){
    var mockNote = {
      text : 'test note model - this is as much fun as cheese'
    }
    var singleNoteView = new SingleNoteView(mockNote);
    assert.isTrue(singleNoteView.noteList !== null, 'Single Note View has Note List');
  }
  testSingleNoteViewContainsNoteModel();

  function testSingleNoteViewReturnsNoteText20Chars() {

    var mockNote = {
      text : "rollercoasters happen to be the fun way to travel"
    }
    var singleNoteView = new SingleNoteView(mockNote);
    assert.isTrue(singleNoteView.createSingleNoteHtml() === "rollercoasters happ", 'Single Note View returns first 20 chars of Note text');
  }
  testSingleNoteViewReturnsNoteText20Chars();

})()
