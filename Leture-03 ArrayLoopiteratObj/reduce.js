const arrayofNumbers = [1, 2, 3, 4];

const sum = arrayofNumbers.reduce((accumlator, currentValue)=>{
    return accumlator + currentValue;
})

console.log(sum);
