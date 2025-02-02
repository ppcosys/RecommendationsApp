import React from 'react';
import { Button, ButtonGroup, Card, CardContent, CardDescription, CardHeader, CardMeta, Image } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';

interface Props{
    recommendation: Recommendation;
    cancelSelectRecommendation: () => void;
    openForm: (id: string) => void;
}

export default function RecommendationDetails({recommendation, cancelSelectRecommendation, openForm} : Props) {
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
                    <Button onClick={() => openForm(recommendation.id)} basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectRecommendation} basic color='grey' content='Cancel' />
                </ButtonGroup>
            </CardContent>
        </Card>
    )
}