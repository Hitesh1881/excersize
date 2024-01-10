// Write a program that uses a `do...while` loop to prompt the user for a password until they enter the correct password "secret123". 
// Log a success message to the console.


let enteredPassword;
const correctPaassword = "secret123";

do{
    enteredPassword=prompt ("Entered the password:")

    if(enteredPassword !== correctPaassword){
        console.log("Incorrect Password");
    }
}while(enteredPassword !== correctPaassword)
console.log("Login Successfully..");