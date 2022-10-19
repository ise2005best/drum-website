// This program runs the function clickMe when the first button is clicked 
// or you can call a variable that finds the length of the query selctors with the class "drum"..
// var lengthOfClicks =  document.querySelector(".drum").length;
// therefore changing 7 to the name of the variable
for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;  // tells us the button that got pressed
        animation(buttonInnerHtml); // adds animation to our buttons
        sounds(buttonInnerHtml);
    } ); 

   
}

document.addEventListener("keydown", function(event)// this detects a keyboard press
{
    animation(event.key);// this adds annimation to our keyboard press and the keyword "key" to our case
    sounds(event.key);// this adds sounds to our keyboard press and the keyword "key" to our case
})
function sounds(ise) {
    switch (ise) {
        case "w":
            var wDrum = new Audio("sounds/crash.mp3"); // adds audio
            wDrum.play(); // plays audio
            break;
        case "a":
            var aDrum = new Audio("sounds/tom-1.mp3");
            aDrum.play(); 
            break;
        case "s":
            var sDrum = new Audio("sounds/kick-bass.mp3");
            sDrum.play();
            break;
        case "d":
            var dDrum = new Audio("sounds/tom-2.mp3");
            dDrum.play();
            break;
        case "j":
            var jDrum = new Audio("sounds/snare.mp3");
            jDrum.play();
            break;
        case "k":
            var kDrum = new Audio ("sounds/tom-3.mp3");
            kDrum.play();
            break;
        case "l":
            var lDrum = new Audio("sounds/tom-4.mp3");
            lDrum.play();
            break; 
        default:
            console.log(event.code);
    }
}
function animation(currentKey) {
   var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed"); // adds the class pressed to the button or key pressed

    setTimeout(() => {
      currentButton.classList.remove("pressed");
    }, 100);
}