// Kelly Sexton, Mathew Watson, Date 19 Sep 2016

// Problem 1 Problem 1
//Show how you would determine the location of the number 27 in the array:
//var numArray = [18, 24, 57, 98, 45 27, 3, 456, 3, 35, 85];
//Store its location in a variable.

var array = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var find = (array.indexOf(27));

console.log(find);




// Problem 2

//Using the same array from Problem 1, 
//calculate the sum of all numbers in the array and assign the sum to a variable.

var array = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];


var totalArray = 0;
for (var i = 0; i < array.length; i++) {
    totalArray = totalArray + array[i];

}
console.log(totalArray);




// Problem 3


//Initialize a new array and fill it with the numbers 
//1 through 10. Then, remove the last element of the array. 
//Output the array to the console.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var removelast = array.pop();

console.log(array);



// Problem 4 

//Create a function with two parameters. 
//This function will be passed two numbers as arguments. 
//Calculate the sum of the parameters. 
//If the sum is less than or equal to 25, 
//the function should return true. If not it should return false. 
//Be sure to use an appropriate function name.

function check(num1, num2) {
    var sum = 0;
    sum = sum + num1 + num2;
    if (sum <= 25) {
        console.log("true")
    } else {
        console.log("false")
    }
}

check(13, 12);
check(13, 13);
// using 2 checks to confirm function.








// Problem 5 

//Create a function with two parameters. 
//This function will be passed two strings as arguments. 
//Combine both of these strings and assign the result to a variable. 
//If this new string is longer than 12 characters, 
//return "Error, string too long.". 
//Otherwise, return the variable that stores the new string. 
//Be sure to use an appropriate function name.


function Namebadge(first, last) {
    var badge = 0;
    var badge = first.length + last.length;
    if (badge >= 11) {
        console.log("Error, string too long.")
    }
    else {
        console.log(first + last)
    }
}

Namebadge("Kelly ", "S.");
Namebadge("Kelly ", "Sexton");




// Problem 6

//Design a while loop that counts from 0 to 20 using the variable num. 
//If num is between 0 and 5 output "Very Low Number" to the console. 
//If it is between 6 and 10 output "Low Number" to the console. 
//If it is between 11-15 output "High Number" to the console. 
//For everything else output "Very High Number" to the console.

var num = 0

while (num < 20) {
    num = num + 1;
    if (num <= 5) {
        console.log("Very Low number");
    } else if (num <= 10) {
        console.log("Low Number");

    } else if (num <= 15) {
        console.log("High Number");
    } else if (num <= 20) {
        console.log("Very High Number");
    }
}



