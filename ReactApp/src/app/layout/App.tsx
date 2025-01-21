import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Header, List } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';
import NavBar from './NavBar';
import RecommendationDashboard from '../../features/recommendations/dashboard/RecommendationDashboard';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    axios.get<Recommendation[]>('http://localhost:5000/api/recommendations')
      .then(response => {
        setRecommendations(response.data)
      })
  }, []) 
  
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <RecommendationDashboard recommendations={recommendations} />
      </Container>
    </>
  )
}

export default App
