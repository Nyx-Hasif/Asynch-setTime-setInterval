// ========================[setTimeout part]====================================
// function setTimeout
console.log("first console");
const paragraph = document.getElementById("test");

const hello = setTimeout(() => {
  paragraph.innerHTML = "LAST CONSOLE";
}, 5000);
console.log("second console");

// =============================================================
// setTimeout using button to call function
const greet = document.getElementById("greeting");
let isRed = false;
function callback() {
  setTimeout(function () {
    if (isRed) {
      greet.innerHTML = "Hello Cruel World";
      isRed = false;
    } else {
      greet.innerHTML = "Viral Hit";
      isRed = true;
    }
    greet.classList.toggle("red");
  }, 1000); //1s
}
// =====================================================
// setTimeout using callback
const greetBoy = document.getElementById("greetingBoy");
const count = document.getElementById("counter");
function greetHey() {
  greetBoy.innerHTML = "Hello Boy in 3s";
}
setTimeout(greetHey, 3000);

//kesimpulan kalau setTimeout berada dalam function ia mesti ada button untuk call baru bertindak
//klau setTimeout() berada di luar function ia akan bertindak auto(sendiri tanpa button)

// =====================[setInterval part]==============================
let counter = 0;
const lightUp = document.getElementById("lightUp");
const stop = setInterval(() => {
  lightUp.classList.toggle("lampu");
  counter++;
  count.innerHTML = counter;
}, 2000); //2s per blink

//  clearInterval(setInterval())    this is not working it suppose to call variable not function

setTimeout(() => {
  clearInterval(stop); // baru menjadi !
}, 20000); // 20s === 10kali blinking sbb guna toggle yg 2kali click toggle off/on

//using if else statement setInterval===============================================
const lampu = document.getElementById("lampuKotak");
let buka = true;
const bukaTutup = function bukaLampu() {
  if (buka) {
    lampu.classList.add("lampu");
    buka = false;
  } else {
    lampu.classList.remove("lampu");
    buka = true;
  }
};
setInterval(bukaTutup, 1000); //forever blinking ~ nk stop tgk atas balik paka clearInterval

//using button to trigger start setInterval button and off it using off button=================

const display = document.getElementById("display");
const start = document.getElementById("startBtn");
const off = document.getElementById("offBtn");

let invalid = null; // Initialize invalid to null to check if interval is already set

function startOn() {
  if (invalid === null) {
    //better use if statement for preventing rapidly blinking..refer coding bottom yg rapid blinking sebab variable invalid rapid add if click too much
    // Check if interval is already set
    invalid = setInterval(() => {
      display.classList.toggle("pink");
    }, 500);
  }
}

function startOff() {
  clearInterval(invalid);
  invalid = null; // when call this function..this variable will Reset the interval ID to indicate no interval is set
} //klau x letak invalid = null;..konfem2 invalid itu asal true balik naik keatas jadi invalid =true..so if(true=== null) is false! so if statement tak berjalan!

//[summary]
//Setting invalid = null in startOff is essential to indicate that no interval is currently set.
// It resets the state, allowing the startOn function to correctly start a new interval if the user clicks the start button again.
// Without this reset, the condition in startOn would prevent the interval from being restarted after it has been stopped.

//[without setting to null in startoff]
//Without setting invalid = null in startOff, after stopping the interval, invalid would still hold the old interval ID.
//This would mean invalid !== null, and the startOn function would not set a new interval if the start button is clicked again.

//ini part yg salah
// const display = document.getElementById("display");
// const start = document.getElementById("startBtn");
// const off = document.getElementById("offBtn");

// let invalid;
// function startOn() {
//   invalid = null;
//   invalid = setInterval(() => {
//     display.classList.toggle("pink");
//   }, 500);
// }

// function startOff() {
//   clearInterval(invalid);
// }
