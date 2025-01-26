function checkCall(callback){
    console.log("checking...");
    setTimeout(()=>{
        console.log("fetching data...");
        setTimeout(()=>{
            logData();
        },2500);
    },2500);
}

function logData(){
    console.log("data fetched..");
}

checkCall(logData);