const a = require ("http");
const PORT=6666;

const b = a.createServer((request,respone)=>{
    respone.write("hello world!!");
    respone.end();
});

b.listen(PORT,()=>{
    console.log("SERVER IS LISTENING ON ${PORT}");
}
    );

// const http=require('http');
// // PORT=4500;
// const server=http.createServer((request,response)=>{

// response.write("hello world");
// response.end();//this function will terminate the processing of server
// });
// server.listen(PORT,()=>{
// console.log("SERVER IS LISTENING ON ${PORT}");





// });