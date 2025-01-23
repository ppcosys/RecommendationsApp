import React from 'react'
import { Recommendation } from '../../../app/models/recommendation'
import { Button, Item, Label, Segment } from 'semantic-ui-react';

interface Props {
    recommendations: Recommendation[];
    selectRecommendation: (id: string) => void;
}

export default function RecommendationList({recommendations, selectRecommendation }: Props) {
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
                                <Button onClick={() => selectRecommendation(recommendation.id)} floated='right' content='View' color='blue' />
                                <Label basic content={recommendation.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}