import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';

interface Props {
    recommendation: Recommendation
}

export default function RecommendationListItem({recommendation}: Props) {
    
        const {recommendationStore} = useStore();
        const {deleteRecommendation , loading} = recommendationStore;
        
        const [target, setTarget] = useState('');
        
        function handleRecommendationDelete(e: SyntheticEvent<HTMLButtonElement>, id: string){
            setTarget(e.currentTarget.name);
            deleteRecommendation(id);
        }
    
    
    return (
        <Item key={recommendation.id}>
            <Item.Content>
                <Item.Header as='a'>{recommendation.title}</Item.Header>
                <Item.Meta>{recommendation.date}</Item.Meta>
                <Item.Description>
                    <div>{recommendation.description}</div>
                    <div>{recommendation.city}, {recommendation.place}</div>
                </Item.Description>
                <Item.Extra>
                    <Button as={Link} to={`/recommendations/${recommendation.id}`} 
                        floated='right' content='View' color='blue'/>
                    <Button
                        name={recommendation.id}
                        loading={loading && target === recommendation.id} 
                        onClick={(e) => handleRecommendationDelete(e, recommendation.id)} 
                        floated='right' 
                        content='Delete' 
                        color='red' />
                    <Label basic content={recommendation.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}