// 1
const currentDate = new Date();
const year = currentDate.getFullYear();
const newyear = `${year}0`; 
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');

const formattedDate = `${newyear}-${month}-${day} ${hours}:${minutes}`;
console.log(formattedDate);
