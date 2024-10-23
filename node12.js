const fs= require ("fs");
// fs.unlink("text4.txt",(error)=>{
//     if(error)
//     {
//         console.log("error file is not deleted");
//     }
//     else
//     console.log("file is deleted");
// });
fs.rename("text3.txt",`hello.txt`,(error)=>{
    if(error)
    {
        console.log("error");
    }
    else
    console.log("file is renamed");
});