(function() {

  function testNoteContainsText() {
    var note =  new Note('My favourite language is JavaScript');
    assert.isTrue(note.text === 'My favourite language is JavaScript', 'Note Contains Text');
  }
  testNoteContainsText();

})();
