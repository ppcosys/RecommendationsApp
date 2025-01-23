import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import RecommendationList from './RecommendationList'
import RecommendationDetails from '../details/RecommendationDetails';
import RecommendationForm from '../form/RecommendationForm';

interface Props {   
    recommendations: Recommendation[];
    selectedRecommendation: Recommendation | undefined;
    selectRecommendation: (id: string) => void;
    cancelSelectRecommendation: () => void;
}

export default function RecommendationDashboard({recommendations, selectedRecommendation, 
    selectRecommendation, cancelSelectRecommendation}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList recommendations = {recommendations} selectRecommendation={selectRecommendation} />
            </Grid.Column>
            <GridColumn width='6'>
                {selectedRecommendation && 
                <RecommendationDetails recommendation={selectedRecommendation} cancelSelectRecommendation = {cancelSelectRecommendation}/>}
                <RecommendationForm />
            </GridColumn>
        </Grid>
    )
}