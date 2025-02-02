import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Recommendation[]>('http://localhost:5000/api/recommendations')
      .then(response => {
        setRecommendations(response.data)
      })
  }, [])

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
    recommendation.id 
      ? setRecommendations([...recommendations.filter(x => x.id !== recommendation.id), recommendation])
      : setRecommendations([...recommendations, recommendation, {...recommendation, id: uuid()}]);
    setEditMode(false);
    setSelectedRecommendation(recommendation);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: '7em'}}>
        <RecommendationDashboard 
          recommendations={recommendations}
          selectedRecommendation={selectedRecommendation}
          selectRecommendation={handleSelectRecommendation}
          cancelSelectRecommendation={handleCancelSelectRecommendation}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditRecommendation}
        />
      </Container>
    </>
  )
}

export default App
