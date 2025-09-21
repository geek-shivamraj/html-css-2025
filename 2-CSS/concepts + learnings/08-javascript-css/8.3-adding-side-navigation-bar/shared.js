
// This will create a browser default overlay alert
//alert('This works!');

// Browser parses the HTML code & then create a virtual representation called Document Object Model (DOM)
// First of all, we need DOM access. We can essentially access the elements in the DOM via JS & then manipulate them.
// We can manipulate their attributes, execute certain actions like listen to events
// We can access their styles, CSS classes & content and even add or remove elements
// We can select element like CSS by tag, ID, attribute, class etc.

//var backdrop = document.querySelector('.backdrop');
//console.dir(backdrop);
//console.dir(backdrop.style); // This will give inline style element
// Since inline style overwrites all the style. We will simply manipulate a style with the help of "style" property.
// To change the appearance or look of the element.

//backdrop.style.display = 'block';

/**
 * Let' add event listener based on which backdrop & modal appears & disappears
 */
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
// To select all 3 buttons of plan class
var selectPlanButtons = document.querySelectorAll('.plan button');
// console.dir(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);

modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}