const BASE_URL = 'https://todo-list-1-backend.herokuapp.com';


export async function signUpUser(userInfo) {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    });

    const data = await res.json();
    if (res.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    } 
}

export async function signIn({ email, password }) {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
    });
    const data = await res.json();
    if (res.ok) {
        location.replace('./tasks');
    } else {
        console.error(data.message);
    }
}

export async function getUser() {
    const res = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
         
    });
    if (res.ok) {
        const user = await res.json();
        return user;
    }
}

export async function getTasks() {
    const res = await fetch(`${BASE_URL}/api/v1/tasks`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    if (res.ok) {
        const tasks = await res.json();
        return tasks;
    }
}

export async function redirectIfLoggedIn() {
    const user = await getUser();
    if (user) {
        location.replace('./tasks');
    }
}

export async function checkUser() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function logout() {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include'
    });
    if (res.ok) {
        location.replace('../');
    }
}

export async function addTask(task) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task),
        credentials: 'include'
    }
    );
    const data = await res.json();
    return data;
}

export async function deleteTask(id) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    const data = await res.json();
    return data;
}

export async function updateTask(id) {
    const res = await fetch(`${BASE_URL}/api/v1/tasks/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ completed: true }),
    });
    const data = await res.json();
    if (res.ok) {
        return data;
    } else {
        throw new Error(data.message);
    }
    
}