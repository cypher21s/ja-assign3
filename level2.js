// 1
const base = parseFloat(prompt("Enter the base of the triangle:"));
const height = parseFloat(prompt("Enter the height of the triangle:"));
const area = 0.5 * base * height;
console.log("The area of the triangle is " +area);


// 2
 const sidea = parseFloat(prompt("Enter the side a:"));
 const sideb = parseFloat(prompt("Enter the side b:"));
 const sidec = parseFloat(prompt("Enter the side c:"));
 const perimeter = sidea + sideb + sidec;
 console.log ("The perimeter of triangle is "+perimeter);


//  3
const length = parseFloat(prompt("Enter the length of rectangle:"));
const width = parseFloat(prompt("Enter the width of rectangle:"));
const area1 = length * width;
const perim = 2 * (length+width);
console.log("The area of rectangle is: "+area1);
console.log("The Perimeter of rectangle is: "+perim);


// 4
const radii = parseFloat(prompt("Enter the radius of circle:"));
const area2 = 3.14 * radii * radii;
const circumference = 2 * 3.14 * radii;
console.log("The area of circle is " +area2);
console.log("The circumference of circle is " +circumference);


// 5
const slope = 2;              // y = 2x-2 , on comparing we get m(slope) = 2 
const xIntercept = 2 / slope; // to get x intercept we need to make y = 0
const yIntercept = -2;        // to get y intercept we need to make x = 0
console.log("The value of slope is: "+slope);
console.log("the value of x intercept is: "+xIntercept);
console.log("the value of y intercept is: "+yIntercept);


// 6
const x1 = 2;
const x2 = 6;
const y1 = 2;
const y2 = 10;

const slope1 = (y2-y1)/(x2-x1);
console.log("The slope between the points is: "+slope1);

// 7
if(slope == slope1){
    console.log("Both slopes are equal");
}else{
    console.log("Both slopes are not equal");
}

// 9
const Hours =  parseFloat(prompt("ENter the hours:"));
const Rates = parseFloat(prompt("Enter the Rates per hour:"));
const Payofperson = Hours * Rates;
 console.log("Your weekly Earning is "+Payofperson);

// 10
const name = prompt("ENter your name : ");
if(name.length>7){
    console.log("your name is long");
}else{
    console.log("your name is short");
}


// 11
let firstName = 'Asabeneh';
let LastName = 'yetayeh';
if(firstName.length>LastName.length){
    console.log("Your first name, "+firstName + "is longer than your family name, "+LastName);
}
else{
    console.log("equal");
}


// 12
let myAge = 250;
let yourAge = 25;
let older = myAge - yourAge;
console.log("I am "+older+ " years older than you.")


// 13
let userYear = prompt("Enter your birth year: ");
let currentYear = new Date().getFullYear();
let compYear = currentYear - userYear;
let driveYear = 18 - compYear;
 
if(compYear>=18){
    console.log("You are "+compYear+" you are old enough to drive");
}
else{
    console.log("You are "+compYear+", you will be allowed to drive after"+driveYear+" years");
}


// 14
const Year = prompt("Enter the number of years : ");
const second = 60;
const minute = 60;
const hour = 24;
const days = 365;
const totalSeconds = days*hour*minute*second;
const livedSecond = Year*totalSeconds;
console.log("You lived "+livedSecond+" seconds.");


// 15
// 15.1
const currentDate = new Date();
const FullYear1 = currentDate.getFullYear();
const month1 = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const date1 = currentDate.getDate().toString().padStart(2, '0');
const hour1 = currentDate.getHours().toString().padStart(2, '0');
const minute1 = currentDate.getMinutes().toString().padStart(2, '0');
const formattedDate = `${FullYear1}-${month1}-${date1} ${hour1}:${minute1}`;
console.log(formattedDate);
// 15.2
const currentDate2 = new Date();
const FullYear2 = currentDate2.getFullYear();
const month2 = (currentDate2.getMonth() + 1).toString().padStart(2, '0');
const date2 = currentDate2.getDate().toString().padStart(2, '0');
const hour2 = currentDate2.getHours().toString().padStart(2, '0');
const minute2 = currentDate2.getMinutes().toString().padStart(2, '0');
const formattedDate2 = `${date2}-${month2}-${FullYear2} ${hour2}:${minute2}`
console.log(formattedDate2);
// 15.3
const currentDate3 = new Date();
const FullYear3 = currentDate3.getFullYear();
const month3 = (currentDate3.getMonth() + 1).toString().padStart(2, '0');
const date3 = currentDate3.getDate().toString().padStart(2, '0');
const hour3 = currentDate3.getHours().toString().padStart(2, '0');
const minute3 = currentDate3.getMinutes().toString().padStart(2, '0');
const formattedDate3 = `${date3}/${month3}/${FullYear3} ${hour3}:${minute3}`
console.log(formattedDate3);