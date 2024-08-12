const faqs = document.querySelectorAll('.faq-item');
const faqBtns = document.querySelectorAll('.faq-btn');

function toggleFaq() {

    faqs.forEach(el => {
        if (el !== this.parentElement) {
            el.classList.remove('expand');
        }
    })

    this.parentElement.classList.toggle('expand');

}

faqBtns.forEach(faqBtn => faqBtn.addEventListener('click', toggleFaq));
