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

