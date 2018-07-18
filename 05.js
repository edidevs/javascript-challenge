/*

#5 Play with numbers 



*/

var newArray = []; 

//Insert 1 to 100 to newArray 
for(var i = 1; i <= 100; i++){

    newArray.push(i); 




}


var even = newArray.filter(function(num){

    if(num%2==0){

        return num; 
    }


});

console.log(`All even numbers from 1 - 100: ${even}.`);

var odd = newArray.filter(function(num){

    if(num%2 != 0){

        return num; 

    }



});

console.log(`All odd numbers from 1 - 100: ${odd}.`);



function isFive(array){
    var newArrayLocal = [];


    for(var i=1; i<=100; i++ ){

        if(array[i] % 5 == 0){
    
            newArrayLocal.push(array[i]);          
    
        }
    
    
    
    
    }
    
    
    return newArrayLocal; 




}


var multiplyByFive = isFive(newArray); 

console.log(`All Numbers multiplies by 5 from 1 to 100: ${multiplyByFive} `);



let arrayForPrime = []; 

for(var i = 2; i<=100; i++ ){ 

    arrayForPrime.push(i);


}

var primeArray = arrayForPrime.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) { 

    if(number > 2 ){
        if (number % i === 0) return false;
    }
  }
  return true;
});

console.log(`prime numbers: ${primeArray}`);
