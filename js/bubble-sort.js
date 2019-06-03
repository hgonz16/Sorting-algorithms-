// array to sort
const bArray = [135, 182, 111, 169, 123, 158, 196, 143, 172];

// swap function
const swap = function swap(array, i, j) {
  const sArray = array;
  const temp = array[i];
  sArray[i] = sArray[j];
  sArray[j] = temp;
};

// bubble sort function
function bubbleSort() {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < bArray.length; i += 1) {
      if (bArray[i] && bArray[i + 1] && bArray[i] > bArray[i + 1]) {
        swap(bArray, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return bArray;
}
document.getElementById('bSort').innerHTML = bubbleSort(bArray.slice());
