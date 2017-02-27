function shouter(whatToShout) {
  var shout = 'FEE FIGH FOE FUM';
  var newshout = whatToShout.toUpperCase();
  if (shout === newshout) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE:`shouter` is not working');
      }
  }


shouter('FEE FIGH FOE FUM');
