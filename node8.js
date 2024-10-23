const fs = require('fs');
fs.readFile('text.txt',(error,data)=>{
    if(error){
        console.log("Error");
    }
    else{
        console.log(data);
        console.log(data.toString());
    }
});