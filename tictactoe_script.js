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
        celldiv.classList.remove("x");
        celldiv.classList.remove("o");
        celldiv.classList.remove("emptyclass");
        celldiv.classList.add("cursormanager");
        
    }
    xisnext=true;
    gameislive=true;
    turndiv.innerHTML="x is next";
    turndiv.classList.add("turn");
}



function statusmanager(tlm)
{
    turndiv.innerHTML=`${tlm} is winner`;
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
        statusmanager(tl);
    }
    else if(ml && ml===mm && ml===mr)
    {
        statusmanager(ml);
    }
    else if(bl && bl===bm && bl===br)
    {
        statusmanager(bl);
    }
    else if(tl && tl===ml && tl===bl)
    {
        statusmanager(tl);
    }
    else if(tm && tm===mm && tm===bm)
    {
        statusmanager(tm);
    }
    else if(tr && tr===mr && tr===br)
    {
        statusmanager(tr);
    }
    else if(tl && tl===mm && tl===br)
    {
        statusmanager(tl);
    }
    else if(tr && tr===mm && tr===bl)
    {
        statusmanager(tr);
    }
    else if(tl && tm && tr && ml && mm && mr && bl && bm && br)
    {
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
            turndiv.innerHTML="ｏ is next";
            xisnext=false;
        }
        else
        {
            turndiv.classList.remove("turn");
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
                event.target.classList.add("x");
                event.target.classList.remove("cursormanager");
                
                gamestatus();
            }
            else
            {
                event.target.classList.add("emptyclass");
                event.target.classList.add("o");
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
