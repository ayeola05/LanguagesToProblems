/* 
BigO Time Complexity = O(n^2)
BigO Space Complexity = O(1) 
*/

const bubbleSort = (arr) => {
    if(arr.length < 2) return arr 
    let noSwaps;
    for(let i = arr.length; i > 0; i--){ // We start out index at the array length inorder to control our inner loop index
        noSwaps= true
        for(let j = 0; j < i-1; j++){ // Using j < i - 1 inorder to prevent swapping with undefined
            if(arr[j+1] < arr[j]){ //If the latter value is greter than the former we swap
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false // We check if there are no swaps through a an iteration
            }
        }
        if(noSwaps) break // We break out inorder to prevent unecessary iterations
    }
    return arr
}

bubbleSort([6, 4, 3, 100, 7, 8, 1]) // Should return [1, 3, 4, 6, 7, 8, 100]
