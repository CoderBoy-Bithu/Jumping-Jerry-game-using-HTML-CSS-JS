Score = 0;
cross= true;
document.onkeydown = function(e){
    // console.log(e.code)
    if(e.code=='ArrowUp' | e.code == 'Space'){
        Jeery = document.querySelector('.Jerry')
        Jeery.classList.add('animation');
        setTimeout(() => {
            Jeery.classList.remove('animation')
        },700)
    }
    
    else if(e.code=='ArrowRight'){
        Jeery = document.querySelector('.Jerry')
        JeeryX = parseInt(window.getComputedStyle(Jeery,null).getPropertyValue('left'));
        Jeery.style.left = JeeryX + 122 + "px";
    }
    
    else if(e.code=='ArrowLeft'){
        Jeery = document.querySelector('.Jerry')
        JeeryX = parseInt(window.getComputedStyle(Jeery,null).getPropertyValue('left'));
        Jeery.style.left = (JeeryX - 122) + "px";
    }
}

 setInterval(()=> {
    Jeery = document.querySelector('.Jerry');
    gameOver = document.querySelector('.gameover');
    Tom = document.querySelector('.Tom');
    jx = parseInt(window.getComputedStyle(Jeery,null).getPropertyValue('left'));
    jy = parseInt(window.getComputedStyle(Jeery,null).getPropertyValue('top'));
    
    Tx = parseInt(window.getComputedStyle(Tom,null).getPropertyValue('left'));
    Ty = parseInt(window.getComputedStyle(Tom,null).getPropertyValue('top'));

    offsetx = Math.abs(jx-Tx);
    offsety = Math.abs(jy-Ty);

    // console.log(offsetx,offsety);
    if(offsetx<98 && offsety ==92){
        gameOver.style.visibility = 'visible';
        Tom.classList.remove('animation2');
    }

    else if(offsetx < 145 && cross){
        Score +=1;
        updateScore(Score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        // setTimeout(() => {
        //     aniDer = parseFloat(window.getComputedStyle(Tom,null).getPropertyValue('animation-duration'));
        //     aniDer = anider - 0.1;
        // Tom.style.a
        // }, 500);
        // nimationDuration = newDer + 's';
    }
 },100)

 function updateScore(scores){
    score.innerHTML = "Score: " + scores;
 }