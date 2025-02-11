import axios, { AxiosResponse } from 'axios';
import { Recommendation } from '../models/recommendation';

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
    },
    async (error) => {
        await sleep(1000);
        console.error("Axios Error:", error); 

        if (!error.response) {
            return Promise.reject(new Error("No response from the server."));
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