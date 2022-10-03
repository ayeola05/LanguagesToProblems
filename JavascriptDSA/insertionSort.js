
/* 
BigO Time Complexity = O(n^2)
BigO Space Complexity = O(1) 
*/

// using [2, 1] as an example

const insertionSort = (arr) => {
    if(arr.length < 2) return arr
    for(let i = 1; i < arr.length; i++){ //We start our array at index 1 because we insert to the left
        let currVal = arr[i] // currVal = 1 We temporarily grab the value we want to insert on every iteration 
        for(var j = i-1; j >= 0 && arr[j] > currVal; j--) { // We check for greater value
            // arr[j] > currVal i.e 2 > 1 (true)
            arr[j+1] = arr[j] // We mutate the array
            // arr[1] = 2 i.e array becomes [2, 2]
        }
        
        arr[j+1] = currVal // And then we insert
        // arr[0] = 1 i.e our array now becomes sorted [1, 2]
    }
    return arr
}

console.log(insertionSort([2, 1]))