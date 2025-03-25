import React, { SyntheticEvent, useState } from 'react';
import { Button, Icon, Item, ItemContent, ItemGroup, Label, Segment, SegmentGroup } from 'semantic-ui-react';
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
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/recommendations/${recommendation.id}`}>
                                {recommendation.title}
                            </Item.Header>
                            <Item.Description>UsernamePlaceholder</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {recommendation.date}
                    <Icon name='marker' /> {recommendation.place}
                </span>
            </Segment>
            <Segment secondary>
                Other Users...
            </Segment>
            <Segment clearing>
                <span>{recommendation.description}</span>
                <Button
                    as={Link}
                    to={`/recommendations/${recommendation.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </SegmentGroup>
    )
}