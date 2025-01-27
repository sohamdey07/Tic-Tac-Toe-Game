/*
winning patterns
0,1,2
3,4,5
6,7,8
0,3,6
1,4,7
2,5,8
0,4,8
2,4,6

*/
let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset-btn")
let newGame=document.querySelector("#newGamebtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#winMsg")

let turnO=true //playerX,playerY
let count=0
const winPattern=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO){
            box.innerText=("O")
            turnO=false
        }
        else
        {
            box.innerText=("X")
            turnO=true
        }
        box.disabled=true
        count++
        console.log(`count=${count}`)
        checkWinner()
    })
})

const showWinner=(winner)=>
{
    msg.innerText=(`Congratulations, Winner is ${winner}`)
    msg.style.color="#0e7d19"
    msgcontainer.classList.remove("hide")
    resetbtn.classList.add("hide")
}
const showDraw=()=>
{
    msg.innerText=(`Game Was Draw! Try again.`)
    msg.style.color="red"
    msgcontainer.classList.remove("hide")
    resetbtn.classList.add("hide")
}

const checkWinner=()=>
{
    for(let pattern of winPattern)
    {
        let ptn1=boxes[pattern[0]].innerText
        let ptn2=boxes[pattern[1]].innerText
        let ptn3=boxes[pattern[2]].innerText

        if(ptn1!=="" && ptn2!=="" && ptn3!=="")
            {
                if(ptn1===ptn2 && ptn2===ptn3)
                {
                    console.log("Winner ",ptn1)
                    showWinner(ptn1)
                }
                else{
                    if(count===9)
                    {
                        showDraw()
                    }
                }
            }
    }
}
const blankBox=()=>
{
    boxes.forEach((box)=>
        {
            box.innerText=("")
            box.disabled=false
        })   
}
newGame.addEventListener("click",()=>{
    msgcontainer.classList.add("hide")
    blankBox()
    resetbtn.classList.remove("hide")
})

resetbtn.addEventListener("click",()=>
{
   blankBox()
}
)
