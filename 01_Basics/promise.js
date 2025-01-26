function walkDog(){
    return new Promise((resolve, reject) => {

        const dogWalked = true;
        if(dogWalked){
            setTimeout(()=>{
                resolve("walkking the dog");
            },2500);
        }
        else{
            reject("you didnt walked the dog");
        }
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        const cleanKitchen = true;
        if(cleanKitchen){
            setTimeout(()=>{
                resolve("cleaning in progress....");
            },2500);
        }
        else{
            reject("you didnt clean");
        }
    });
}
//method chainning
walkDog().
    then(value=>
         {console.log(value);
             return cleanKitchen().
    then(value=>
         {console.log(value)})})
    .catch(err =>
         {console.log(err);});