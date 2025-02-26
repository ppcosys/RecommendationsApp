import React, { useEffect } from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

export default observer (function RecommendationDetails() {
    const {recommendationStore} = useStore();
    const {selectedRecommendation: recommendation, loadRecommendation, loadingInitial} = recommendationStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadRecommendation(id);
    }, [id, loadRecommendation])
    
    if (loadingInitial || !recommendation) return <LoadingComponent />;

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
                    <Button basic color='blue' content='Edit' />
                    <Button basic color='grey' content='Cancel' />
                </ButtonGroup>
            </CardContent>
        </Card>
    )
})