const http = require ("http");
const m= require ("./node7");
const server = http.createServer((req,res)=>
{
   res.write("you are inside the server");
   var a=5;
   res.write(`the fact of the given number is ${m.factr(a)}`);
   res.end();
});
server.listen(8900);
console.log("you are in console");