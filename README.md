# Some sorting algorithms

This is a repository that has the two algorithms I typed up.

## Usage 

To check the output of the algorithms go [here](https://humbertogonzales.herokuapp.com/sorting.html).

## Bubble sort algorithm
 
This is the array we will use for the function.

```javascript
let bArray = [135, 182, 111, 169, 123, 158, 196, 143, 172];
```

Now lets create this function that helps the algorithm swap the elements in the array.

```javascript
// swap function
const swap = function swap(array, i, j) {
  const sArray = array;
  const temp = array[i];
  sArray[i] = sArray[j];
  sArray[j] = temp;
};
```
Using the swap function and a do-while loop we can create the bubble sort function.

```javascript
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
```
[OUTPUT](https://humbertogonzales.herokuapp.com/sorting.html).

## Merge sort algorithm

Check out the Merge sort algorithm [here](https://github.com/hgonz16/portfolio/blob/master/public/js/merge-sort.js).

[OUTPUT](https://humbertogonzales.herokuapp.com/sorting.html).

