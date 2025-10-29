function linear_search(list, target) {
  for (let i = 0; i <= list.length; i++) {
    if (list[i] == target) {
      return i;
    }
  }
  return null;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function verify(index) {
  if (index != null) {
    console.log(`The target is found in index ${index}`);
  } else {
    console.log("the target is not found ");
  }
}

let result = linear_search(items, 1);

verify(result);
