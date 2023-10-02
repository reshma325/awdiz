//  Question 1- 

// var nums = [2, 7, 11, 15];
// var target = 9;


// for (i = 0; i < nums.length; i++) {
//     // console.log(nums[i] ,'I') 
//     for (j = i + 1; j <= nums.length; j++) {

//         if (nums[j] + nums[i] == target) {
//             console.log(nums[j], ': j', nums[i], ':i')
//             console.log(i, j)
//         }
//     }
// }



// Question 3

var num=123;
var numbackup=num;
var temp=0;
flag=true
while (num>0) {
    temp =temp*10+(num%10);
   num= Math.floor(num/10);
    

    
}
if(temp===numbackup){
    console.log(flag)
}else{
    console.log(!flag)
}
// console.log(temp)




// question-7

// var array=[2,1,4,5,6,6,3,8,2,1]


// function removeDuplicates(array){
//     for(i=0;i<array.length;i++){
    
//     }
// return array
// }
// console.log(removeDuplicates(array));



