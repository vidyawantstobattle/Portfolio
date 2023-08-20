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
      } else {
        item.classList.remove('in-view')
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
const headerLinks = document.querySelectorAll('.header-link')

function responsiveNav() {
  header.classList.toggle('responsive')
}

function redirectFromNav() {
  header.classList.remove('responsive')
}

menuIcon.addEventListener('click', responsiveNav)
headerLinks.forEach(link => {
  link.addEventListener('click', redirectFromNav)
})

//hero button
const heroButton = document.querySelector('.hero-content-button')
heroButton.addEventListener('mousemove', e => {
  const rect = heroButton.getBoundingClientRect();
  const x = (e.clientX - rect.left) * 100 / heroButton.clientWidth
  const y = (e.clientY - rect.top) * 100 / heroButton.clientHeight
  heroButton.style.setProperty('--mouse-x', x);
  heroButton.style.setProperty('--mouse-y', y);
})
