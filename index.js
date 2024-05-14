const nine = document.getElementById("nine") 
const eight = document.getElementById("eight")
const animateFlexBtn = document.getElementById("animateFlexBtn")
let clickCount = 0

let flexItems = (document.querySelectorAll('.cell'))
console.log(flexItems)

//counting from 1
/* for (const cell of flexItems) {
    cell.classList.add('o1')
    cell.addEventListener('animationend', function() {
        cell.classList.remove('o1')
    })
} */

//counting from 9
function animateFlex () {
    nine.classList.add("o1")
    nine.addEventListener("animationend", function() {
        nine.classList.remove("o1")
        eight.classList.add("o1")
    })
}

animateFlexBtn.addEventListener("click", function(){
    animateFlex()
    console.log("click")
})

//const dotEl = document.getElementById("dot-el")
function addDot () {
    let dots = []
    for(let i=0; i<20; i++) {
        //set random position
        const rnt = Math.random()*100
        const rnl = Math.random()*100
        const tx =  Math.random()*100
        const ty = Math.random()*100
        const rno = Math.random()
        
        //make and style the dot
        let dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.position = 'absolute'
        dot.style.top = `${rnt}%`
        dot.style.left = `${rnl}%`
        dot.style.transform = `translate(${tx}%, ${ty}%)`
        dot.style.transitionProperty = 'transform'
        dot.style.transitionDuration = '30s'
        dot.style.transitionTimingFunction = 'linear'
        dot.style.opacity = `${rno}`
        console.log(dot.style)
        document.body.appendChild(dot)
        dots.push(dot)
        
        //animate by loading it a bit later
    }
        setTimeout(() => {
            for(const dot of dots) {
                const tx2 =  (Math.random()*90)-(Math.random()*90)
                const ty2 =Math.random()*90-(Math.random()*90)
                dot.style.transform = `translate(${tx2}rem, ${ty2}rem)`
            }
        },1)

        //keep it moving
        setInterval(() => {
            for(const dot of dots) {
                const tx2 =  (Math.random()*90)-(Math.random()*90)
                const ty2 =Math.random()*90-(Math.random()*90)
                dot.style.transform = `translate(${tx2}rem, ${ty2}rem)`
            }
            console.log("new interval")
        },5000)
}

        //generate more random action
        function renderDots () {
            setInterval(() => {
                addDot ()                   
        },5000)
        }
                


const spacebox = document.getElementById('test')
renderDots()