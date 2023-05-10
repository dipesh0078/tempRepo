const EventEmitter=require('events');

const customEmitter=new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log("data received "+name+' id: '+id);
})
customEmitter.on('response',()=>{
    console.log("data2 received");
})
customEmitter.on('response',()=>{
    console.log("data3 received");
})
customEmitter.emit('response','hari',46);