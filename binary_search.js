function binarySearch(list, target) {
  first = 0;
  last = list.length;
  while (first <= last) {
    midpoint = Math.floor((first + last) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return null;
}
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function verify(index) {
  if (index !== null) {
    console.log(`The target is found in index ${index}`);
  } else {
    console.log("the target is not found ");
  }
}

let result = binarySearch(items, 5);

verify(result);
