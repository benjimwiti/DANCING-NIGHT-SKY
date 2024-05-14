//configuring the dots
const bodyEl = document.querySelector('body')
bodyEl.style.backgroundColor= `black`
bodyEl.innerHTML += `
    <style>
    @keyframes dotshow {
    0% {opacity: 0; border-radius:50%;}
    33% {opacity: 1; border-radius:50%;}
    66% {opacity: 0; border-radius:50%;}
    100% {opacity: 1; border-radius:50%;}
    }
    </style>
    `
function addDot () {
    let dots = []
    for(let i=0; i<10; i++) {
        //set random base position
        const rnt = Math.random()*100
        const rnl = Math.random()*100
        const tx =  Math.random()*100
        const ty = Math.random()*100
        const rnopacity = Math.random()
        
        //make and style the dot
        let dot = document.createElement("div")
        dot.style.position = 'fixed'
        dot.style.top = `${rnt}%`
        dot.style.left = `${rnl}%`
        dot.style.transform = `translate(${tx}%, ${ty}%)`
        dot.style.transitionProperty = 'transform'
        dot.style.transitionDuration = '30s'
        dot.style.transitionTimingFunction = 'linear'
        dot.style.opacity = `${rnopacity}`
        dot.style.height = `2px`
        dot.style.width = `2px`
        dot.style.animationName = `dotshow`
        dot.style.animationDuration = `5s`
        dot.style.animationTimingFunction = `linear`
        dot.style.animationIterationCount = `infinite`
        dot.style.animationDirection =`alternate`
        dot.style.backgroundColor = `white`
        dot.style.borderRadius = `30%`
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

        //keep it moving--infinite loop--changing position infinitely
        setInterval(() => {
            for(const dot of dots) {
                const tx2 =  (Math.random()*90)-(Math.random()*90)
                const ty2 =Math.random()*90-(Math.random()*90)
                dot.style.transform = `translate(${tx2}rem, ${ty2}rem)`
            }
            console.log("new interval")
        },5000)  //a=5s
}
        //call a dot-set-of-10 after 1s 
        //generates more random action by spacing the rendering
        let  callDot =  setInterval(() => {
            addDot ()                   
        },1000)
        

        function stopDots() {
            clearInterval(callDot)
        }
         
        //define number of stars in your sky per the media query /screen size define 100 stars below 
        setTimeout(() => {
            stopDots()
        }, 50000 ); //NO of stars: 10 x b/a where a=5s and b=50s | in this case (10 x 50/5 = 100)| 
