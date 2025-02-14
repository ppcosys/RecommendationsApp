import { makeAutoObservable} from "mobx"
import { Recommendation } from "../models/recommendation"
import agent from "../api/agent";

export default class RecommendationStore{
    recommendations: Recommendation[] = [];
    selectedRecommendation: Recommendation | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    loadRecommendations = async () => {
        this.setLoadingInitial(true);
        try {
            const recommendations = await agent.Recommendations.list();

                recommendations.forEach(recommendation => {
                    recommendation.date = recommendation.date.split('T')[0];
                    this.recommendations.push(recommendation);
                })
                this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }
}