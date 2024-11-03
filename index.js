function submitForm(e) {
    e.preventDefault();
    const successMessage = document.getElementsByClassName('successMessage')[0];
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}