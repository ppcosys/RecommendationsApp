import { makeAutoObservable, runInAction} from "mobx"
import { Recommendation } from "../models/recommendation"
import agent from "../api/agent";
import {v4 as uuid} from 'uuid';

export default class RecommendationStore{
    recommendationRegistry = new Map<string, Recommendation>();
    selectedRecommendation: Recommendation | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get recommendationsByDate() {
        return Array.from(this.recommendationRegistry.values()).sort((a,b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadRecommendations = async () => {
        try {
            const recommendations = await agent.Recommendations.list();

            recommendations.forEach(recommendation => {
                recommendation.date = recommendation.date.split('T')[0];
                this.recommendationRegistry.set(recommendation.id, recommendation);
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

    selectRecommendation = (id: string) => {
        this.selectedRecommendation = this.recommendationRegistry.get(id);
    }

    cancelSelectedRecommendation = () => {
        this.selectedRecommendation = undefined;

    }

    openForm = (id?: string) => {
        id ? this.selectRecommendation(id) : this.cancelSelectedRecommendation();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createRecommendation = async (recommendation: Recommendation) => {
        this.loading = true;
        recommendation.id = uuid();
        try {
            await agent.Recommendations.create(recommendation);
            runInAction(() => {
                this.recommendationRegistry.set(recommendation.id, recommendation);
                this.selectedRecommendation = recommendation;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;

            })
        }
    }

    updateRecommendation = async (recommendation: Recommendation) => {
        this.loading = true;
        try {
            await agent.Recommendations.update(recommendation);
            runInAction(() => {
                this.recommendationRegistry.set(recommendation.id, recommendation);
                this.selectedRecommendation = recommendation;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteRecommendation = async (id: string) => {
        this.loading = true;
        try{
            await agent.Recommendations.delete(id);
            runInAction(() => {
                this.recommendationRegistry.delete(id);
                if (this.selectedRecommendation?.id === id) this.cancelSelectedRecommendation;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}