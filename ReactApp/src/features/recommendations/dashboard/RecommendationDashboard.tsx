import React from 'react';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import RecommendationList from './RecommendationList'
import RecommendationDetails from '../details/RecommendationDetails';
import RecommendationForm from '../form/RecommendationForm';

interface Props {   
    recommendations: Recommendation[];
}

export default function RecommendationDashboard({recommendations}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList recommendations = {recommendations}/>
            </Grid.Column>
            <GridColumn width='6'>
                {recommendations[0] && 
                <RecommendationDetails recommendation={recommendations[0]} />}
                <RecommendationForm />
            </GridColumn>
        </Grid>
    )
}