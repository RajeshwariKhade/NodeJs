const fs = require('fs')
fs.open("text4.txt",`w`,(error,data)=>{
    if(error){
        console.log("error");
    }
    else
    {
    console.log(data);
    console.log(data.toString());   
}

});