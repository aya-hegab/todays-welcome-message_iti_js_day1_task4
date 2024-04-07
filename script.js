do {
  var userColor = prompt("write fav color: (red, green, blue)").toLowerCase();
} while (userColor !== "red" && userColor !== "green" && userColor !== "blue");

do {
  var userName = prompt("enter name (need to be a start with a string)");
} while (!isNaN(userName));

do {
  var userPhone = Number(prompt("enter tele number (8 digits)"));
  var numString = "" + userPhone;
} while (isNaN(userPhone) || numString.length !== 8);

var regNum = /^(010|011|012)/;
do {
  var userMob = prompt("enter mob number (starts with 010/011/012)");
  var compare = regNum.test(userMob);
} while (isNaN(Number(userMob)) || userMob.length !== 11 || compare === false);

// /^([0-9]|[a-z]){3}@[a-z]{3}.com$/
var regEmail = /^[a-z]{3}@[0-9]{3}.com$/;
do {
  var userMail = prompt("enter ur email (3 a to z chars @ 3 digits .com)");
  var compare = regEmail.test(userMail);
} while (compare === false);

var nowDate = new Date();
document.writeln(
  `<p class="color-${userColor}">Welcome dear guest <span>${userName}</span></p> <p class="color-${userColor}">ur tele number is <span>${userPhone}</span></p><p class="color-${userColor}">ur mobile num is <span>${userMob}</span></p>  <p class="color-${userColor}">ur email is <span>${userMail}</span></p> <p class="nowdate color-${userColor}">today is <span>${nowDate.toDateString()}</span></p>`
);
