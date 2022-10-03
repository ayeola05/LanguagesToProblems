/* 
BigO Time Complexity = O(n^2)
BigO Space Complexity = O(1) 
*/


const selectionSort = (arr) => {
    if(arr.length < 2) return arr //Checks if array is just a value or empty and returns it
    for(let i = 0; i < arr.length; i++){
        let min = i //We assume the minimum value is the first value in the array
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]) { // We check to find a minimum 
                min = j //if we find a value lesser than the initial we change the value of min to the lowest
            }
        }
        if(i !== min){ // Checks if min is changed or remains the same if its changed then we swap else we don't
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

selectionSort([6, 4, 3, 100, 7, 8, 1]) // Should return [1, 3, 4, 6, 7, 8, 100]
