

//selectbynth-child 300th dot and removeinterval
//renderDotEl.ondblclick

//configuring the dots
function addDot () {
    let dots = []
    for(let i=0; i<20; i++) {
        //set random position
        const rnt = Math.random()*100
        const rnl = Math.random()*100
        const tx =  Math.random()*100
        const ty = Math.random()*100
        const rnopacity = Math.random()
        
        //make and style the dot
        let dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.position = 'fixed'
        dot.style.top = `${rnt}%`
        dot.style.left = `${rnl}%`
        dot.style.transform = `translate(${tx}%, ${ty}%)`
        dot.style.transitionProperty = 'transform'
        dot.style.transitionDuration = '30s'
        dot.style.transitionTimingFunction = 'linear'
        dot.style.opacity = `${rnopacity}`
        console.log(dot.style)
        document.body.appendChild(dot)
        dots.push(dot)
        
    }
    //animate by loading it a bit later
        setTimeout(() => {
            for(const dot of dots) {
                const tx2 =  (Math.random()*90)-(Math.random()*90)
                const ty2 =Math.random()*90-(Math.random()*90)
                dot.style.transform = `translate(${tx2}rem, ${ty2}rem)`
            }
        },1)

        //keep it moving-example of infinite loop
        setInterval(() => {
            for(const dot of dots) {
                const tx2 =  (Math.random()*90)-(Math.random()*90)
                const ty2 =Math.random()*90-(Math.random()*90)
                dot.style.transform = `translate(${tx2}rem, ${ty2}rem)`
            }
            console.log("new interval")
        },5000)  //a=5s
}

        //generate more random action by spacing the rendering
        let  callDot =  setInterval(() => {
            addDot ()                   
        },1000)
        

        function stopDots() {
            clearInterval(callDot)
        }
         
        //define number of stars in your sky ill define 100 stars below 
        setTimeout(() => {
            stopDots()
        }, 25000 ); //NO of stars: 20 x b/a where a=5s and b=25s || 
//animating button transition


//setTimeout


//
