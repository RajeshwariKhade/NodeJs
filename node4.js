const http = require("http");
const r = require("./node5");
const s = http.createServer((req,res)=>
    {
        res.write("hello");
       var a =225;  
       res.write(`number entered by you is ${r.evenodd(a)}`);
       res.end();

    });
s.listen(6800);
console.log("hello you are in console");