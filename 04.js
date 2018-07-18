/*
#4 Leap Year detector 






*/


function isLeap(value){
2016
    var year = value; 

    //The rule for the leap year is that it is divisible by 4
    //But it is not divisible by 100
    //However, 2000 and 1600 are the leap year because they are divisible by 400 nr
    
    if(year % 4 === 0 && ( year % 100 != 0 || year % 400 ===  0)){

        return true;



    }else{


        return false; 

    }
    
} 

//enter the year
console.log(isLeap(2016)); // true 
console.log(isLeap(2000)); // true 
