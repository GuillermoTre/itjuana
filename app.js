
var numbersProblem1 = [1,1,2,3,5,7,8];
var numbersProblem2 = [2,7,11,15];


/*
Problem 1
Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.
 */
export function foundMissingNumbers(nums){
    let result = [];
    //do a For for the length of items in the array and start it in 1 so the index can be used to count the iteration
    for(let i = 1; i< nums.length + 1; i++){
        //if the array does not include the current iteration we add it to the list of missing numbers
        if(!nums.includes(i)){
            result.push(i);
        }
    }
    return result;
}

/*
Problem 2
Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.
*/
export function findTarget(nums, target){
    let result = [];
    for(let i = 0;i < nums.length;i++){
        //subtract the current value from the target to find the required number
        let diff = target - nums[i];
        //use includes to look for the required number in the array provieded and make sure is not the same number we are using by checking the index of the value and the interation
        if(nums.includes(diff) && nums.indexOf(diff)!== i){
            let index =  nums.indexOf(diff)
            result.push(i,index)
            break;
        }
        //if a match was found break the loop the return the result
        if(result.length > 0) break;
    }
    return result;
}

console.log(foundMissingNumbers(numbersProblem1));

console.log(findTarget(numbersProblem2,9))
