/*
export.js


*/

module.exports = {

    lower: function lower(value){

        return value.toLowerCase(); 




    }, 
    upper: function upper(value){



        return value.toUpperCase(); 


    }, 
    capitalize: function capitalize(value){


        let newResult = value.replace(/\w\S*/g, function(newString){

            return newString.charAt(0).toUpperCase() + newString.substr(1).toLowerCase();


        });

        return newResult; 

    }, 

    reverse: function reverse(value){

        var newValue = ""; 
        for(var i = value.length-1; i>=0; i--){
            newValue += value[i];



        }

        return newValue; 







    }, 
    contains: function contains(value, arg2 ){

        let newArray = [];
        let newStr; 
        let trueOrFalse = [];  
        

        if(value.constructor === Array){

            for(let i=0; i<arg2.length; i++){

                newArray.push(arg2[i]); 

                if(value.indexOf(arg2[i])>=0){

                    trueOrFalse.push("true"); 



                }else{


                    trueOrFalse.push("false"); 
                }


                


            }

            return trueOrFalse.every( (val, i, arr) => val === "true");  


            



        }else{

            if(value.indexOf(arg2) >= 0 ){

                return true; 


            }




        }

        

        return newArray; 






    }, 
    random: function random(value){
        let randomChar = ""; 
        let alphabetList = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
        if(!value){
            for(let i = 16; i>0; --i ){
                randomChar += alphabetList[Math.round( Math.random()* (alphabetList.length-1) ) ];   
                 


            }
            console.log("okay");


       }else{

            
            for(var i = 0; i < value; i++){
    
                randomChar += alphabetList.charAt(Math.floor(Math.random()* alphabetList.length)); 
    
            }




       }

       return randomChar; 





    }, 
    slug : function slug(value, arg2){
        let st; 

        st = value.toLowerCase();
        st = st.replace(/[\u00C0-\u00C5]/ig,'a'); 
        st = st.replace(/[\u00C8-\u00CB]/ig,'e');
        st = st.replace(/[\u00CC-\u00CF]/ig,'i');
        st = st.replace(/[\u00D2-\u00D6]/ig,'o');
        st = st.replace(/[\u00D9-\u00DC]/ig,'u'); 
        st = st.replace(/[\u00D1]/ig,'n');
        st = st.replace(/[\W_]+/g," ");
        st = st.replace(/[^a-z0-9 ]+/gi,'');
        
        st = st.replace(/[\-]{2}/g,'');
        
        if(str!== undefined && arg2 !== undefined){
            st.replace(/[^a-z\- ]*/gi,'');
            st = st.trim().replace(/ /g,character);
        
        }else{


            st.replace(/[^a-z\- ]*/gi,'');
            st = st.trim().replace(/ /g,'-');
        
        }

        return st; 
        
        




    }, 
    count: function count(value){


        return value.length; 
    }, 
    countWords: function countWords(value){


        let totalWords = 0; 
        for(let i = 0; i< value.length; i++){
            if(value[i] === " "){

                totalWords += 1; 
            }

        }

        return totalWords += 1; 
    }, 
    trim:  function trim(value, arg2, arg3){
        let trimmedString; 
        if(value.length>100){

            if(value !== undefined && arg2 !== undefined && arg3 !== undefined){
                trimmedString = value.substring(0, length) + character; 
                
            }else if(value!== undefined && arg2 !== undefined ){
                trimmedString = value.substring(0, arg2); 
                
            }else if(value !== undefined){
    
                trimmedString = value.substring(0, 130);  
            }



        }else{

            return trimmedString = value; 
        }
        
        return trimmedString; 





    }, 
    trimWords:  function trimWords(value, arg2, arg3){
        let newStr = value.split(" "); 
        let newArr = []; 
        let word, i = 0; 

        let newResult; 

        if(value.length >= 30 ){



            if(value !== undefined && arg2 !== undefined && arg3 !== undefined){
            
                for(word of newStr){
    
                    if(i === arg2){
    
    
                        break; 
                    }
    
                newArr.push(word); 
                i++; 
    
                }
    
                newResult = newArr.join(" ") + character; 
    
                
    
    
    
            }else if(value !== undefined && arg2 !== undefined){
                
    
                for(word of newStr){
    
                    if(i === arg2){
    
    
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
            }
        }else{


            newResult = value; 
        }

        return newResult; 



    }










}; 

