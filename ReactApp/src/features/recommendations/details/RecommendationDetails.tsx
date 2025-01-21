import React from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';

interface Props{
    recommendation: Recommendation
}

export default function RecommendationDetails({recommendation} : Props) {
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
}