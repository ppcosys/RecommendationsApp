import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Recommendation } from '../../../app/models/recommendation';
import RecommendationList from './RecommendationList'

interface Props {   
    recommendations: Recommendation[];
}

export default function RecommendationDashboard({recommendations}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList recommendations = {recommendations}/>
            </Grid.Column>
        </Grid>
    )
}