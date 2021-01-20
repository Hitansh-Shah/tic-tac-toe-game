const resetdiv=document.getElementById("reset");
const turndiv=document.getElementById("turn");
const grid=document.querySelectorAll(".grid");
var gameislive=true;
var xisnext=true;

for(const celldiv of grid){
    celldiv.classList.add("cursormanager");
}


function resetgame(event)
{
    for(const celldiv of grid){
        celldiv.classList.remove("x","xcolor");
        celldiv.classList.remove("o","ocolor");
        celldiv.classList.remove("emptyclass");
        celldiv.classList.remove("winningmanager");
        celldiv.classList.add("cursormanager");
        
    }
    xisnext=true;
    gameislive=true;
    turndiv.innerHTML="x is next";
    turndiv.classList.add("turn");
}



function statusmanager(tlm)
{
    if(tlm==="x")
    {
        turndiv.innerHTML="\"x\" is winner";

    }
    else{
        turndiv.innerHTML="\"ｏ\" is winner";
    }
    gameislive=false;
    for(const celldiv of grid)
    {
        celldiv.classList.remove("cursormanager");
    }
}

function gamestatus()
{
    const tl=grid[0].classList[3];
    const tm=grid[1].classList[3];
    const tr=grid[2].classList[3];
    const ml=grid[3].classList[3];
    const mm=grid[4].classList[3];
    const mr=grid[5].classList[3];
    const bl=grid[6].classList[3];
    const bm=grid[7].classList[3];
    const br=grid[8].classList[3];

    if(tl && tl===tm && tl===tr)
    {
        grid[0].classList.add("winningmanager");
        grid[1].classList.add("winningmanager");
        grid[2].classList.add("winningmanager");

        statusmanager(tl);
    }
    else if(ml && ml===mm && ml===mr)
    {
        
        grid[3].classList.add("winningmanager");
        grid[4].classList.add("winningmanager");
        grid[5].classList.add("winningmanager");
        statusmanager(ml);
    }
    else if(bl && bl===bm && bl===br)
    {
        
        grid[6].classList.add("winningmanager");
        grid[7].classList.add("winningmanager");
        grid[8].classList.add("winningmanager");
        statusmanager(bl);
    }
    else if(tl && tl===ml && tl===bl)
    {
        
        grid[0].classList.add("winningmanager");
        grid[3].classList.add("winningmanager");
        grid[6].classList.add("winningmanager");
        statusmanager(tl);
    }
    else if(tm && tm===mm && tm===bm)
    {
        
        grid[1].classList.add("winningmanager");
        grid[4].classList.add("winningmanager");
        grid[7].classList.add("winningmanager");
        statusmanager(tm);
    }
    else if(tr && tr===mr && tr===br)
    {
        
        grid[2].classList.add("winningmanager");
        grid[5].classList.add("winningmanager");
        grid[8].classList.add("winningmanager");
        statusmanager(tr);
    }
    else if(tl && tl===mm && tl===br)
    {
        
        grid[0].classList.add("winningmanager");
        grid[4].classList.add("winningmanager");
        grid[8].classList.add("winningmanager");
        statusmanager(tl);
    }
    else if(tr && tr===mm && tr===bl)
    {
        
        grid[2].classList.add("winningmanager");
        grid[4].classList.add("winningmanager");
        grid[6].classList.add("winningmanager");
        statusmanager(tr);
    }
    else if(tl && tm && tr && ml && mm && mr && bl && bm && br)
    {
        turndiv.classList.remove("turn");
        turndiv.innerHTML="Game is Tied!!";
        gameislive=false;
        for(const celldiv of grid)
        {
            celldiv.classList.remove("cursormanager");
        }
    }
    else{
        if(xisnext)
        {
            turndiv.innerHTML="o is next";
            xisnext=false;
        }
        else
        {
            turndiv.innerHTML="x is next";
            xisnext=true;
        }
    }

}


function cellclick(event)
{
    if(gameislive)
    {
        if(event.target.classList[3]!=="x"&&event.target.classList[3]!=="o")
        {
            if(xisnext)
            {
                event.target.classList.add("emptyclass");
                event.target.classList.add("x","xcolor");
                event.target.classList.remove("cursormanager");
                
                gamestatus();
            }
            else
            {
                event.target.classList.add("emptyclass");
                event.target.classList.add("o","ocolor");
                event.target.classList.remove("cursormanager");
                
                gamestatus();
            }
        }
    }
    
    return;
}

for(const celldiv of grid)
{
    celldiv.addEventListener("click",cellclick);
}

resetdiv.addEventListener("click",resetgame);
