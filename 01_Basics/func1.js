//Write a function to take in a String and return the number of vowels encountered.
let calcV = 0;
function Check(str1){
    for (var i=0; i<str1.length;i++){
        if (str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i' || str1[i] === 'o' || str1[i] === 'u') {
            calcV += 1;
        }
    }
    return calcV;
}

console.log(Check("Tada"));