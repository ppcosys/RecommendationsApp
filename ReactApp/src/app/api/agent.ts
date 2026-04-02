import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { router } from '../router/Routes';
import { API_URL } from '../config/appConfig';
import { Recommendation } from '../models/recommendation';
import { LoginFormValues } from '../models/loginFormValues';
import { RegisterFormValues } from '../models/registerFormValues';
import { User } from '../models/user';
import { authStorage } from '../common/util/authStorage';

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use((config) => {
    const token = authStorage.getToken();

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const status = error.response?.status;

        switch (status) {
            case 400:
                toast.error('Bad request');
                break;
            case 401:
                authStorage.removeToken();
                toast.error('Unauthorized');
                break;
            case 403:
                toast.error('Forbidden');
                break;
            case 404:
                router.navigate('/not-found');
                break;
            case 500:
                toast.error('Server error');
                break;
        }

        return Promise.reject(error);
    }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: object) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: object) => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Recommendations = {
    list: () => requests.get<Recommendation[]>('/recommendations'),
    discover: () => requests.get<Recommendation[]>('/recommendations/discover'),
    details: (id: string) => requests.get<Recommendation>(`/recommendations/${id}`),
    create: (recommendation: Recommendation) => requests.post<void>('/recommendations', recommendation),
    update: (recommendation: Recommendation) =>
        requests.put<void>(`/recommendations/${recommendation.id}`, recommendation),
    delete: (id: string) => requests.delete<void>(`/recommendations/${id}`),
};

const Account = {
    current: () => requests.get<User>('/account'),
    login: (credentials: LoginFormValues) =>
        requests.post<User>('/account/login', credentials),
    register: (values: RegisterFormValues) =>
        requests.post<void>('/account/register', {
            displayName: values.displayName,
            email: values.email,
            password: values.password,
        }),
};

const agent = {
    Recommendations,
    Account,
};

export default agent;