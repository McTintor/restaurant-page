const createContactPage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const adressInput = document.createElement('input');
    adressInput.type = 'text';
    adressInput.placeholder = 'Enter adress';
    form.appendChild(adressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter phone number';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    pageContent.appendChild(form);
    content.appendChild(pageContent);
};

export default createContactPage;