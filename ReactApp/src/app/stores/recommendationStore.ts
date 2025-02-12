import { makeObservable, observable } from "mobx"

export default class RecommendationStore{
    title = 'Title - Mobx'

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}