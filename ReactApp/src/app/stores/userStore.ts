import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { LoginFormValues } from '../models/loginFormValues';
import { RegisterFormValues } from '../models/registerFormValues';
import { User } from '../models/user';
import { authStorage } from '../common/util/authStorage';

export default class UserStore {
    user: User | null = null;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    setUser = (user: User) => {
        this.user = user;
        authStorage.setToken(user.token);
    };

    clearUser = () => {
        this.user = null;
        authStorage.removeToken();
    };

    login = async (credentials: LoginFormValues) => {
        this.loading = true;
        try {
            const user = await agent.Account.login(credentials);
            runInAction(() => {
                this.setUser(user);
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    register = async (values: RegisterFormValues) => {
        this.loading = true;
        try {
            await agent.Account.register(values);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    getUser = async () => {
        this.loadingInitial = true;
        try {
            const user = await agent.Account.current();
            runInAction(() => {
                this.setUser(user);
            });
        } catch {
            runInAction(() => {
                this.clearUser();
            });
        } finally {
            runInAction(() => {
                this.loadingInitial = false;
            });
        }
    };

    logout = () => {
        this.clearUser();
    };
}