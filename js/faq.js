const faqs = document.querySelectorAll('.faq-item');

function toggleFaq() {

    faqs.forEach(faq => {
        faq.style.maxHeight = "5.8rem";
        const btn = faq.querySelector('button');
        const caret = btn.querySelector('ion-icon');
        if (caret) {
            caret.style.transform = 'rotate(0deg)';
        }
    });

    if (this.style.maxHeight == '5.8rem') {
        this.style.maxHeight = "1000px";
        const btn = this.querySelector('button');
        const caret = btn.querySelector('ion-icon');
        if (caret) {
            caret.style.transform = 'rotate(180deg)';
        }
    } else {
        this.style.maxHeight = '5.8rem';
        const btn = this.querySelector('button');
        const caret = btn.querySelector('ion-icon');
        if (caret) {
            caret.style.transform = 'rotate(0deg)';
        }
    }
}

faqs.forEach(faq => faq.addEventListener('click', toggleFaq));
