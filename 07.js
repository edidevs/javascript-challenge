/*  07.js Class





*/

class Str {

    constructor(){


    }


    static lower(value){

        return value.toLowerCase(); 


    }

    static upper(value){

        return value.toUpperCase(); 


    }


    static capitalize(value){


        let newResult = value.replace(/\w\S*/g, function(newString){

            return newString.charAt(0).toUpperCase() + newString.substr(1).toLowerCase();


        });

        return newResult; 





    }

    static reverse(value){

        var newValue = ""; 
        for(var i = value.length-1; i>=0; i--){
            newValue += value[i];



        }

        return newValue; 


    }


    static contains(str,value){

        let newArray = [];
        let newStr; 
        let trueOrFalse = [];  
        

        if(value.constructor === Array){

            for(let i=0; i<value.length; i++){

                newArray.push(value[i]); 

                if(str.indexOf(value[i])>=0){

                    trueOrFalse.push("true"); 



                }else{


                    trueOrFalse.push("false"); 
                }


                


            }

            return trueOrFalse.every( (val, i, arr) => val === "true");  


            



        }else{

            if(str.indexOf(value) >= 0 ){

                return true; 


            }




        }

        

        return newArray; 




    }


    static random(number){

       let randomChar = ""; 
       let alphabetList = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
       if(!number){
            for(let i = 16; i>0; --i ){
                randomChar += alphabetList[Math.round( Math.random()* (alphabetList.length-1) ) ];   
                 


            }
            console.log("okay");


       }else{

            
            for(var i = 0; i < number; i++){
    
                randomChar += alphabetList.charAt(Math.floor(Math.random()* alphabetList.length)); 
    
            }




       }

       return randomChar; 



    }

    static slug(str, character){
        let st; 

        st = str.toLowerCase();
        st = st.replace(/[\u00C0-\u00C5]/ig,'a'); 
        st = st.replace(/[\u00C8-\u00CB]/ig,'e');
        st = st.replace(/[\u00CC-\u00CF]/ig,'i');
        st = st.replace(/[\u00D2-\u00D6]/ig,'o');
        st = st.replace(/[\u00D9-\u00DC]/ig,'u'); 
        st = st.replace(/[\u00D1]/ig,'n');
        st = st.replace(/[\W_]+/g," ");
        st = st.replace(/[^a-z0-9 ]+/gi,'');
        
        st = st.replace(/[\-]{2}/g,'');
        
        if(str!== undefined && character !== undefined){
            st.replace(/[^a-z\- ]*/gi,'');
            st = st.trim().replace(/ /g,character);
        
        }else{


            st.replace(/[^a-z\- ]*/gi,'');
            st = st.trim().replace(/ /g,'-');
        
        }

        return st; 
        
        


    }

    static count(str){



        return str.length; 




    }
    
    static countWords(str){

        let totalWords = 0; 
        for(let i = 0; i< str.length; i++){
            if(str[i] === " "){

                totalWords += 1; 
            }

        }

        return totalWords += 1; 

    }


    static trim(str, length, character){

        let trimmedString; 
        if(str.length>100){

            if(str !== undefined && length !== undefined && character !== undefined){
                trimmedString = str.substring(0, length) + character; 
                console.log("sip");
            }else if(str!== undefined && length !== undefined ){
                trimmedString = str.substring(0, length); 
                
            }else if(str !== undefined){
    
                trimmedString = str.substring(0, 130); 
            }



        }else{

            return trimmedString = str; 
        }
        
        return trimmedString; 


    }

    static trimWords(str, length, character){
        let newStr = str.split(" "); 
        let newArr = []; 
        let word, i = 0; 

        let newResult; 

        if(str.length >= 30 ){



            if(str !== undefined && length !== undefined && character !== undefined){
            
                for(word of newStr){
    
                    if(i === length){
    
    
                        break; 
                    }
    
                newArr.push(word); 
                i++; 
    
                }
    
                newResult = newArr.join(" ") + character; 
    
                
    
    
    
            }else if(str !== undefined && length !== undefined){
                
    
                for(word of newStr){
    
                    if(i === length){
    
    
                        break; 
                    }
    
                newArr.push(word); 
                i++; 
    
                }
    
                newResult = newArr.join(" "); 
    
    
            }else{
    
                for(word of newStr){
    
                    if(i === 40){
    
    
                        break; 
                    }
    
                newArr.push(word); 
                i++; 

                newResult = newArr.join(" "); 
    
    
            }
        }else{


            newResult = value; 
        }

        return newResult; 
        


    }







}

/* 
console.log(Str.slug("JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?", "_")); */ 
