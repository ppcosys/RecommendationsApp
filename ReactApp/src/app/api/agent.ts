import axios, { AxiosError, AxiosResponse } from 'axios';
import { Recommendation } from '../models/recommendation';
import { toast } from 'react-toastify';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';


axios.interceptors.response.use(
    async (response) => {
        await sleep(1000);
        return response;
    }, (error: AxiosError) => {
        const {data, status} = error.response!;
        switch (status) {
            case 400:
                toast.error('bad request')
                break;
            case 401:
                toast.error('unauthorised')
                break;
            case 403:
                toast.error('forbidden')
                break;
            case 404:
                toast.error('not found')
                break;
            case 500:
                toast.error('server error')
                break;
        }

        return Promise.reject(error);
    }    
);

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Recommendations = {
    list: () => requests.get<Recommendation[]>('/recommendations'),
    details: (id: string) => requests.get<Recommendation>(`/recommendations/${id}`),
    create: (recommendation: Recommendation) => requests.post<void>('/recommendations', recommendation),
    update: (recommendation: Recommendation) => requests.put<void>(`/recommendations/${recommendation.id}`, recommendation),
    delete: (id: string) => requests.del<void>(`/recommendations/${id}`)
}

const agent = {
    Recommendations
}

export default agent;