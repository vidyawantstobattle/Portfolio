// Get all FAQ accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-btn');

// Add click event listener to each accordion button
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class on the clicked accordion button
    button.classList.toggle('active');

    // Toggle display of the accordion content
    const content = button.nextElementSibling;
    content.classList.toggle('show')
  });
});

// Make timeline component interactive 


  // define variables
  const items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    items.forEach(item => {
      if(isElementInViewport(item)) {
        item.classList.add('in-view')
      }
    })
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

// toggle header link
const menuIcon = document.querySelector('.menu-icon')
const header = document.querySelector('header')

function responsiveNav() {
  header.classList.toggle('responsive')
}

menuIcon.addEventListener("click", responsiveNav)



// Bubbles for projects
const SCROLL_SPEED = 1;
const CANVAS_WIDTH = 2800;

const bubblesEl = document.querySelector('.bubbles');
const bubbleSpecs = [
  { s: .8, x: 1204, y: 15  }, 
  { s: .8, x: 1480, y: 91  }, 
  { s: .8, x: 2499, y: 9   },
  { s: .8, x: 2750, y: 380 },
  { s: .8, x: 525,  y: 346 },
  { s: .8, x: 10,   y: 178 },
  { s: .8, x: 2545, y: 337 },
  { s: .9, x: 907,  y: 88  },
  { s: .9, x: 333,  y: 50  },
  { s: .9, x: 1540, y: 362 },
  { s: .9, x: 1949, y: 303 },
  { s: .9, x: 2276, y: 82  },
  { s: .9, x: 2783, y: 60  },
  {        x: 1730, y: 150 },
  {        x: 901,  y: 373 },
  {        x: 1270, y: 307 },
  {        x: 2243, y: 364 },
  {        x: 624,  y: 111 },
  {        x: 213,  y: 367 },
  {        x: 1990, y: 5   }
];

class Bubbles {
  constructor(specs) {
    this.bubbles = [];

    specs.forEach((spec, index) => {
      this.bubbles.push(new Bubble(index, spec));
    })
    
    requestAnimationFrame(this.update.bind(this));
  }
  
  update() {
    this.bubbles.forEach(bubble => bubble.update());
    this.raf = requestAnimationFrame(this.update.bind(this))
  }  
}


class Bubble {
  constructor(index, {x, y, s = 1}) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.scale = s;

    this.el = document.createElement("div");
    this.el.className = `bubble logo0${this.index + 1}`;
    bubblesEl.appendChild(this.el);
  }
  
  update() {
    this.x = (this.x <  -200) ? CANVAS_WIDTH : this.x - SCROLL_SPEED; 
    this.el.style.transform = `translate(${this.x}px, ${this.y}px) scale(${this.scale})`;
  }
}

const bubbles = new Bubbles(bubbleSpecs);