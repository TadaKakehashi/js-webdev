/*
1. Use while loop to calculate numbers from 1 to 5
*/
let sum = 0
let num = 1

while (num<=5) {
    sum+=num;
    num++;
}
//console.log(sum)


/*
2. Write a while loop that counts down from 5 to 1 and stores the number in an array named coutdown.
*/ 

num = 5;
let arr = []
while(num>=1){
    //console.log(num)
    arr.push(num)
    num--;
}
//console.log(arr)

/*
    Question 3: Write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array named 'teaCollection'
*/ 

//let teaCollection = [];
// let tea;
// do{
//     tea = prompt("Enter your favorite tea!");
//     if(tea !== "stop"){
//         teaCollection.push(tea);
//     }
// }
// while(tea !== "stop")

// console.log(teaCollection)


/*
    Question 5: Write a do while loop that adds number from 1 to 3 and stores the rsult in a variable named total.
*/ 

num = 1;
do{
    num+=num;
    num++;
}
while(num<=3)

// console.log(num)

/**
 Question 6: Write a for loop that multiplies each element in the array [2,4,6] by 2 and stores the results in a new array named multipliedNumbers; 
**/

let arr1 = [2,4,6]
let multipliedNumbers = [];

for(let i=0;i<arr1.length;i++){
    let ele = arr1[i]*2
    multipliedNumbers.push(ele)
}

// console.log(multipliedNumbers)

/*
    Question 8: Write a for loop that lists all the cites in the array [Paris,New York,Tokyo,London] and stores each city in a new array named cityList
*/

let citiesArr = ["Paris","New York","Tokyo","London"]
let cityList = []

for(let i=0;i<citiesArr.length;i++){
    cityList.push(citiesArr[i])
}
// console.log(cityList)

/**
 Question 9: Write a for loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds "chai"
 */

 let chaiSelection = ["green tea","black tea","chai"]
 let chaiS = []
 for(let i = 0;i<chaiSelection.length;i++){
    if(chaiSelection[i] !== "chai"){
        chaiS.push(chaiSelection[i])
    }
 }
//  console.log(chaiS)

 /*
    Question 10: Write a for loop that loops through the array ["London","new York","Paris",Berlin] and skips "Paris".
    Store the other cities in a new array named 'visitedCities'.
 */ 

    let city = ["London","New York","Paris","Berlin"]
    let visitedCity = []

    for(let i=0;i<city.length;i++){
        if(city[i] !== "Paris"){
            visitedCity.push(city[i])
        }   
    }

    // console.log(visitedCity)

    /*
        Question 11: Use a for-of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. 
        Store the number 4 in an array named 'smallNumbers'
    */ 

        let numArrays = [1,2,3,4,5]
        let smallNumber = []
        
        for (const num of numArrays) {
            if(numArrays[num] === 4){
                smallNumber.push(numArrays[num])
                break;
            }
        }

        //console.log(smallNumber)

    /**
     * Question 12: Use a for-of loop to iterate through the array ["Chai","green tea","herbal tea","black tea" ] and skip herbal tea
     * 
     * Store the other teas in an array named preferredTeas
     */

    let teaChai = ["chai", "green tea","herbal tea","black tea"]
    let preferredTea = []
    for (const chai of teaChai) {
        if(chai === "herbal tea"){
            continue;
        }
        preferredTea.push(chai)
    }

    // console.log(preferredTea)

    /**
     * Use a for-in loop to loop through an object containing city populations. 
     */

    let ct = {
        "London" : 12000,
        "Paris" : 21112,
        "Berlin" : 1000,
        "India" :12
    }

    let newCT = {}

    for (const city in ct) {
        if(city == "Berlin"){
            break;
        }
        newCT[city] = ct[city]
    }

    // console.log(newCT)

    /**
     * Question: Use a for-in loop through an object containing city populations/
     * Skip any city with a population below 3 mil and store the rest in a new object name 'largeCities'
     */

    let worldCities = {
        "Sydney": 500000,
        "Tokyo": 90000000,
        "Berlin": 3500000,
        "Paris": 2200000
    };

    let largeCity ={}

    for (const key in worldCities) {
        if(worldCities[key]>1000000){
            largeCity[key] = worldCities[key];
        }
    }
    // console.log(largeCity)

    /**
     * Question: Write a forEach loop that iterates through the array["earl grey","green tea","chai","oolong tea"].
     * Stop the loop when "chai" is found and stores all previous tea type sin an array named 'availableTeas'
     */

    let newArr = ["earl grey","green tea","chai", "oolong tea"]
    let availableTeas = []
    newArr.forEach(tea => {
        if (tea !== "chai"){
            availableTeas.push(tea)
        }
        //cant have a break rather use return  
    });

    // console.log(availableTeas)

    /**
     * write a forEach loop that iterates through the array ["Berlin","tokyo","Sydney","Paris"]
     * Skip "Sydney" and store the other cities in a new array named 'traveledCities'
     */

    let towns = ["Berlin","Tokyo","Sydney","Paris"]
    let travelTowns = []
    towns.forEach(town => {
        if(town !== "Sydney"){
            travelTowns.push(town)
        }
    })
    // console.log(travelTowns)

    /**
     * Write a for loop that iterates through the array [2,5,7,9]
     * Skip the value 7 and mult the rest by 2. Store the results in a new array named doubleArr
     */

    let newArray = [2,5,7,9]
    let checkArray = []
    for(let i=0;i<newArray.length;i++){
        if(newArray[i] !== 7){
            newNum = newArray[i]*2;
            checkArray.push(newNum)
        }
    }

    // console.log(checkArray)
   
    /**
     * Question: Use a for-of loop to iterate throught the array, and stops when the length of the current tea name is greater than 10. Store the teas iterated over in an array named shortTeas
     */

    let chaiDrink = ["chai","green tea","black tea","jasmine tea","herbal tea"]
    let shortTea = []

    for (const tea of chaiDrink) {
        if(tea.length > 10){
            break
        }
        shortTea.push(tea)
    }

    console.log(shortTea)