import { createContext, useContext } from "react";
import RecommendationStore from "./recommendationStore";

interface Store {
    recommendationStore: RecommendationStore
}

export const store: Store = {
    recommendationStore: new RecommendationStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}