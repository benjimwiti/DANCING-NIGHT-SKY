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
    dotshowb   ()
})

//const dotEl = document.getElementById("dot-el")
function dotshowb () {
    let dots = []
    for(let i=0; i<300; i++) {
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
        dot.style.transitionDuration = '40s'
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
        },10)
}
//set to run infinitely and maintain speed
for (let i=1; i>1; i++) {
    dotshows()
}

function dotshow() {
    const dots = [];
    for (let i = 0; i < 300; i++) {
      // Set random position
      const rnPositionT = Math.floor(Math.random() * 1000) + 20;
      const rnPositionL = Math.floor(Math.random() * 1000) + 20;
      const translateX = Math.floor(Math.random() * 1000) - Math.floor(Math.random() * 1000);
      const translateY = Math.floor(Math.random() * 1000) + 20;
  
      // Create a new dot element
      const dotEl = document.createElement('div');
      dotEl.className = 'dot';
      dotEl.style.position = 'absolute';
      dotEl.style.top = `${rnPositionT}px`;
      dotEl.style.left = `${rnPositionL}px`;
      dotEl.style.transform = `translateX(${translateX}px) translate(${translateY}px)`;
      dotEl.style.transition = 'transform 10s linear';
  
      // Add the dot element to the DOM and store it in the dots array
      document.body.appendChild(dotEl);
      dots.push(dotEl);
  
      // Animate the dots using JavaScript
      setTimeout(() => {
        for (const dot of dots) {
          const randTranslateX = Math.floor(Math.random() * 1000) - Math.floor(Math.random() * 1000);
          const randTranslateY = Math.floor(Math.random() * 1000) + 20;
          dot.style.transform = `translateX(${randTranslateX}px) translate(${randTranslateY}px)`;
        }
      }, 3000);
    }
  }

const spacebox = document.getElementById('test')
