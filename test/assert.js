var assert = {
  isTrue: function(assertionToCheck, name) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + name + " " + assertionToCheck);
    } else {
      console.log('Test Passed: ' + name);
    }
  }
}
