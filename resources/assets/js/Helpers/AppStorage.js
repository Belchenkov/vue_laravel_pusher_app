class AppStorage {
    storeToken (token) {
        localStorage.setItem('token', token);
    }

    storeUser(user) {
        localStorage.setItem('user', user);
    }

    storeUserId(id) {
        localStorage.setItem('user_id', id);
    }

    store(user, token, id) {
        this.storeToken(token);
        this.storeUser(user);
        this.storeUserId(id);
    }

    clear () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('user_id');
    }

    getToken () {
        return localStorage.getItem('token');
    }

    getUser () {
        return localStorage.getItem('user');
    }

    getUserId () {
        return localStorage.getItem('user_id');
    }
}

export default AppStorage = new AppStorage();