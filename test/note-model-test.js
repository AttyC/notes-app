(function(exports) {

  function testNoteContainsText() {
    var note =  new NoteModel('My favourite language is JavaScript');

    assert.isTrue(note.text === 'My favourite language is JavaScript');
  }
  testNoteContainsText();

})(this);
