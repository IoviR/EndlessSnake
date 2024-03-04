const canvas=document.getElementById("canvaSnake")
ctx=canvas.getContext("2d")
const score=document.getElementById("punctaj")
const hscore=document.getElementById("hscore")

const img=new Image()
img.src="gameover.png"

addEventListener("keydown",moving)
scor=dy=0
dx=1
px=py=10
tc=gs=20
ax=ay=13
coada=[]
lCoada=5
highs=0
setInterval(snake,1000/10)

function snake()
{
    px+=dx
    py+=dy
    if(px<0) px=tc-1
    if(px>tc-1) px=0
    if(py>tc-1) py=0
    if(py<0) py=tc-1

    ctx.fillStyle="black"
    ctx.fillRect(0,0,canvas.width,canvas.height)

    

    if(ax==px && ay==py)
    {
        lCoada++
        scor++
        ax=Math.floor(Math.random()*gs)
        ay=Math.floor(Math.random()*gs)
    }

    
    score.innerHTML=String(scor)

    ctx.fillStyle="lime"
    for(let i=0;i<coada.length;i++)
    {
        ctx.fillRect(coada[i].x*gs,coada[i].y*gs,gs-2,gs-2)
        if(coada[i].x==px && coada[i].y==py)
        {
            highScore(scor)
            scor=0
            lCoada=5
        }
    }

    coada.push({x:px,y:py})

    while(coada.length>lCoada)
    {
        coada.shift()
    }
    
    ctx.fillStyle="red"
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2) 
    

}

function moving(d)
{
    if(d.code=="ArrowLeft" && dx!=1)
    {
        dx=-1
        dy=0
    }
    if(d.code=="ArrowRight" && dx!=-1)
    {
        dx=1
        dy=0
    }
    if(d.code=="ArrowUp" && dy!=1)
    {
        dx=0
        dy=-1
    }
    if(d.code=="ArrowDown" && dy!=-1)
    {
        dx=0
        dy=1
    }
}

function highScore(s)
{
    if(highs<s)
    {
        highs=s
        hscore.innerHTML=String(highs)
    }
    else hscore.innerHTML=String(highs)
}