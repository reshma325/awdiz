// var a= 'Reshma';
// var b= 'omkar';

// if(a==='Reshma'){
// console.log("Hi")
// }else{
//     console.log('Bye')
// }


// for (var i = 100; i >= 50; i = i - 1) {
//     // console.log(i)
//     if (i == 80) {
//         console.log("We got 80.")
//         break;
//     }
// }


// Q. Find numbers who are even from 35 - 256;

// for( i=35;i<=256;i++){
//     if(i%2==0){
//         console.log(i)

//     }
// }

// Q Find total count from range 123 - 873, who are odd

// var x = 123;
// var y = 873;
// var counter = 0;

// for(i=x;i<=y;i++){
//     if(i%2 !== 0){
//         counter=counter+1;


//     }

// }
// console.log(counter);


// Q Find out addition of first 10 natural numbers who are even ...


// var final = 0;
// for( i=1;i<=10;i++){

//     final=final+i*2;


// }
// console.log(final);




// Q Find the Factorial..  1 * 2 * 3 *4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 *  12

// var final = 1;
// for( i=1;i<=10;i++){

//     final=final*i;


// }
// console.log(final);




// var num= 789;
// var num2=0;
// for( i=0;i<=2;i++ ){
//     num2=num2+num%10;


//     num= parseInt(num/10);
//     // console.log(num);

// }   console.log(num2);

// Q  

// var x=25;
// for(i=1;i*i<=x;i++){
// // console.log(i)
// if(i*i ==x){
// console.log(i*i);
// }
// }

// Find out all odd numbers from given array. 
// var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];


// for(i=0;i<array.length;i++){
//     // console.log(array[i]);
//     if(array[i] %2 !==0){
//         console.log(array[i])

//     }
// }

// Q Find out all odd numbers and even numbers addition from given array.
// var array = [2, 45, 65, 67, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22, 55, 98];
// var odd = 0;
// var even = 0;
// for(i=0;i<array.length;i++){
//     if(array[i] %2 ==0){
//         even = even+array[i]


//     }else{
//         odd=odd+array[i]
//     }

// }
// console.log(odd);
// console.log(even);

// Q Given an array find out addition of two number which is equal to target

// var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var target = 10;

// for (i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     for(j=i+1;j<array.length;j++){
//         // console.log(array[i],array[j]);
//         if(array[i]+array[j]==target){
//             console.log(array[i],array[j]);
//         }


//     }

// }

// var strings = ["Swaraj", "Awdiz", "Institute", "gvbh", "iouyg", 'KJH']
// var length=[];
// for(i=0;i<strings.length;i++){
//     // console.log(strings[i].length);
//     length[i]=strings[i].length;
    


// }
// console.log(length)

// function findStringLength(a) {
//         // console.log(array, "strings of array")
//         var result = []
//         for (var i = 0; i < a.length; i++) {
//             // console.log(array[i].length)
//             result.push(a[i].length)
//         }
//         return result;
//     }
//     console.log(findStringLength(strings))



// var count=0;
// for(j = 100 ; j<=999;j++){
//     num = j;
//     for( i=0;i<=4;i++ ){
        
//         if(parseInt(num%10)==7){
//             count++;
//         }
//         num= parseInt(num/10);
//         // console.log(num);   
    
//     } 
// }
//   console.log(count);



// var num= 153;
// var num2=0;
//  var num1=num
// var count =0
// for(i=0; i<=2;i++){
//     num2=parseInt(num%10);
   
//     count = count + num2*num2*num2;
//     num=parseInt(num/10);



// }
// if(parseInt(num1 )== parseInt(count)){
// console.log('Hi')
// }else{
//     console.log(num)
// }

// console.log(count);

// var num= 888;
// var num2=0;
// var num3= 100;
// var num4=0
// var count =0;
// for( i= 0;i<=2;i++){
    
//     count = count*10 + parseInt(num%10)
//     //num= parseInt(num3/10);
//     //console.log(num4, 'Hi')


//     // console.log(count ,"1st");
//     num=parseInt(num/10);
//     // console.log(num, '2nd')
    


// }

// console.log(count )

var count=1
    
for(i=1;i<=10;i++){
count=count*i

}console.log(count, 'hi')



//1+2+3+4+5
//i=1 count= 0   hence 0=0+1
// i= 2 count =1 hence 1=1+2
// i=3 count =3  hence 3= 3+3
//i=4 count = 6 hence 6=6+4








