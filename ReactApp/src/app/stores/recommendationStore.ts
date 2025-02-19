import { makeAutoObservable, runInAction} from "mobx"
import { Recommendation } from "../models/recommendation"
import agent from "../api/agent";
import {v4 as uuid} from 'uuid';

export default class RecommendationStore{
    recommendations: Recommendation[] = [];
    selectedRecommendation: Recommendation | undefined = undefined;
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

    selectRecommendation = (id: string) => {
        this.selectedRecommendation = this.recommendations.find(a => a.id === id);
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
                this.recommendations.push(recommendation);
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
                this.recommendations = [...this.recommendations.filter(a => a.id !== recommendation.id), recommendation];
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
                this.recommendations = [...this.recommendations.filter(a => a.id !== id)];
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