
function stringToNumber(input){
    const result = Number(input)
    if(isNaN(result)){
        return "Not a Number"
    }
    return result;
}

function flipBoolean(input){
    const result = Boolean(input)
    return !result
}

function whatAmI(input){
    if(typeof input === "number"){
        return `I'm a number!`
    }
    if(typeof input === "string"){
        return `I'm a string!`
    }
}

function isItTruthy(input){
    if(input){
        return `It's truthy!`
    }
    else{
        return `It's falsey!`
    }
}

console.log(stringToNumber("tada"))
console.log(stringToNumber(1))

console.log(flipBoolean(0))
console.log(flipBoolean(1))

console.log(whatAmI(19))
console.log(whatAmI("tada"))

console.log(isItTruthy("Hello"))
console.log(isItTruthy(0))