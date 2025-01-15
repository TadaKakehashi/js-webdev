let arr1 = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// remove the first company from the array
console.log(arr1.splice(0,1));
// remove Uber and Add Ola in its place
arr1.splice(1 ,1,"Ola");
console.log(arr1);
// add amazon at the end
arr1.splice(5,0,"Amazon");
console.log(arr1);