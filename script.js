function showMessage(message) {
  var id = message;
  document.getElementById(id).style.color = "#F0C3D6";
}

// This doesn't work because I'm calling the functions straight away...
// If someone could tell me wtf I was *supposed* to do considering I want to pass in parameters, that would be great.

// Because this way of dealing with it is gross and stupid and can't be what was intended.

// Okay never mind, apparently I was supposed to use anonymous functions.

// window.onload = function intro() {
//   // alert("test");
//   setInterval(showMessage("intro"), 20000);
//   setInterval(showMessage("greeting"), 100000);
// }

// function type() {
//   var message = "test";
//   var speed = 50;
//   for (var i = 0; i < message.length; i++) {
//     document.getElementById("placeholder").innerHTML += message.charAt(i);
//     setTimeout(type, speed);
//   }
// }

function showIntro() {
  document.getElementById("intro").style.color = "#F0C3D6";
  // var message = document.getElementById("intro");"
  // var message = "test";
  type();
}

function showGreeting() {
  document.getElementById("greeting").style.color = "#F0C3D6";
}

window.onload = function intro() {
  setInterval(showIntro, 1000);
  setInterval(showGreeting, 5000);
}

// var message = "test";
// var speed = 50;
//
// function type() {
//   for (var i = 0; i < message.length; i++) {
//     document.getElementById("placeholder").innerHTML += message.charAt(i);
//     setTimeout(type, speed);
//   }
// }
//
// type();
