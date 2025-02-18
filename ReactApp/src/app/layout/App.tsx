import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {recommendationStore} = useStore();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    recommendationStore.loadRecommendations();
  }, [recommendationStore])



  function handleDeleteRecommendation(id: string){
    setSubmitting(true);
    agent.Recommendations.delete(id).then(() => {
      setRecommendations([...recommendations.filter(x => x.id !== id)])
      setSubmitting(false);
    })
  }


  if(recommendationStore.loadingInitial) return <LoadingComponent content='Loading app' />


  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <RecommendationDashboard 
          recommendations={recommendationStore.recommendations}
          deleteRecommendation={handleDeleteRecommendation}
          submitting={submitting}
        />
      </Container>
    </>
  )
}

export default observer(App);
