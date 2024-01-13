let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
   const drawgame=()=>{
    console.log("game is drew.");
    msg.innerText="Game was draw. play again!";
    msg.style.backgroundColor="#081b31";
   } ;
   const wingame=(usewin,userchoice,compChoice)=>{

    if(usewin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.style.backgroundColor="green";
        msg.innerText=`You win! your${userChoice} beats ${compchoice}`;
        
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost! your${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
   };
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
   
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);
    if (userChoice===compChoice){
        drawgame();
    }
    else{
        let usewin= true;
        if(userChoice==="rock"){
             usewin =compChoice==="paper"?false:true;
             
            }
            else if ( userChoice=="paper"){
                usewin =compChoice==="scissors"?false:true;
            }
            else{
                
                    usewin =compChoice==="rock"?false:true;
                }
                wingame(usewin);
            }


        }

    


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
