// gets all FAQ items
const FAQS = document.querySelectorAll('.faq-item');
// gets all FAQ buttons
const FAQBtns = document.querySelectorAll('.faq-btn');

// toggles the visibility of the FAQ item
function toggleFAQ() {

    // iterates over all FAQ items and hide the ones that are not the parent element of the button that was clicked
    FAQS.forEach(el => {
        if (el !== this.parentElement) {
            el.classList.remove('expand');
        }
    })

    // toggles the visibility of the parent element of the button that was clicked
    this.parentElement.classList.toggle('expand');

}

// adds a click event listener to each FAQ button
// toggles the visibility of the corresponding FAQ item
FAQBtns.forEach(FAQBtn => FAQBtn.addEventListener('click', toggleFAQ));
