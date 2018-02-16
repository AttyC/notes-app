(function(exports){

  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.createSingleNoteHtml = function () {
    return this.note.text.slice(0,19);
  };

  exports.SingleNoteView = SingleNoteView;

})(this)
