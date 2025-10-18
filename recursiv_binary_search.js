function recursiv_binary_search(list, target) {
  if (list.length == 0) {
    return false;
  } else {
    let midpoint = Math.floor(list.length / 2);
    if (list[midpoint] == target) {
      return true;
    } else if (list[midpoint] < target) {
      return recursiv_binary_search(list.slice(midpoint + 1), target);
    } else {
      return recursiv_binary_search(list.slice(0, midpoint), target);
    }
  }
}
function verify(result) {
  if (result) {
    console.log(`the teaget is Found ${result}`);
  } else {
    console.log(`the teaget is Not Found ${result}`);
  }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = recursiv_binary_search(items, 1);

verify(result);
