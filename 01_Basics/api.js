// function callData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("call data!");
//             resolve("success!");
//         },3000);
//     });
    
// }

// async function called(){
//     console.log("calling once!");
//     await callData();
// }
// called();



async function callAPI(){
    console.log("getting data from API...");
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(response);
    let data = await response.json();
    console.log(data); 
}