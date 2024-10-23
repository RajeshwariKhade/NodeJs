const fs = require(`fs`);
fs.writeFile("tetx2.txt",`hello world`,(error)=>{
    if(error)
    {
        console.log("errr file not found");
    }
    else
    {
        console.log("data is entered into the file");
    }
});