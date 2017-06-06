//Function number 2 //
function maxOfThree(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}
alert(maxOfThree(56,29,7));


function max (x, y){
  let result;
  if (x > y) {
    result = x;
  }
  else
    result = y;
    return result;
}

function sum(x,y){
  return x+y;
}
sum(1,2);


function greet (Name) {

  return "Hello, " + Name ;
}


// Function #9: madlib
function madlib(company, offering, audience, problem, secret) {
  let message = "My company, " + company;
  message += ", is developing " + offering;
  message += " to help " + audience;
  message += " solve the problem of " + problem;
  message += " with " + secret + ".";
  return message;
}

//Function number 2 //
function maxOfThree(num1, num2, num3)
{
    var max = Math.max(num1, num2, num3);
    return max;
}
// alert(maxOfThree(56,29,7));


//Part 5

function avg(a, b, c) {
  return (a + b + c)/3;
}


//Part 6
function getLength(n) {
	let str = n;
	let x = str.length;
	return x;
}


function greaterThan (p1,p2) {
  return p2 > p1;
}


//vowels true or false//

function vowel (x) {
  if (x == "a" || x =="e" || x =="i" || x == "o" || x == "u"){
    result = true
  }
  else {
  result = false;
  }
  return result;
}
