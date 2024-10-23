const fs=require(`fs`);
fs.appendFile("tetx2.txt",`hello Pune!!`,(error)=>{
    if(error)
    {
        console.log("error");
    }
    else
    console.log("data is append");
});