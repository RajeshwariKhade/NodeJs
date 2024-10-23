const http = require ("http");
const p =require ('./node3.js');
const PORT=7500;
const server = http.createServer((req,res)=>{
    res.write("hello pune!!!!");
    res.write("byee!!!");
    res.write("hellooooooooooo")
    var x=50;
    var y=20;
    res.write(`The subtraction of a and b is ${p.sub(x, y)}\n`);
    res.write(`The sum of a and b is ${p.sum(x, y)}\n`);
    res.write(`the multiplication of x and y is ${p.mult(x,y)}`);
    res.write(`the division of number x and y is ${p.divide(x,y)}`);
    res.end();
   
});
server.listen(PORT,()=>{
    console.log("SERVER IS LISTENING ON ${PORT}");  
    console.log("iet");
});
