function forLoop(updateArray) {
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
      updateArray.push(`I am ${i} strange loop.`);
    }
    else {
      updateArray.push(`I am ${i} strange loops.`);
    }
  }

  console.log(updateArray);
  return updateArray;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--;
  }

  return "done";
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while ((array.length > 0) && (maybeTrue()));

  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
