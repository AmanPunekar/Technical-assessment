function mergeArrays(a1, a2) {
    let mergedArray = [];
    let i = 0; 
    let j = 0; 

    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            mergedArray.push(a1[i]);
            i++;
        } else {
            mergedArray.push(a2[j]);
            j++;
        }
    }

    while (i < a1.length) {
        mergedArray.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        mergedArray.push(a2[j]);
        j++;
    }

    return mergedArray;
}

const a1 = [7,9,8,12,25,45];
const a2 = [6,17,36,75,98];
const result = mergeArrays(a1, a2);
console.log(result); 
