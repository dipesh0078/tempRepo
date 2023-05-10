const http=require('http');
//const server=htt.createServer((req,res)=>{
    // return res.end("Welcome");
//})


//Using Event Emitter API
const server=http.createServer();
//emit request event
//subcribe to it /listen for it /respond to it
server.on('request',(req,res)=>{
    return res.end("Welcome");
})

server.listen(5000);