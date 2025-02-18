import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import RecommendationList from './RecommendationList'
import RecommendationDetails from '../details/RecommendationDetails';
import RecommendationForm from '../form/RecommendationForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface Props {   
    recommendations: Recommendation[];
    deleteRecommendation: (id: string) => void;
    submitting: boolean;
}

export default observer(function RecommendationDashboard({recommendations, deleteRecommendation, submitting}: Props){

    const {recommendationStore} = useStore();
    const {selectedRecommendation, editMode} = recommendationStore;
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList recommendations = {recommendations} 
                    deleteRecommendation={deleteRecommendation}
                    submitting={submitting}
                />
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