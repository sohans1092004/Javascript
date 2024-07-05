let score="null"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);


//Whenever we try to convert any datatype to a "number"
// "33" => 33
//"33abc",undefined, null => NaN
// true => 1, false => 0

let check = undefined
let boolcheck = Boolean(check);
console.log(boolcheck);

// When we use Boolean:
// 1 => true; 0 => false
// "" => false, "skdhabk"=true
//null, undefined => false

let check1 = undefined
let boolcheck1 =     String(check1);
console.log(boolcheck1);
// When we use "string", all numbers and all are converted to string, but undefined returns undefined only

