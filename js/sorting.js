// array for bubble sort
let bArray = [135, 182, 111, 169, 123, 158, 196, 143, 172];

//array for merge sort
let mArray = [37, 29, 52, 84, 75, 41, 66, 10, 94];

//swap function
function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//bubble sort function
function bubbleSort(bArray){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < bArray.length; i++){

            if(bArray[i] && bArray[i + 1] && bArray[i] > bArray[i + 1]){

                swap(bArray, i, i + 1);
            }
        }
    }while(swapped);
    return bArray;
}
document.getElementById('bSort').innerHTML = bubbleSort(bArray.slice());

//top down merge sort
function mergeSort(mArray){
    if(mArray.length < 2){
        return mArray;
    }
    
    let middle = Math.floor(mArray.length / 2);
    let left = mArray.slice(0, middle);
    let right = mArray.slice(middle);

    return topDown(mergeSort(left), mergeSort(right));
}

function topDown(left, right){
    let mArray = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            mArray.push(left.shift());
        }else{
            mArray.push(right.shift());
        }
    }
    return mArray.concat(left.slice()).concat(right.slice());
}

document.getElementById('mSort').innerHTML = mergeSort(mArray.slice());

