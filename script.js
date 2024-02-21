let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector(".msg");
let container = document.querySelector(".msg-container");

let turnO=true;
let count=0;
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   
];

const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    container.classList.add("hide");

};
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="#C2E0C3";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#DCDDE0";

            turnO=true;
        }
        box.disabled=true;
        count++;
        let winnerr=checkWinner();
        if(count==9 && !winnerr){
            gameDraw();
        }
    });

});

const gameDraw=()=>{
    msg.innerText="Game was a draw!";
    container.classList.remove("hide");
    disabledBoxes();


}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    container.classList.remove("hide");
    disabledBoxes();


};
const checkWinner =()=>{
    for(let pattern of win){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val ){
                disabledBoxes();
                
                showWinner(pos1val);
            }
        }
}
};
reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);