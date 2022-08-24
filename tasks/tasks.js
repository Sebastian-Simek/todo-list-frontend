import { checkUser, logout, } from '../fetch-utils.js';
const logoutBtn = document.getElementById('logout');

checkUser();

logoutBtn.addEventListener('click', async () => {
    await logout();
});

