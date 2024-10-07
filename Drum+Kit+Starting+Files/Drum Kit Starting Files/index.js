let buttons = document.querySelectorAll("button");
let audio;

for (const button of buttons) {
  button.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;

      case "a":
        audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;

      case "s":
        audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;

      case "d":
        audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

      case "j":
        audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

      case "k":
        audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;

      case "l":
        audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;

      default:
        break;
    }
  });
}



//BETTER VERSION -- called event delegation with condition checking.
// for (const button of buttons) {
//     button.addEventListener("click", function () {
//       let buttonInnerHTML = this.innerHTML;
      
//       if (["w", "a", "s", "d", "j", "k", "l"].includes(buttonInnerHTML)) {
//         audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//       }
//     });
//   }
