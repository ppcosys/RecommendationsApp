import { makeAutoObservable } from "mobx"

export default class RecommendationStore{
    title = 'Title - Mobx';

    constructor() {
        makeAutoObservable(this)
    }

    setTitle= () => {
        this.title = this.title + '!';
    }
}