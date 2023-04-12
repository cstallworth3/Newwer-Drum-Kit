var NumberofDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<NumberofDrumButtons; i++)

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
        
    {}
    document.addEventListener('keypress',function(event){
        makeSound(event.key)
    });
    
    function makeSound (key){
        switch (key) {
            case "w":
                var Siren = new Audio('sound/eightoeightsiren.wav');
                Siren.play();
                break;
    
                case "a":
                    var Kick = new Audio("sound/southsidekick.wav");
                    Kick.play();
                    break;
                    
                    case 's':
                        var Snare = new Audio ("sound/ghostsnare.wav");
                        Snare.play();
                        break;
    
                        case 'd':
                    var Clap = new Audio("sound/appleclap.wav");
                    Clap.play();
                    break;
    
                    case 'j':
                    var HiHat = new Audio("sound/budhihat.wav");
                    HiHat.play();
                    break;
    
                    case 'k':
                    var Southside808 = new Audio("sound/twoone.wav");
                    Southside808.play();
                    break; 
    
                    case 'l':
                    var Cymbol = new Audio("sound/carcymbol.wav");
                    Cymbol.play();
                    break;
    }}