(function(exports) {

  function testNoteContainsText() {
    var note =  new Note();

    assert.isTrue(note.text === 'My favourite language is JavaScript');
  }
  testNoteContainsText();

})(this);
