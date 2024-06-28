function calculateSum(a, b){
    return a + b
}

function isEven(num){
    if(num % 2 == 0){
        return true
    }
    else{
        return false
    }
}

function findMax(arr){
    let largest = Math.max(...arr)
    return largest
}

function reverseString(str){
    let reverse = ""
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i]
    }
    return reverse
}

function filterOddNumbers(nums){
    let oddNumbers = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 != 0){
            oddNumbers.push(nums[i])
        }
    }
    return oddNumbers
}

function sumArray(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function sortArray(arr){
    return arr.sort((a, b) => a - b)
}

function capitalizeFirstLetter(str){
    return str[0].toUpperCase() + str.substring(1)
}