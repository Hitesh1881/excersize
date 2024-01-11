// Write a program that logs the current date and time to the console.// Create a new Date object to represent the current date and time
var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var formattedDateTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}:${seconds}`;

console.log("Current Date and Time:", formattedDateTime);
