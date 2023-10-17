// 1
var firstName = "harry";
var lastName = "Potter";
var country = "India";
var city = "Bihar";
var age = 30;
var isMarried = false;
var year = 2023;
console.log( typeof firstName); 
console.log( typeof lastName);   
console.log(typeof country);     
console.log(typeof city);           
console.log( typeof age);           
console.log(typeof isMarried); 
console.log(typeof year);     


// 2
if (typeof ('10') === 10) {
    console.log('The type of "10" is equal to 10.');
} else {
    console.log('The type of "10" is not equal to 10.');
}


// 3
if (parseInt('9.8') === 10) {
    console.log('parseInt("9.8") is equal to 10.');
} else {
    console.log('parseInt("9.8") is not equal to 10.');
}


// 4
var truevalue1 = true;
var truevalue2 = 29;
var truevalue3 = "hello";
var falsevalue1 = false;
var falsevalue2 = 0;
var falsevalue3 = "";

if(truevalue1){
    console.log("truevalue1 is truthy");
}else{
    console.log("truevalue1 is falsy")
}

if (falsevalue2){
    console.log("falsevalue2 is truthy");
}else{
    console.log("falsevalue2 is falsy");
}


// 5
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !== 4);//flase
console.log(4 != '4'); //false
console.log(4 == '4'); //true
console.log(4 === '4'); //false
console.log('python'.length == 'jargon'.length);//true


//6
console.log(4>3&&10<12); //true
console.log(4>3&&10>12); //false
console.log(4>3||10<12); //true
console.log(4>3||10>12); //true
console.log(!(4>3));     //false
console.log(!(4<3));     //true
console.log(!(false));   //true
console.log(!(4>3&&10<12));//false
console.log(!(4>3&&10>12));//true
console.log(!(4==='4'));  //true
console.log('dragon'.includes('on')&&'python'.includes('on'));//true


// 7
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
console.log(Math.floor(now.getTime() / 1000));

