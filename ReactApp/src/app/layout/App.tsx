import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';

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

  function handleCreateOrEditRecommendation(recomendation: Recommendation){
    recomendation.id 
      ? setRecommendations([...recommendations.filter(x => x.id !== recomendation.id), recomendation])
      : setRecommendations([...recommendations, recomendation]);
    setEditMode(false);
    setSelectedRecommendation(recomendation);
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
