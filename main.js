
function createArray(size = 10, max = 50) {
  const array = [];

  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * max));
  }

  return array;
}

function quickSort(array) {
  if (array.length <= 1) return array;

  const smaller = [];
  const equal = [];
  const larger = [];

  const pivot = array[Math.floor(Math.random() * array.length - 1)];

  array.forEach(element => {
    if (element < pivot) {
      smaller.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      larger.push(element);
    }
  });

  return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}

function sortArray(e) {
  event.preventDefault();

  const sortedArray = quickSort(unsortedArray);

  document.getElementById("sorted").textContent = `[${sortedArray}]`;
}

function updateHTML(element, array) {
  document.getElementById(element).textContent = `[${array}]`;
}

function generate(e) {
  e.preventDefault();

  unsortedArray = createArray();

  updateHTML("unsorted", unsortedArray);
}

let unsortedArray = createArray();

updateHTML("unsorted", unsortedArray);




