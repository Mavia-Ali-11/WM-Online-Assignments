// CHAPTER # 1 (Alerts)

// Task1
alert("Welcome !")

// Task2
alert("Error! Please enter a valid password.")

// Task3
alert("Welcome to JS Land...\nHappy Coding!")

// Task4
alert("Welcome to JS Land...")
alert("Happy Coding!\n\nPrevent this page from creating additional dialogs.")

// Task5 , (I have write this code on console and it is displaying the alert)
alert("Hello... I can run JS through my browser's developer console")

// Task6 and Task7 is done in 'index.html' as per reqirement of questions.



// CHAPTER # 2 (Variables for Strings) 

// Task1
var username;

// Task2
var myName;
myName = "Mavia Ali";

// Task3
var message;
message = "Hello World"
alert(message)

// Task4
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name)
alert(age)
alert(course)

// Task5
var x = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(x)

// Task6
var email;
email = "maviaali597@gmail.com"
alert("My email address is" + " " + email)

// Task7
var book;
book = "A smarter way to learn JavaScript"
alert("I am trying to learn from the Book" + " " + book)

// Task8
document.write("Yah! I can write HTML content through JavaScript" + "<br>")

// Task9
var design = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(design);



// CHAPTER # 3 (Variables for numbers)

// Task1
var age;
age = 19
alert("I am" + " " + age + " " + "years old")

//  Task2
var visitCount = 14;
alert("You have visited this site" + " " + visitCount + " " + "times")

// Task3
var birthYear;
birthYear = 2001
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof(birthYear) + "<br><br>")

// Task4
var name;
var product;
var quantity;
var store;
name = "John Doe"
product = "T-shirt(s)"
quantity = 5
store = "XYZ Clothing store"
document.write(name + " " + "ordered" + " " + quantity + " " + product + " " + "on" + " " + store)



// Chapter # 4 (Variables name: Legal & Illegal)

// Task1
var var1 , var2 , var3;

// Task2     
// Legal variable names
var example;  
var $example;
var _example;
var example123;
var $100example;

// Illegal variable names
// var #;
// var break;
// var !example;
// var exa mple;
// var 123example;


// Task3
document.write("Rules for naming JS variables :-" + "<br><br>")
document.write("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable" + "<br>")
document.write("Variable must begin with a letter, $ or _. For example $name, _name or name" + "<br>")
document.write("Variable names are case sensitive" + "<br>")
document.write("Variable names should not be JS keywords")



// Chapter # 5 (Math Expressions)

// Task1
var num1 = +prompt("Enter num 1: ") 
var num2 = +prompt("Enter num 2: ") 
result = num1 + num2
document.write("Sum of " + num1 + " and " + num2 + " is " + result + "<br>")

// Task2
var num1 = +prompt("Enter num 1: ") 
var num2 = +prompt("Enter num 2: ") 
result1 = num1 - num2
result2 = num1 * num2
result3 = num1 / num2
result4 = num1 % num2
document.write("Difference of " + num1 + " and " + num2 + " is " + result1 + "<br>")
document.write("Product of " + num1 + " and " + num2 + " is " + result2 + "<br>")
document.write("Quotient of " + num1 + " and " + num2 + " is " + result3 + "<br>")
document.write("Modulus of " + num1 + " and " + num2 + " is " + result4)

// Task3
var a;
document.write("Value after variable declaration is " + a + "<br>")
a = 5
document.write("Initial value: " + a + "<br>")
a = ++a
document.write("Value after increment is: " + a + "<br>")
a = a + 7
document.write("Value after addition is: " + a + "<br>")
a = --a
document.write("Value after decrement is: " + a + "<br>")
a = a % 3
document.write("The remainder is : " + a + "<br>")

// Task4
var ticket = 600;
tickets = ticket * 5
document.write("<br>" + "Total cost to buy 5 tickets to a movie is " + tickets + "PKR")

// Task5
document.write("<br><br>" + "Table of 5" + "<br>")
var num = 5;
for(var x = 1; x <= 10; x++) {
    document.write(num + " * " + x + " = " + num * x + "<br>")
}

// Task6
var C = 35;
var F = 100;
var result1 = (C * 9 / 5) + 32;
var result2 = (F - 32) * (5 / 9);
document.write("<br>" + "-: Temperature Converter :-" + "<br><br>")
document.write(C + "&#176;C is " + result1 + "&#176;F" + "<br>")
document.write(F + "&#176;F is " + result2 + "&#176;C" + "<br>")

// Task7
var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping = 100;
var totalCost = (price1 * quantity1) + (price2 * quantity2) +  shipping;
document.write("<br>" + "-: Shopping Cart :- " + "<br><br>") 
document.write("Price of item 1 is " + price1 + "<br>")
document.write("Quantity of item 1 is " + quantity1 + "<br>")
document.write("Price of item 2 is " + price2 + "<br>")
document.write("Quantity of item 2 is " + quantity2 + "<br>")
document.write("Shipping Charges " + shipping + "<br>")
document.write("<br>" + "Total cost of your order is " + totalCost)

// Task8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<br><br>" + "-: Marks Sheet :-" + "<br><br>")
document.write("Total Marks: " + totalMarks + "<br>")
document.write("Obtained Marks: " + obtainedMarks + "<br>")
document.write("Percentage: " + percentage + "%<br>")

// Task9
var dollars = 10;
var riyals = 25;
var oneDollar = 164.50;
var oneRiyal = 43.84;
var PKR = (dollars * oneDollar) + (riyals * oneRiyal);
document.write("<br>" + "Total Currency in PKR: " + PKR)

// Task10
var x = 10;
var result = (x + 5) * 10 / 2;
document.write("<br><br>" + "Final result: " + result)

// Task11
var currentYear = 2020;
var birthYear = 2001;
var age1 = currentYear - birthYear - 1;
var age2 = currentYear - birthYear;
document.write("<br><br>-: Age Calculator :-<br><br>")
document.write("Current Year: " + currentYear + "<br>")
document.write("Birth Year: " + birthYear + "<br>")
document.write("Your age is either " + age1 + " or " + age2)

// Task12
var pi = 3.142
var radius = 20;
var circumference = 2 * pi * radius;
var area = pi * radius ** 2;
document.write("<br><br>" + "-: The Geometrizer :-" + "<br><br>")
document.write("Radius of a circle: " + radius + "<br>")
document.write("The circumference is: " + circumference + "<br>")
document.write("The area is: " + area)

// Task13
var snack = "chocolte chip";
var age = 15;
var maxAge = 65;
var snackAmount = 3;
var lifeTime = (maxAge - age) * 3;
document.write("<br><br>" + "-: The Lifetime Supply Calculator :-" + "<br><br>")
document.write("Favourite Snack: " + snack + "<br>")
document.write("Current age: " + age + "<br>")
document.write("Estimated maximum age: " + maxAge + "<br>")
document.write("Amount of snacks per day: " + snackAmount + "<br>")
document.write("You will need " + lifeTime + " " + snack + " to last you until the ripe old age of " + maxAge)



// Chapter # 6-9 (Math Expressions)

// Task1
var a = 10;
document.write("Result:" + "<br>" + "The value of a is: " + a)
document.write("<br>" + "............................................" + "<br>");
++a;
document.write("The value of ++a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
document.write("The value of a++ is: " + a + "<br>")
a++;
document.write("Now the value of a is: " + a + "<br><br>")
--a;
document.write("The value of --a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
document.write("The value of a-- is: " + a + "<br>")
a--;
document.write("Now the value of a is: " + a)

// Task2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br><br>")
document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "result is " + result)

// Task3
var user = prompt("What is your name?")
alert("Welcome, " + user)

// Task4
var user = +prompt("Enter any table number:")
document.write("<br><br>")
if (user == " ") {
    for(var x = 1; x <= 10; x++) {
        document.write("5" + " * " + x + " = " + 5 * x + "<br>")
    }
}
else {
    for(var x = 1; x <= 10; x++) {
        document.write(user + " * " + x + " = " + user * x + "<br>")
    }
}

// Task5
var sub1 = prompt("Enter name of 1st subject:");
var sub2 = prompt("Enter name of 2nd subject:");
var sub3 = prompt("Enter name of 3rd subject:");
var obt1 = +prompt("Marks obtained in 1st subject:");
var obt2 = +prompt("Marks obtained in 2nd subject:");
var obt3 = +prompt("Marks obtained in 3rd subject:");
var total = 100;
var obtained = obt1 + obt2 + obt3;
var perc1 = (obt1 / total) * 100;
var perc2 = (obt2 / total) * 100;
var perc3 = (obt3 / total) * 100;
var percentage = ((perc1 + perc2 + perc3) / 300) * 100; 
document.write("<br><br>");
document.write("Subject &nbsp&nbsp;" + "Total Marks &nbsp&nbsp;" + "Obtained Marks &nbsp&nbsp;" + "Percentage");
document.write("<br><br>" + sub1 + "&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obt1 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perc1 + "%" + "<br>");
document.write(sub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obt2 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perc2 + "%" + "<br>");
document.write(sub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + total + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obt3 + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perc3 + "%" + "<br>");
document.write("<br>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "300" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + obtained + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + percentage + "%");



// Chapter # 9-11 (User Input & Conditional Statement)

// Task1
var city = prompt("Enter city name:")
if (city == "Karachi") {
    alert("Welcome to the city of lights")
}
else {
    alert("Welcome to " + city)
}

// Task2
var gender = prompt("What is your gender ?")
check = gender.toLowerCase();
if (check == "male") {
    alert("Good Morning Sir")
}
else {
    alert("Good Morning Ma'am")
}

// Task3
var signal = prompt("Color of traffic signal ?")
check = signal.toLowerCase();
if (check == "red") {
    alert("Must Stop")
}
else if (check == "yellow") {
    alert("Ready to Move")
}
else if (check == "green") {
    alert("Move Now")
}
else {
    alert("Invalid signal color")
}

// Task4
var fuel = +prompt("Remaining fuel in car (In Litres) ?")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("You car has enough fuel till now")
}

// Task5 (a)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Alert message displayed here

// (b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// Alert message not displayed here

// (c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// Alert message displayed here

// (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Alert message displayed here

// (e)
if (true){
    alert("True");
    }
if (false){
    alert("False");
}
// Alert message displayed here

// (f)
if("car" < "cat") {
    alert("car is smaller than cat");
}
// Alert message displayed here


// Task6
var obt1 = +prompt("Marks obtained in 1st subject:")
var obt2 = +prompt("Marks obtained in 2nd subject:")
var obt3 = +prompt("Marks obtained in 3rd subject:")
var totalMarks = +prompt("Total Marks:")
var obtMarks = (obt1 + obt2 + obt3);
var perc = (obtMarks / (totalMarks * 3) * 100)
perc = perc.toFixed(3)
document.write("-: Mark Sheet :-" + "<br><br>")
document.write("Total Marks: " + totalMarks * 3 + "<br>")
document.write("Marks Obtained: " + obtMarks + "<br>")
document.write("Percentage: " + perc + "%" + "<br>")
if (perc >= 80) {
    document.write("Grade: A-one" + "<br>" + "Remarks: Excellent")
}
else if (perc >= 70 && perc < 80) {
    document.write("Grade: A" + "<br>" + "Remarks: Good")
}
else if (perc >= 60 && perc < 70) {
    document.write("Grade: B" + "<br>" + "Remarks: You need to improve")
}
else if (perc < 60) {
    document.write("Grade: Fail" + "<br>" + "Remarks: Sorry")
}

// Task7
var number = Math.random() * 9 + 1
number = number.toFixed(0)
var user = +prompt("Guess the secret number (1 - 10) :")
if(user == number) {
    alert("Bingo! Correct answer" + "\n\n" + "Secret number:  " + number)
}
else if(user + 1 == number) {
    alert("Close enough to the correct answer" + "\n\n" + "Secret number was " + number)
}
else {
    alert("Your guess is Incorrect" + "\n\n" + "Secret number was " + number)
}

// Task8
var num = +prompt("Enter any number:")
if (num % 3 == 0) {
    alert(num + " is divisible by 3")
}
else {
    alert(num + " is not divisible by 3")
}

// Task9 
var num = +prompt("Enter any number:")
if (num % 2 == 0) {
    alert(num + " is Even")
}
else {
    alert(num + " is odd")
}

// Task10 
var temp = +prompt("Enter temperature in celsius:")
if (temp > 40) {
    alert("It is too hot outside.")
}
else if (temp > 30) {
    alert("The Weather today is Normal.")
}
else if (temp > 20) {
    alert("Today's Weather is cool.")
}
else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.")
}

// Task11
num1 = +prompt("Enter 1st value: ")
operator = prompt("Enter Operator: ")
num2 = +prompt("Enter 2nd value: ")
if (operator == "+") {
    alert("Ans: " + (num1 + num2))
}
else if (operator == "-") {
    alert("Ans: " + (num1 - num2))
}
else if (operator == "*") {
    alert("Ans: " + (num1 * num2))
}
else if (operator == "/") {
    alert("Ans: " + (num1 / num2))
}
else if (operator == "%") {
    alert("Ans: " + (num1 % num2))
}
else {
    alert("Invalid Operator")
}



// Chapter # 12-13 (If Else & Else If Statement, Testing Set Of Conditions)

// Task1
var ch = prompt("Type any character or number:")
if (ch >= 'A' && ch <= 'Z') {
    alert(ch +  " is a UpperCase character");  
}
else if (ch >= 'a' && ch <= 'z') {
    alert(ch + " is a LowerCase character" );  
}
else if (ch >= '0' && ch <= '9') {
    alert(ch + " is a Number" );  
}
else {
    alert("Invalid Input");
}

// Task2
var num1 = +prompt("Enter 1st Number:")
var num2 = +prompt("Enter 2nd Number:")
if (num1 > num2) {
    alert(num1 + " is greater than " + num2)
}
else if (num1 < num2) {
    alert(num2 + " is greater than " + num1)
}
else if (num1 == num2) {
    alert("Both numbers are equal to each other")
}
else {
    alert("Invalid Input Type")
}

// Task3
var num = +prompt("Enter any number:")
if (num > 0) {
    alert("Number is positive")
}
else if (num < 0) {
    alert("Number is negative")
}
else if (num == 0) {
    alert("Number is " + num + ", and zero has no sign")
}
else {
    alert("Invalid Input Type")
}

// Task4
var ch = prompt("Enter any character:")
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    alert("True, it is a vowel")
}
else {
    alert("False, not a vowel")
}

// Task5
var password = "javascript";
var user = prompt("Enter Password:")
if (user == "") {
    alert("Please enter your password")
}
else if (user == password) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}

// Task6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Task7
var time = +prompt("What is the time (24 hour format) ?")
if (time >= 0 && time < 12) {
    alert("Good Morning!")
}
else if (time >= 12 && time < 17) {
    alert("Good Afternoon!")
}
else if (time >= 17 && time < 21) {
    alert("Good Evening!")
}
else if (time >= 21 && time <= 24) {
    alert("Good Night!")
}
else {
    alert("Invalid Time Format")
}



// Chapter # 14-16 (Arrays)

// Task1
let studNames = [];
console.log(studNames);

// Task2
let studNames2 = {};
console.log(studNames2)

// Task3
var cities = ["Karachi","Lahore","Islamabad","Rawalpindi"]
console.log(cities)

// Task4
var numbers = [10,20,30,40,50,60,70,80,90,100]
console.log(numbers)

// Task5
var bool = [true,false]
console.log(bool)

// Task6
var mixArr = ["JavaScript",7,99.99,true]
console.log(mixArr)

// Task7
var eduQualification = ["","SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]

document.write("Qualifications:" + "<br><br>")
for(var i = 1; i < eduQualification.length; i++){
    document.write([i] + ") " + eduQualification[i] + "<br>")        
}

console.log("\n\n")

// Task8
var names = ["Michael","John","Tonny"]
var score = [320,230,480]

for(var y = 0; y < names.length; y++) {
    var perc = (score[y] / 500) * 100
    console.log("Score of " + names[y] + " is " + score[y] + "." + " Percentage: " + perc + "%")
}

console.log("\n\n")

// Task9
var colors = ["Orange"]
console.log(colors)
var user = prompt("What color you want to add in the beginning?")
colors.unshift(user)
console.log(colors)
var user = prompt("What color you want to add in the end?")
colors.push(user)
console.log(colors)
var user = prompt("1st of two more colors in the beginning of array?")
var user1 = prompt("2nd of two more colors in the beginning of array?")
colors.unshift(user,user1)
console.log(colors)
colors.shift(user)
console.log(colors)
colors.pop()
console.log(colors)
var user = prompt("At which index you want to insert the value?")
var user1 = prompt("What value you want to insert?")
colors.splice(user,0,user1)
console.log(colors)
var user2 = prompt("From which index you want to delete the value?")
var user3 = prompt("How many value you want to delete?")
colors.splice(user2,user3)
console.log(colors)

// Task10
stdScores = [320,230,480,120]
console.log("Scores of Students : ",stdScores)
console.log("Ordered Scores of Students : ",stdScores.sort())

console.log("\n\n")

// Task11
cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawer"]
console.log("Cities list : ",cities)
console.log("Selected cities list : ",cities.slice(2,5))

console.log("\n\n")

// Task12
arr = ["This","is","my","cat"]
console.log("Array : ",arr)
console.log("String : ",arr.join(" "))

console.log("\n\n")

// Task13
var devices = ["keyborad","mouse","printer","monitor"]
console.log("Devices:\n" + devices)
for(var x = 0; x < devices.length; x++) {
    console.log("Out:\n" + devices[x])
}

console.log("\n\n")

// Task14
var devices = ["keyborad","mouse","printer","monitor"]
console.log("Devices:\n" + devices)
for(var y = devices.length - 1; y >= 0 ; y--) {
    console.log("Out:\n" + devices[y])
}

console.log("\n\n")

// Task15
var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write("<br>" +  "Mobile manufacturers:" + "<br>")
for(var x = 0; x < manufacturers.length;  x++){
    document.write("<br>" + manufacturers[x])
}



// Chapter # 17-20 (Arrays & Loop)

// Task1
var arr = [[],[],[],[]];

// Task2
var matrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(matrix[0].join(" ") + "<br>" + matrix[1].join(" ") + "<br>" + matrix[2].join(" ") + "<br>")

// Task3
for(var x = 1; x <= 10; x++) {
    document.write("<br>" + x)
}

// Task4
var table = +prompt("Enter a number to show it's multiplication table:")
var length = +prompt("Length of multiplication table:")
document.write("<br><br><br>" + "Multiplication table of : " + table + "<br>" + "Length : " + length + "<br><br>")
for(var x = 1; x <= length; x++) {
    document.write(table + " * " + x + " = " + table * x + "<br>")
}

// Task5
document.write("<br><br>")
var fruits = ["apple","banana","mango","orange","strawberry"]
for(var x = 0; x < fruits.length; x++) {
    document.write(fruits[x] + "<br>")
}
document.write("<br>")
for(var x = 0; x < fruits.length; x++) {
    document.write("Element at index " + [x] + " is " + fruits[x] + "<br>")
}

// Task6
document.write("<br><br>Counting:<br>")
for(var x = 1; x <= 15; x++) {
    document.write(x + ", ")
}
document.write("<br><br>Reverse counting:<br>")
for(var x = 10; x >= 1; x--) {
    document.write(x + ", ")
}
document.write("<br><br>Even:<br>")
for(var x = 0; x <= 20; x = x+2) {
    document.write(x + ", ")
}
document.write("<br><br>Odd:<br>")
for(var x = 1; x <= 20; x = x+2) {
    document.write(x + ", ")
}
document.write("<br><br>Series:<br>")
for(var x = 2; x <= 20; x = x+2) {
    document.write(x + "k, ")
}

// Task7
var bakery = ["cake","apple pie","cookie","chips","patties"]
var customer = prompt("What do you want to order Sir/Ma'am ?")
customer = customer.toLowerCase()
for(var x = 0; x < bakery.length; x++) {
    if(customer == bakery[x]) {
        alert(customer + " is avaiable at index " + [x] + " in our bakery")
        break
    }
    else {
        alert("We are sorry, " + customer + " is not available in our bakery")
    }
}

// Task8
document.write("<br><br>")
var array = [24,53,78,91,12]
var largest = 0;

for (i = 0; i < array.length; i++){
    if (array[i] > largest) {
        var largest = array[i];
    }
}
document.write("Array items: " + array.join(", ") + "<br>")
document.write("The largest number is ", largest);

// Task9
document.write("<br><br>")
var array = [24,53,78,91,12]
var smallest = array[0];

for (i = 0; i < array.length; i++){
    if (array[i] < smallest) {
        var smallest = array[i];
    }
}
document.write("Array items: " + array.join(", ") + "<br>")
document.write("The smallest number is ", smallest);

// Task10
document.write("<br><br>")
for(var x = 5; x <= 100; x = x + 5) {
    document.write(x + ", ")
}