import React from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';

export default function RecommendationDetails() {
    const {recommendationStore} = useStore();
    const {selectedRecommendation: recommendation, openForm, cancelSelectedRecommendation} = recommendationStore;

    if (! recommendation) return <LoadingComponent />;

    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${recommendation.category}.jpg`}/>
            <CardContent>
                <CardHeader>{recommendation.title}</CardHeader>
                <CardMeta>
                    <span>{recommendation.date}</span>
                </CardMeta>
                <CardDescription>
                    {recommendation.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <ButtonGroup widths='2'>
                    <Button onClick={() => openForm(recommendation.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedRecommendation} basic color='grey' content='Cancel' />
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}