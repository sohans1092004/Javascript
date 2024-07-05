console.log(2>1);
console.log(2>=1)
console.log(2<1);
console.log(2!=1);
console.log(2==1);

//What if different datatypess are compared?

console.log("2" > 1); // the string is automatically converted to number
console.log("02">1);// then the nubers ae cinverted


//Exceptions
console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true(the heck is this shit even)

// The reason for the problem is that comparators(> , < , >= , <=) work differently as compared to ==. they validity checks are done differently
// So, when we use comparators, null is converted to 0, so in firat case, its false and in third, its true.
// but in 2nd case, its different

//The same problem occurs with undefined
console.log("2" === 2)

// === checks for datatype as well as value.. so even if datatype is different, it gives false