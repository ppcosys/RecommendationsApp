import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import RecommendationListItem from './RecommendationListItem';


export default observer (function RecommendationList() {
    const {recommendationStore} = useStore();
    const {recommendationsByDate} = recommendationStore;

    return (
        <Segment>
            <Item.Group divided>
                {recommendationsByDate.map(recommendation => (
                    <RecommendationListItem key={recommendation.id} recommendation={recommendation} />
                ))}
            </Item.Group>
        </Segment>
    )
})