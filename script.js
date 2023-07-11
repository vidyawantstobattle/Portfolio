// Get all FAQ accordion buttons
const accordionButtons = document.querySelectorAll('.accordion-btn');

// Add click event listener to each accordion button
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle active class on the clicked accordion button
    button.classList.toggle('active');

    // Toggle display of the accordion content
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
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
      rect.bottom*(0.75) <=
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

function responsiveNav() {
  header.classList.toggle('responsive')
}

menuIcon.addEventListener("click", responsiveNav)
