import { useEffect} from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {recommendationStore} = useStore();

  useEffect(() => {
    recommendationStore.loadRecommendations();
  }, [recommendationStore])

  if(recommendationStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <RecommendationDashboard />
      </Container>
    </>
  )
}

export default observer(App);
