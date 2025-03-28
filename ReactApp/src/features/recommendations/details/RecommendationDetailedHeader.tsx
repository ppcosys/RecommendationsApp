import { observer } from 'mobx-react-lite';
import React from 'react'
import {Button, Header, Item, Segment, Image} from 'semantic-ui-react'
import {Recommendation} from "../../../app/models/recommendation";

const recommendationImageStyle = {
    filter: 'brightness(30%)'
};

const recommendationImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface Props {
    recommendation: Recommendation
}

export default observer (function RecommendationDetailedHeader({recommendation}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${recommendation.category}.jpg`} fluid style={recommendationImageStyle}/>
                <Segment style={recommendationImageTextStyle} basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={recommendation.title}
                                    style={{color: 'white'}}
                                />
                                <p>{recommendation.date}</p>
                                <p>
                                    Hosted by <strong>Username</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button color='teal'>Vote Recommendation</Button>
                <Button>Cancel vote</Button>
                <Button color='orange' floated='right'>
                    Manage Recommendation
                </Button>
            </Segment>
        </Segment.Group>
    )
})
