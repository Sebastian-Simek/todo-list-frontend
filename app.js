import { signUpUser, signIn, redirectIfLoggedIn } from './fetch-utils.js';

const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = await new FormData(signUpForm);
    await signUpUser({
        username: formData.get('user-name'),
        email: formData.get('email'),
        password: formData.get('password')
    });
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = await new FormData(signInForm);
    await signIn({
        email: formData.get('email'),
        password: formData.get('password')
    });
});

redirectIfLoggedIn();