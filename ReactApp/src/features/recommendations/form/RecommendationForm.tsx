import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";
import { Recommendation } from "../../../app/models/recommendation";
import { useStore } from "../../../app/stores/store";

interface Props {
    createOrEdit: (recommendation: Recommendation) => void;
    submitting: boolean;
}


export default function RecommendationForm({createOrEdit, submitting}: Props){
    const {recommendationStore} = useStore();
    const {selectedRecommendation, closeForm} = recommendationStore;

    const initialState = selectedRecommendation ?? {
        id: '',
        title: '',
        category: '',
        link: '',
        date: '',
        description: '',
        country: '',
        city: '',
        place: ''
    }
    
    const [recommendation, setRecommendation] = useState(initialState);

    function handleSubmit(){
        createOrEdit(recommendation);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setRecommendation({...recommendation, [name]: value})
    }

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
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}