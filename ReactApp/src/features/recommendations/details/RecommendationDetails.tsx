import React, { useEffect } from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Grid, Image } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import { useStore } from '../../../app/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import RecommendationDetailedHeader from './RecommendationDetailedHeader';
import RecommendationDetailedInfo from './RecommendationDetailedInfo';
import RecommendationDetailedChat from './RecommendationDetailedChat';
import RecommendationDetailedSidebar from './RecommendationDetailedSidebar';

export default observer (function RecommendationDetails() {
    const {recommendationStore} = useStore();
    const {selectedRecommendation: recommendation, loadRecommendation, loadingInitial} = recommendationStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadRecommendation(id);
    }, [id, loadRecommendation])
    
    if (loadingInitial || !recommendation) return <LoadingComponent />;

    return(
        <Grid>
            <Grid.Column width={10}>
                <RecommendationDetailedHeader/>
                <RecommendationDetailedInfo />
                <RecommendationDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <RecommendationDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
})