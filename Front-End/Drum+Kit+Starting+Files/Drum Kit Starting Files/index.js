function playSound(keyWord){
    switch(keyWord){
        case 'w':
            sound = new Audio("sounds/tom-1.mp3"); 
            sound.play();
            break;  
        case 'a':
            sound = new Audio("sounds/tom-2.mp3"); 
            sound.play();
            break;
        case 's':
            sound = new Audio("sounds/tom-3.mp3"); 
            sound.play();
            break;  
        case 'd':
            sound = new Audio("sounds/tom-4.mp3"); 
            sound.play();
            break;
        case 'j':
            sound = new Audio("sounds/crash.mp3"); 
            sound.play();
            break;  
        case 'k':
            sound = new Audio("sounds/kick-bass.mp3"); 
            sound.play();
            break;  
        case 'l':
            sound = new Audio("sounds/snare.mp3"); 
            sound.play();
            break;  
    }
}
const buttons = $(".drum").each(function(){
    $(this).on("click", function (){
        var soundVariable = this.textContent;
        var sound;

        playSound(soundVariable);
        buttonAnimation(soundVariable)
    })
});

document.addEventListener("keydown", function(event){
    var keyWord = event.key;
    var sound;

    playSound(keyWord);
    buttonAnimation(keyWord)

})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150)
}