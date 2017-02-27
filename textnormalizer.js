function textNormalizer(mytext) {
  var convert = mytext.toLowerCase();
  var shorter = convert.trim();
  var expected = "let's go surfing now everyone is learning how";
 if (shorter === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

textNormalizer("   let's GO SURFING NOW everyone is learning how   ");
