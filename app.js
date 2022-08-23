import { signUpUser } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = await new FormData(signUpForm);
    await signUpUser({
        username: formData.get('user-name'),
        email: formData.get('email'),
        password: formData.get('password')
    });
});