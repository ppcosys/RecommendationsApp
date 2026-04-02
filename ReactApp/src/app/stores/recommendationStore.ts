import { makeAutoObservable, runInAction } from "mobx";
import { Recommendation } from "../models/recommendation";
import agent from "../api/agent";

export default class RecommendationStore {
    recommendationRegistry = new Map<string, Recommendation>();
    discoverRecommendations: Recommendation[] = [];
    selectedRecommendation: Recommendation | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get recommendationsByDate() {
        return Array.from(this.recommendationRegistry.values()).sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        );
    }

    get discoverRecommendationsByDate() {
        return [...this.discoverRecommendations].sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        );
    }

    loadRecommendations = async () => {
        this.setLoadingInitial(true);
        try {
            const recommendations = await agent.Recommendations.list();

            runInAction(() => {
                this.recommendationRegistry.clear();

                recommendations.forEach((recommendation) => {
                    this.setRecommendation(recommendation);
                });

                this.setLoadingInitial(false);
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            });
        }
    };

    loadDiscoverRecommendations = async () => {
        this.setLoadingInitial(true);
        try {
            const recommendations = await agent.Recommendations.discover();

            runInAction(() => {
                this.discoverRecommendations = recommendations.map((recommendation) => ({
                    ...recommendation,
                    date: recommendation.date.split("T")[0],
                }));
                this.setLoadingInitial(false);
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            });
        }
    };

    loadRecommendation = async (id: string) => {
        const recommendation = this.getRecommendation(id);

        if (recommendation) {
            this.selectedRecommendation = recommendation;
            return recommendation;
        }

        this.setLoadingInitial(true);

        try {
            const recommendationFromApi = await agent.Recommendations.details(id);

            runInAction(() => {
                this.setRecommendation(recommendationFromApi);
                this.selectedRecommendation = recommendationFromApi;
                this.setLoadingInitial(false);
            });

            return recommendationFromApi;
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.setLoadingInitial(false);
            });
        }
    };

    private setRecommendation = (recommendation: Recommendation) => {
        recommendation.date = recommendation.date.split("T")[0];
        this.recommendationRegistry.set(recommendation.id, recommendation);
    };

    private getRecommendation = (id: string) => {
        return this.recommendationRegistry.get(id);
    };

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    };

    createRecommendation = async (recommendation: Recommendation) => {
        this.loading = true;
        try {
            await agent.Recommendations.create(recommendation);
            runInAction(() => {
                this.recommendationRegistry.set(recommendation.id, recommendation);
                this.selectedRecommendation = recommendation;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    updateRecommendation = async (recommendation: Recommendation) => {
        this.loading = true;
        try {
            await agent.Recommendations.update(recommendation);
            runInAction(() => {
                this.recommendationRegistry.set(recommendation.id, recommendation);
                this.selectedRecommendation = recommendation;
                this.editMode = false;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    deleteRecommendation = async (id: string) => {
        this.loading = true;
        try {
            await agent.Recommendations.delete(id);
            runInAction(() => {
                this.recommendationRegistry.delete(id);
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}