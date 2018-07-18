/* 
#6 Count words
*/

var input = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la...Aku sayang sekali Doraemon La... la... la... Aku sayang sekali";

var arrayInput = input.split(/\s+/);

var numberOfWords = Object.create(null);

for (i = 0; i < arrayInput.length; i++) {
    var word = arrayInput[i];
    
    if (!arrayInput[word]) {
        numberOfWords[word] = 1;
    } else {
    
        numberOfWords[word]++;
    }
}

console.log(numberOfWords); 

//sorry, this program has not been completed, I still need more time to find a solution 


 
