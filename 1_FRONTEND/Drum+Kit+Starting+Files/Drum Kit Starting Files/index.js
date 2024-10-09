// let buttons = document.querySelectorAll("button");
// let audio;

// for (const button of buttons) {
//   button.addEventListener("click", function () {
//     let buttonInnerHTML = this.innerHTML;

//     switch (buttonInnerHTML) {
//       case "w":
//         audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//         break;

//       case "a":
//         audio = new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//         break;

//       case "s":
//         audio = new Audio("./sounds/snare.mp3");
//         audio.play();
//         break;

//       case "d":
//         audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();
//         break;

//       case "j":
//         audio = new Audio("./sounds/tom-2.mp3");
//         audio.play();
//         break;

//       case "k":
//         audio = new Audio("./sounds/tom-3.mp3");
//         audio.play();
//         break;

//       case "l":
//         audio = new Audio("./sounds/tom-4.mp3");
//         audio.play();
//         break;

//       default:
//         break;
//     } 
//   });
// }


// document.addEventListener("keydown", function(event){
//   makeSound(event.key);
// });

// function makeSound(key){
//   switch (key) {
//     case "w":
//       audio = new Audio("./sounds/crash.mp3");
//       audio.play();
//       break;

//     case "a":
//       audio = new Audio("./sounds/kick-bass.mp3");
//       audio.play();
//       break;

//     case "s":
//       audio = new Audio("./sounds/snare.mp3");
//       audio.play();
//       break;

//     case "d":
//       audio = new Audio("./sounds/tom-1.mp3");
//       audio.play();
//       break;

//     case "j":
//       audio = new Audio("./sounds/tom-2.mp3");
//       audio.play();
//       break;

//     case "k":
//       audio = new Audio("./sounds/tom-3.mp3");
//       audio.play();
//       break;

//     case "l":
//       audio = new Audio("./sounds/tom-4.mp3");
//       audio.play();
//       break;

//     default:
//       break;
//   }
// }



//BETTER VERSION -- called event delegation with condition checking.
// for (const button of buttons) {
//     button.addEventListener("click", function () {
//       let buttonInnerHTML = this.innerHTML;
      
//       if (["w", "a", "s", "d", "j", "k", "l"].includes(buttonInnerHTML)) {
//         audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//       }
//     });
//   }wadwsdawdasda

//BETTER VERSION -- this way allows to avoid checking for what key is pressed inside the function as i see since all of them were mapped
const soundMap = {
  'w': './sounds/crash.mp3',
  'a': './sounds/kick-bass.mp3',
  's': './sounds/snare.mp3',
  'd': './sounds/tom-1.mp3',
  'j': './sounds/tom-2.mp3',
  'k': './sounds/tom-3.mp3',
  'l': './sounds/tom-4.mp3'
};

// Play sound function
function playSound(key) {
  playAnimation(key);
  const soundFile = soundMap[key];
  if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
  }
}

// Handle both keydown and click events
document.addEventListener('keydown', function(event) {
  playSound(event.key.toLowerCase());
  //playAnimation(event.key.toLowerCase());
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
      const key = this.innerHTML;//this.getAttribute('data-key'); --> HTML should look like this <button class="w drum" data-key="w">w</button>
      playSound(key);
      //playAnimation(key);
  });
});

function playAnimation(key){
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);  // 100 ms delay
}