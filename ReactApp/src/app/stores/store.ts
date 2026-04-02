import { createContext, useContext } from 'react';
import RecommendationStore from './recommendationStore';
import UserStore from './userStore';

interface Store {
    recommendationStore: RecommendationStore;
    userStore: UserStore;
}

export const store: Store = {
    recommendationStore: new RecommendationStore(),
    userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}