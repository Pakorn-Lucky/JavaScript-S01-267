const start = Date.now();

console.log('staring timer...');

setTimeout(()=>{
    const millis = Date.now() - start;

    console.log(`seconds elapesed = ${Math.floor(millis /1000)}`);
    
},2000);
