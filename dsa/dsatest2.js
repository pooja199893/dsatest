// Q. Create a function that takes a string and returns a count of unique words. (, . are not words)

// String = “Hi, My name is Awdiz, I  am located at Vashi.” 

// Output :  { Hi : 1, My : 1, name : 1, is : 1 …   }

 
function mycount(string){
    let words = string.split(' ');
    let count={};
    for(let word of words){
        word = word.replace(/[,.]/g,'')
        if(!count[word]){
            count[word]=1;
        }else{
            count[word]++;
        }
    }
    return count;
    
}
console.log(mycount(" hi,my name is Awdiz, I  am located at Vashi."))