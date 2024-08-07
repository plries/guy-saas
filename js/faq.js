const faqs = document.querySelectorAll('.faq-item');

function toggleFaq() {
    
    
    faqs.forEach(el => {
        if (el !== this) {
            el.classList.remove('expand');
        }
    })

    this.classList.toggle('expand');

}

faqs.forEach(faq => faq.addEventListener('click', toggleFaq));
