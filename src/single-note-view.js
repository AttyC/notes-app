(function(exports){

  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.createSingleNoteHtml = function () {
    return this.note.text;
  };

  exports.SingleNoteView = SingleNoteView;

})(this)
