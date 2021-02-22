// CHAPTER # 21 - 25  (String Methods)

// Task1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

//Task2
var mobile = prompt("Which is your favorite mobile phone model ?");
document.write("My favorite phone is: " + mobile + "<br>");
var len = mobile.length;
document.write("Length of string: " + len);

// Task3
var word = "Pakistani";
document.write("String: " + word + "<br>");
index = word.indexOf('n');
document.write("Index of 'n': " + index);

// Task4
var word = "Hello World";
document.write("String: " + word + "<br>");
index = word.lastIndexOf('l');
document.write("Last index of 'l': " + index);

// Task5
var word = "Pakistani";
document.write("String: " + word + "<br>");
index = word.charAt(3);
document.write("Character at index 3: " + index);

// Task6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ",lastName);
alert("Hello, " + fullName);

// Task7
var city = "Hyderabad";
var update = city.replace("Hyder","Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + update);

// Task8
var message = "Ali and Sami are best friends. They play cricket and football together.";
for(var x = 0; x < message.length; x++) {
    if(message.slice(x , x + 3) == "and") {
        message = message.slice(0, x) + "&" + message.slice(x + 3);
    }
}
document.write(message);

// Task9
var str = "472";
var type = typeof(str)
document.write("Value: " + str + "<br>");
document.write("Type: " + type + "<br>");
int = parseInt(str);
type2 = typeof(int);
document.write("Value: " + int + "<br>");
document.write("Type: " + type2);

// Task10
var user = prompt("Enter any string:");
var upper = user.toUpperCase();
document.write("User input: " + user + "<br>");
document.write("Upper case: " + upper);

// Task11
var user = prompt("Enter any string:");
var firstChar = user.slice(0,1);
var otherChar = user.slice(1);
var fullChar = firstChar.toUpperCase() + otherChar.toLowerCase();
document.write("User input: " + user + "<br>");
document.write("Title case: " + fullChar);

// Task12
var num = 35.36;
document.write("Number: " + num + "<br>");
var str = num.toString();
var str2 = str.replace(".","");
document.write("Result: " + str2);

// Task13
var user = prompt("User Name:");
for(var x = 0; x < user.length; x++) {
    if(user[x] == "@" || user[x] ==  "!" || user[x] ==  "." || user[x] ==  ",") {
        alert("Please enter a valid username")
        break
    }
    else if(user[x] != "@" || user[x] !=  "!" || user[x] !=  "." || user[x] !=  ",") {
        continue
    }
}

// Task14
var bakery = ["cake","apple pie","cookie","chips","patties"];
var customer = prompt("What do you want to order Sir/Ma'am ?");
customer = customer.toLowerCase();
for(var x = 0; x < bakery.length; x++) {
    if(customer == bakery[x]) {
        alert(customer + " is avaiable at index " + [x] + " in our bakery");
        break
    }
    else {
        alert("We are sorry, " + customer + " is not available in our bakery");
    }
}

// Task15
var user = prompt("Enter your new password:");
if(user[0] >= 1 && user[0] <= 9) {
    alert("Enter a valid password");
}
else if(user.length < 6) {
    alert("Enter a valid password");
}

// Taks16
var university = "University of Karachi";
var split = university.split("");
for(var x = 0; x < split.length; x++) {
    document.write(split[x] + "<br>")
}

// Task17
var user = prompt("Enter any string:");
var last = user.slice(user.length - 1);
document.write("User input: " + user + "<br>");
document.write("Last character of input: " + last);

// Task18
var str = "The quick brown fox jumps over the lazy dog"
count = 0;
for(var x = 0; x < str.length; x++) {
    if(str.slice(x , x + 3)  == "The" || str.slice(x , x + 3)  == "the") {
        count += 1;
    }
}
document.write("Text: " + str + "<br>");
document.write("There are " + count +  " occurrence(s) of word 'the'");



// CHAPTER # 26 - 30  (Math Methods)

// Task1
var num = +prompt("Enter any number:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

// Task2
var num = +prompt("Enter any number:");
document.write("Number: " + num + "<br>");
document.write("Round off value: " + Math.round(num) + "<br>");
document.write("Floor value: " + Math.floor(num) + "<br>");
document.write("Ceil value: " + Math.ceil(num));

// Task3
var num = -15;
var absolute = Math.abs(num);
document.write("The absolute value of " + num + " is " + absolute); 

// Task4
var num = Math.random() * 6 + 1;
num = Math.floor(num);
document.write("Random dice value: " + num);

// Task5
var num = Math.random() * 2 + 1;
num = Math.floor(num);
var coin;
if (num == "1") {
    coin = "Tails";
    document.write(num + "<br>" + "Random coin value: " + coin);
}
else {
    coin = "Heads";
    document.write(num + "<br>" + "Random coin value: " + coin);
}

// Task6
var num = Math.random() * 100 + 1;
num = Math.floor(num);
document.write("Random number between 1 and 100: " + num);

// Task7
var weight = prompt("Enter your weight in kilograms:");
weight = parseFloat(weight);
document.write("The weight of user is " + weight + " kilograms");

// Task8
var num = Math.random() * 10 + 1;
num = Math.floor(num);
var user = +prompt("Guess a secret number between 1 and 10:");
if(user == num) {
    alert("Congratulations, your guess is correct")
}
else {
    alert("Try again!")
}



// CHAPTER 31 - 34 (Date Methods)

// Task1
var date = new Date();
document.write(date);

// Task2
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("Current month: " + months[d.getMonth()]);

// Task3
var d = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
document.write("Today is " + days[d.getDay()]);

// Task4
var d = new Date();
var today = d.getDay();
if(today == 0 || today == 6) {
    document.write("It's Fun day");
}

// Task5
var d = new Date();
var today = d.getDate();
if(today < 16) {
    document.write("First fifteen days of the month");
}
else {
    document.write("Last days of the month");
}

// Task6
var d = new Date();
var milliSeconds = d.getTime();
var minutes = milliSeconds/(1000*60);
document.write("Current Date: " + d + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");

// Task7
var d = new Date();
var time = d.getHours();
if(time < 12) {
    alert("It's AM");
}
else {
    alert("It's PM");
}

// Task8
var laterDate = new Date("Dec 31, 2020");
document.write(laterDate);

// Task9
var currentDate = new Date("Jun 19, 2020");
var firstRamzan = new Date("Apr 24, 2020");
var daysPassed = (currentDate - firstRamzan) / (1000*60*60*24);
document.write(daysPassed + " days have passed since 1st Ramadan, 2020");

// Task10
var currentDate = new Date();
var startOf2020 = new Date("Jan 1, 2020");
var secondsElapsed = (currentDate - startOf2020) / 1000;
document.write("On reference date " + currentDate + ",<br>");
document.write(secondsElapsed + " seconds had passed since beginning of 2015");

// Task11
var currentDate = new Date();
var date = new Date();
date.setHours(date.getHours() - 1);
document.write("Current date: " + currentDate + "<br>");
document.write("1 hour ago, it was " + date);

// Task12
var currentDate = new Date();
var date = new Date();
date.setFullYear(date.getFullYear() - 100);
document.write("Current date: " + currentDate + "<br>");
document.write("100 years back, it was " + date);

// Task13
var age = +prompt("What is your age ?");
var date = new Date();
var birthYear = date.getFullYear() - age; 
document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);

// Task14
var units = 410;
var perUnit = 16;
var surcharge = 350;
var date = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("K-Electric Bill" + "<br><br>");
document.write("Customer Name: ABC Customer" + "<br>");
document.write("Month: " + month[date.getMonth()] + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + perUnit + "<br><br>");
document.write("Net Amount Payable (within Due Date): " + (units * perUnit) + "<br>");
document.write("Late payment surcharge: " + surcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + ((units * perUnit) + surcharge));



// CHAPTER 35 - 38 (Function)

// Task1
function date() {
    document.write(new Date());
}
date();

// Task2
function greet() {
    var fName = prompt("Your first name:");
    var lName = prompt("Your last name:");
    var fullName = fName + " " + lName;
    document.write(fullName);
}
greet();

// Task3
function sum() {
    var num1 = +prompt("Enter 1st number:");
    var num2 = +prompt("Enter 2nd number:");
    return num1 + num2;
}
var result = sum();
document.write("Sum: " + result);

// Task4
function calculator(num1,opr,num2) {
    if(opr == "+") {
        return num1 + num2;
    }
    else if(opr == "-") {
        return num1 - num2;
    }
    else if(opr == "*") {
        return num1 * num2;
    }
    else if(opr == "/") {
        return num1 / num2;
    }
    else if(opr == "%") {
        return num1 % num2;
    }
    else {
        return "Invalid Operator"
    }
}
var result = calculator(15,"+",25);
document.write("Result: " + result);

// Task5
function square(num) {
    var result = num * num;
    document.write("Square of " + num + " is " + result);
}
square(10);

// Task6
function factorial(){
    var num = +prompt("Enter number to get factorial of:");
    var answer = 1;
    if (num == 0) {
        document.write("Factorial of " + num + " is " + answer);
    }
    else {
        for(var x = num; x >= 1; x--){
            answer = answer * x;
        }
        document.write("Factorial of " + num + " is " + answer);
    }  
}
factorial();

// Task7
function counting() {
    var startNum = +prompt("Enter starting number of counting:");
    var endNum = +prompt("Enter ending number of counting:");
    for(var x = startNum; x <= endNum; x++) {
        document.write(x + "<br>");
    }
}
counting();

// Task8
function calculateHypotenuse() {
    var base = +prompt("Enter 'Base' of right traingle:");
    var perpendicular = +prompt("Enter 'Perpendicular' of right traingle:");
    var hypotenuse = (base * base) + (perpendicular * perpendicular);

    var result = calculateSquare();
    document.write("Hypotenuse : " + result);
    function calculateSquare() {
        var answer = hypotenuse * hypotenuse;
        return answer;
    }
}
calculateHypotenuse();

// Task9
var width = 10;
function areaOfRectangle(width,height) {
    var A = width * height; 
    document.write("Area of rectangle is: " + A);
}
areaOfRectangle(width,20);

// Task10
function palindrome() {
    var reverse = "";
    var word = prompt("Enter any string to check for palindrome:");
    for(var x = word.length-1; x >= 0; x--) {
        reverse += word[x];
    }
    if (word == reverse) {
        document.write(word + " is Palindrome")
    }
    else {
        document.write(word + " is not Palindrome")
    }
}
palindrome();

// Task11
function upperCase(str) {
    var split = str.split(' ');
    var arr = [];
    for(var x = 0; x < split.length; x++){
        arr.push(split[x].charAt(0).toUpperCase()+split[x].slice(1).toLowerCase());
    }
    document.write(arr.join(" "));
}
upperCase("the quick brown fox");

// Task12
function findLongestWord(str) {
    var split = str.split(' ');
    var longest = "";
    for(var x = 0; x < split.length; x++){
      if(split[x].length > longest.length) {
          longest = split[x];
       }
    }
    document.write("Longest word in string: " + longest)
}
findLongestWord("Web Development Tutorial");

// Task13
function letter(str,char) {
    var count = 0;
    for(var x = 0; x < str.length; x++) {
        if(str[x] == char) {
            count += 1;
        }
    }
    document.write("The number of occurrences of letter ' " + char + " ' in ' " + str + " ' is " + count)
}
letter("bookkeeper","e");

// Task14
var pi = 3.142;
function calcCircumference(r) {
    circumference = 2 * pi * r;
    document.write("The circumference is " + circumference + "<br>");
}
function calcArea(r) {
    area = pi * r * r;
    document.write("The area is " + area);
}
calcCircumference(25);
calcArea(17);