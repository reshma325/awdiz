var q1=[1,2,3,4,5,6,7,8,9,10];
var addition =0;
function add(array){

    for(i=0; i< q1.length; i++){
        // console.log(i,'hi')

addition=addition+ elements[i]
    }
    return addition;  
}

console.log(add(elements));





// Find Maximum Value:
// Create a function to find the maximum value in an array of numbers.


var array = [1,2,3,4,5542,6,7,8,999, 102]
var max;

function maxArray(array){
    for (i = 0; i < array.length; i++){

        if(i == 0){
            max = array[i]
        }
        else if(array[i] > max){
            max = array[i];
        }
    }
    return max;
}

console.log(maxArray(array));
   



// Calculate Average:
// Write a function to calculate the average of numbers in an array.


var num=[12,23,45,643,65,87];
var addition=0;
function average(array){
    for(i=0;i<num.length;i++){
        addition=addition+num[i];

        
    
    }
    return addition/num.length;
}console.log(average(num))


var num =[23,45,67,55,87,123,678]
var rev = num.length-1;
var temp;
function revArr(num){
    
for(i = 0; i < num.length/2; i++){
    temp=num[i];
    num[i] = num[rev];
    num[rev] = temp;

    //console.log(num[i], temp, num[rev])

    rev--;
 
}
return num;
}

console.log(revArr(num))

// Write a function that counts the number of even numbers in an array.


var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,27];
var count =0;
function evenCount(num){
    for( i = 0;i<num.length;i++){
        if(num[i]%2 ==0){
            count=count+1
        }
    
    }return count;
}console.log(evenCount(num));

// Create a function to calculate the factorial of a given number.

var num= 10;
var fac= 1;


function fact(num){
    for(i=1;i<=num;i++){
        fac=fac*i;
    
    }return fac;
}console.log(fact(num));













