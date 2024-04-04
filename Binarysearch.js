function binarySearch(array, numFind) {

    let left = 0;
    let right = array.length - 1;

    for (left; left <= right; ) { //third parameter is empty it shows it is updating by +1
        let middle = Math.floor((left + right) / 2); //divide into two arrays of same length finding middle element of array

        if (array[middle] === numFind) {
            return middle; 
        } 
        else if (array[middle] < numFind) {
            left = middle + 1; 
        }
         else {
            right = middle - 1; 
        }
    }

    return -1; 
}

const array = [1,5,9,15,28,36,45,58,78];
const numFind = 15;
const indexNo = binarySearch(array, numFind);
console.log("Given array: ",array);
console.log("Index number of", numFind, "is", indexNo);