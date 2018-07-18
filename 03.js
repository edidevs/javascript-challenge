/*
#3 Play with CSV and object 







*/

(function(){
 
    var csv = []; 
        csv.push("name, price, category"); 
        csv.push("Xiaomi Redmi 5A, Rp1.199.000, Smartphone"); 
        csv.push("Macbook Air, Rp13.775.000, Laptop ");
        csv.push("Samsung Galaxy J7, Rp3.549.000, Smartphone");
        csv.push("Dell XPS 13, Rp26.799.000, Laptop");
        csv.push("Xiaomi Mi 6, Rp5.399.000, Smartphone");
        csv.push("LG V30 Plus, Rp10.499.000, Smartphone");

       

        function objectArray(newArray){

            var headers = newArray[0].split(','); 
            var objectData = []; 
            for (var i =1, length = newArray.length; i < length; i++){

                var row = newArray[i].split(",");
                var data = {}; 
                for(var x = 0; x < row.length; x++){

                    data[headers[x]] = row[x]; 

                }

                objectData.push(data); 
                
            } 

            return objectData; 


        }

        console.log(objectArray(csv));
        

})(); 
