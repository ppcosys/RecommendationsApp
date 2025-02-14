import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {recommendationStore} = useStore();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    recommendationStore.loadRecommendations();
  }, [recommendationStore])

  function handleSelectRecommendation(id: string) {
    setSelectedRecommendation(recommendations.find(x => x.id === id));
  }

  function handleCancelSelectRecommendation() {
    setSelectedRecommendation(undefined);
  }

  function handleFormOpen(id?: string){
    id ? handleSelectRecommendation(id) : handleCancelSelectRecommendation();
    setEditMode(true);
  }
  
  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditRecommendation(recommendation: Recommendation){
    setSubmitting(true);
    if (recommendation.id){
      agent.Recommendations.update(recommendation).then(() => {
        setRecommendations([...recommendations.filter(x => x.id !== recommendation.id), recommendation])
        setSelectedRecommendation(recommendation);
        setEditMode(false);
        setSubmitting(false);

      })
    } else {
      recommendation.id = uuid();
      agent.Recommendations.create(recommendation).then(() => {
        setRecommendations([...recommendations, recommendation, recommendation])
        setSelectedRecommendation(recommendation);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

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
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <RecommendationDashboard 
          recommendations={recommendationStore.recommendations}
          selectedRecommendation={selectedRecommendation}
          selectRecommendation={handleSelectRecommendation}
          cancelSelectRecommendation={handleCancelSelectRecommendation}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditRecommendation}
          deleteRecommendation={handleDeleteRecommendation}
          submitting={submitting}
        />
      </Container>
    </>
  )
}

export default observer(App);
