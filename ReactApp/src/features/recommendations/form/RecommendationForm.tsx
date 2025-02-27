import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Recommendation } from "../../../app/models/recommendation";
import LoadingComponent from "../../../app/layout/LoadingComponents";

export default observer(function RecommendationForm(){
    const {recommendationStore} = useStore();
    const {selectedRecommendation, createRecommendation, updateRecommendation,
            loading, loadRecommendation, loadingInitial} = recommendationStore;
    const {id} = useParams();

    const [recommendation, setRecommendation] = useState<Recommendation>({
        id: '',
        title: '',
        category: '',
        link: '',
        date: '',
        description: '',
        country: '',
        city: '',
        place: '' 
    });

    useEffect(() => {
        if (id) loadRecommendation(id).then(recommendation => setRecommendation(recommendation!))
    }, [id, loadRecommendation]);

    function handleSubmit(){
        recommendation.id ? updateRecommendation(recommendation) : createRecommendation(recommendation)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setRecommendation({...recommendation, [name]: value})
    }

    if (loadingInitial) return <LoadingComponent content='Loading recommendation...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormInput placeholder='Title' value={recommendation.title} name='title'onChange={handleInputChange} />
                <FormInput placeholder='Category' value={recommendation.category} name='category'onChange={handleInputChange} />
                <FormInput placeholder='Link' value={recommendation.link} name='link'onChange={handleInputChange} />
                <FormInput type='date' placeholder='Date' value={recommendation.date} name='date'onChange={handleInputChange} />
                <FormTextArea placeholder='Description' value={recommendation.description} name='description'onChange={handleInputChange} />
                <FormInput placeholder='Country' value={recommendation.country} name='country'onChange={handleInputChange} />
                <FormInput placeholder='City' value={recommendation.city} name='city'onChange={handleInputChange} />
                <FormInput placeholder='Place' value={recommendation.place} name='place'onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
})