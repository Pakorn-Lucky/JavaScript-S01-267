const promis = new Promise((reslove,reject)=>{
    const res = true;

    if(res){
        resolve("Resolved!");
    }else{
        reject(Error("Fatal Error"));
    }
});

promis.then(
    (res) => console.log(res),
    (err) => console.log(err)
);