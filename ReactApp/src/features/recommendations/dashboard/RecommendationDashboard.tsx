import React, { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import RecommendationList from './RecommendationList'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponents';


export default observer(function RecommendationDashboard(){
    const {recommendationStore} = useStore();

    useEffect(() => {
        recommendationStore.loadRecommendations();
      }, [recommendationStore])
    
      if(recommendationStore.loadingInitial) return <LoadingComponent content='Loading app' />

    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList />
            </Grid.Column>
            <GridColumn width='6'>
                <h2>Recommendation filters</h2>
            </GridColumn>
        </Grid>
    )
})