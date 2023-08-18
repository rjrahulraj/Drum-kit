// document.querySelector("button").addEventListener("click",handleclick);

// function handleclick()
// {https://replit.com/~
//         alert("I got clicked");
// }

var no_of_drum=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_drum; i++)
{
        document.querySelectorAll("button")[i].addEventListener("click",function ()
        {
                var buttonInnerText=this.innerText;
                switch(buttonInnerText)
                {
                        case "w": 
                                var crash= new Audio("sounds/crash.mp3");
                                crash.play();
                                break;

                       case "a" :
                                var kick_bass= new Audio("sounds/kick-bass.mp3");
                                kick_bass.play();
                                break;
                        
                        case "s" :
                                var snare= new Audio("sounds/snare.mp3");
                                snare.play();
                                break;

                        case "d" :
                                var tom_1= new Audio("sounds/tom-1.mp3");
                                tom_1.play();
                                break;
                        
                        case "j" :
                                var tom_2=new Audio("sounds/tom-2.mp3");
                                tom_2.play();
                                break;
                        
                        case "k" :
                                var tom_3= new Audio("sounds/tom-3.mp3");
                                tom_3.play();
                                break;

                        case "l" :
                                var tom_4= new Audio("sounds/tom-4.mp3");
                                tom_4.play();
                                break;

                }
        }
        );
}


document.addEventListener("keypress", function(e){
                // console.log(e.key);
                makeSound(e.key);
})


function makeSound(key){
        switch(key)
                {
                        case "w": 
                                var crash= new Audio("sounds/crash.mp3");
                                crash.play();
                                break;

                       case "a" :
                                var kick_bass= new Audio("sounds/kick-bass.mp3");
                                kick_bass.play();
                                break;
                        
                        case "s" :
                                var snare= new Audio("sounds/snare.mp3");
                                snare.play();
                                break;

                        case "d" :
                                var tom_1= new Audio("sounds/tom-1.mp3");
                                tom_1.play();
                                break;
                        
                        case "j" :
                                var tom_2=new Audio("sounds/tom-2.mp3");
                                tom_2.play();
                                break;
                        
                        case "k" :
                                var tom_3= new Audio("sounds/tom-3.mp3");
                                tom_3.play();
                                break;

                        case "l" :
                                var tom_4= new Audio("sounds/tom-4.mp3");
                                tom_4.play();
                                break;

                }
}
//    var audio=new Audio("sounds/tom-1.mp3");
//    audio.play();