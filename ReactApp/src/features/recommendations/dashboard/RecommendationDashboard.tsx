import React, { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import RecommendationList from './RecommendationList'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import RecommendationFilters from './RecommendationsFilters';


export default observer(function RecommendationDashboard(){
    const {recommendationStore} = useStore();
    const {loadRecommendations, recommendationRegistry} = recommendationStore;

    useEffect(() => {
        if (recommendationRegistry.size <= 1) loadRecommendations();
      }, [loadRecommendations])
    
      if(recommendationStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList />
            </Grid.Column>
            <GridColumn width='6'>
                <RecommendationFilters />
            </GridColumn>
        </Grid>
    )
})