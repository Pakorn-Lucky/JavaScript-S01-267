let values1=['Apple', 1, false];
let values2= ['Fries',9,true];
let values3= ['Mars',9,'Apple'];

let test =[];

for (let i = 0; i < values1.length; i++) {
   if (values2.includes(values1[i]) || values3.includes(values1[i])) {
    test.push(values1[i])
   }

}

for (let i = 0; i < values2.length; i++) {
    if (values1.includes(values2[i]) || values3.includes(values2[i])) {
     test.push(values2[i])
    }
 
 }

console.log(test);

