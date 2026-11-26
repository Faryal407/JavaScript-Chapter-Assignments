//Question 1: Write a program that take two numbers & add them in a 
//new variable. Show the result in your browser. 

//Answer:
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");

// var sum = num1 + num2;
// document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//Question 2: Repeat task1 for subtraction, multiplication, division & 
//modulus. 

//Answer:
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var subtraction = num1 - num2;
// document.write("The Subtraction of " + num1 + " and " + num2 + " is " + subtraction);

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var multiplication = num1 * num2;
// document.write("<br>The Multiplication of " + num1 + " and " + num2 + " is " + multiplication);

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var division = num1 / num2;
// document.write("<br>The Division of " + num1 + " and " + num2 + " is " + division);

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var modulus = num1 % num2;
// document.write("<br>The Modulus of " + num1 + " and " + num2 + " is " + modulus);


//Question 3: Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
// Page 1 of 9 
// MATH EXPRESSIONS | JAVASCRIPT 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  
// l. Output : “The remainder is : 0”.

//Answer:
// var num;
// document.write("<br>Value after variable declaration is: " + num);
// num = 5;
// document.write("<br>Initial value: " + num);
// num++;
// document.write("<br>Value after increment is: " + num);
// num += 7;
// document.write("<br>Value after addition is: " + num);
// num--;
// document.write("<br>Value after decrement is: " + num);
// var remainder = num % 3;
// document.write("<br>The remainder is: " + remainder);

//Question 4: Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:

//Answer:
// var ticketPrice = 600;
// var numberOfTickets = +prompt("Enter the number of tickets you want to buy:");
// var totalCost = ticketPrice * numberOfTickets;
// document.write("<br>Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


//Question 5: Write a script to display multiplication table of any 
//number in your browser. 

//Answer:
// var number = +prompt("Enter a number to show its multiplication table:");
// document.write("<br>Multiplication Table of " + number + "<br>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write(number + " x " + i + " = " + result + "<br>");
// }


//Question 6: The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”.

//Answer:
// var celsius = +prompt("Enter temperature in Celsius:");
// var fahrenheit = (celsius * 9/5) + 32;
// document.write("<br>" + celsius + "°C is " + fahrenheit + "°F");


//Question 7:   Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables 
// Page 4 of 9 
// MATH EXPRESSIONS | JAVASCRIPT 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser.

//Answer:
// var item1Price = 200;
// var item2Price = 100;
// var item1Quantity = +prompt("Enter quantity of item 1:");
// var item2Quantity = +prompt("Enter quantity of item 2:");
// var shippingCharges = 100;
// document.write("<br>Price of item 1 is " + item1Price);
// document.write("<br>Quantity of item 1 is " + item1Quantity);
// document.write("<br>Price of item 2 is " + item2Price);
// document.write("<br>Quantity of item 2 is " + item2Quantity);
// document.write("<br>Shipping Charges " + shippingCharges);
// document.write("<br><br><b>Total cost of your order is <b> " + ((item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges));


//Question 8: Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser 

//Answer:
  // var totalMarks = 500;
  //       var marksObtained = 450;

  //       var percentage = (marksObtained / totalMarks) * 100;

  //       document.write("Total Marks: " + totalMarks + "<br>");
  //       document.write("Marks Obtained: " + marksObtained + "<br>");
  //       document.write("Percentage: " + percentage + "%");
