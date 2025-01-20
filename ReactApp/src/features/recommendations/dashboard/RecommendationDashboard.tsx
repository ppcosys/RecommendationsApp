import React from 'react'
import { Grid, List } from 'semantic-ui-react'
import { Recommendation } from '../../../app/models/recommendation';

interface Props {
    recommendations: Recommendation[];
}

export default function RecommendationDashboars({recommendations}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <List>
                    {recommendations.map(recommendation => (
                        <List.Item key={recommendation.id}>
                        {recommendation.title}
                        </List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}