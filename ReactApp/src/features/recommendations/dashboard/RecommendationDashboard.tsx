import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import RecommendationList from './RecommendationList'
import RecommendationDetails from '../details/RecommendationDetails';
import RecommendationForm from '../form/RecommendationForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function RecommendationDashboard(){

    const {recommendationStore} = useStore();
    const {selectedRecommendation, editMode} = recommendationStore;
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList />
            </Grid.Column>
            <GridColumn width='6'>
                {selectedRecommendation && !editMode &&
                <RecommendationDetails />}
                {editMode &&
                <RecommendationForm />}
            </GridColumn>
        </Grid>
    )
})