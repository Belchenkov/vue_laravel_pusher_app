import AppStorage from './AppStorage';

class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then(res => {
                this.responseAfterLogin(res)
            })
            .catch()
    }

    responseAfterLogin (res) {
        const accessTokken = res.data.access_token;
        const userName = res.data.user;
        const userId = res.data.id;

        if (accessTokken) {
            AppStorage.store(userName, accessTokken, userId);
            window.location = '/forum';
        }
    }

    hasToken () {
        return AppStorage.getToken() ? true : false;
    }

    loggedIn () {
        return this.hasToken();
    }

    logout () {
        AppStorage.clear();
        window.location = '/login';
    }

    name () {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id () {
        if (this.loggedIn()) {
            return AppStorage.getUserId();
        }
    }

    own (id) {
        return this.id() == id;
    }

    admin () {
        return this.id() == 13;
    }
}

export default User = new User();