/* 
#6 Count words
*/

function words(str){

    return str.split(" ").reduce(function(count, word){
        count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1; 

        return count;             


    }, {});




}

let newObj = words("Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la...Aku sayang sekali Doraemon La... la... la...Aku sayang sekali "); 
console.log("Aku:" + newObj["Aku"]);
console.log("ingin:" + newObj["ingin"]);
console.log("dapat :" + newObj["Dapat"]);







