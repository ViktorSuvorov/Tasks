// Matrix

function matrix(N) {
  let myMatrix = [],
    rows = (columns = 0),
    steps = N - 1;

  if (typeof N !== "number" || N === 0) alert("Please enter a number");

  for (let i = 0; i < N; i++) myMatrix[i] = [];

  for (let i = 1; i <= N ** 2; i++) {
    myMatrix[rows][columns] = i;

    if (rows === steps && columns === N - steps - 1) steps--;

    if (
      (columns >= rows && columns < steps) ||
      (rows - 1 === columns && rows === N - steps - 1)
    )
      columns++;
    // Move Down;
    else if (columns <= rows && columns >= N - steps) columns--;
    // Move Up
    else if (rows <= columns && rows < steps) rows++;
    // R move;
    else if (rows >= columns && rows >= N - steps) rows--;
    // L move;
  }
  return myMatrix;
}

console.log(matrix(3));

// the Fibonacci sequence.

//Task 2;

function myFlat(something) {
  return something.reduce(
    (result, value) =>
      Array.isArray(value)
        ? result.concat(myFlat(value))
        : result.concat(value),
    []
  );
}

let a = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(myFlat(a));
