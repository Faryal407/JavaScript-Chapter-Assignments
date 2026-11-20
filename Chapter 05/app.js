//Question 1
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");

// var sum = num1 + num2;
// document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//Question 2
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
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


//Question 3
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

//Question 4
// var ticketPrice = 600;
// var numberOfTickets = +prompt("Enter the number of tickets you want to buy:");
// var totalCost = ticketPrice * numberOfTickets;
// document.write("<br>Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


//Question 5
// var number = +prompt("Enter a number to show its multiplication table:");
// document.write("<br>Multiplication Table of " + number + "<br>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write(number + " x " + i + " = " + result + "<br>");
// }


//Question 6
// var celsius = +prompt("Enter temperature in Celsius:");
// var fahrenheit = (celsius * 9/5) + 32;
// document.write("<br>" + celsius + "°C is " + fahrenheit + "°F");


//Question 7
var item1Price = 200;
var item2Price = 100;
var item1Quantity = +prompt("Enter quantity of item 1:");
var item2Quantity = +prompt("Enter quantity of item 2:");
var shippingCharges = 100;
document.write("<br>Price of item 1 is " + item1Price);
document.write("<br>Quantity of item 1 is " + item1Quantity);
document.write("<br>Price of item 2 is " + item2Price);
document.write("<br>Quantity of item 2 is " + item2Quantity);
document.write("<br>Shipping Charges " + shippingCharges);
document.write("<br><br><b>Total cost of your order is <b> " + ((item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges));
