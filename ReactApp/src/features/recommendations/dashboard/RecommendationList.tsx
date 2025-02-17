import React, { SyntheticEvent, useState } from 'react'
import { Recommendation } from '../../../app/models/recommendation'
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

interface Props {
    recommendations: Recommendation[];
    deleteRecommendation: (id: string) => void;
    submitting: boolean;
}

export default function RecommendationList({recommendations, deleteRecommendation, submitting }: Props) {
    const [target, setTarget] = useState('');
    
    function handleRecommendationDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
        setTarget(e.currentTarget.name);
        deleteRecommendation(id);
    }

    const {recommendationStore} = useStore();

    return (
        <Segment>
            <Item.Group divided>
                {recommendations.map(recommendation => (
                    <Item key={recommendation.id}>
                        <Item.Content>
                            <Item.Header as='a'>{recommendation.title}</Item.Header>
                            <Item.Meta>{recommendation.date}</Item.Meta>
                            <Item.Description>
                                <div>{recommendation.description}</div>
                                <div>{recommendation.city}, {recommendation.place}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => recommendationStore.selectRecommendation(recommendation.id)} floated='right' content='View' color='blue' />
                                <Button
                                    name={recommendation.id}
                                    loading={submitting && target === recommendation.id} 
                                    onClick={(e) => handleRecommendationDelete(e, recommendation.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red' />
                                <Label basic content={recommendation.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}