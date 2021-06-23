var i = 0;
var txt = randomText();
var speed = 50;

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
})

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewrite").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function randomText() {
  var textArray = [
    "I am a full-stack developer.",
    "I make APIs.",
    "I make discord bots.",
    "I'm an upcoming UX/UI designer.",
    "I'm a producer."
  ];
  var randomNumber = Math.floor(Math.random()*textArray.length);

  return textArray[randomNumber];
}