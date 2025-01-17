import { useEffect, useState } from 'react'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react';
import { Recommendation } from '../models/recommendation';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    axios.get<Recommendation[]>('http://localhost:5000/api/recommendations')
      .then(response => {
        setRecommendations(response.data)
      })
  }, []) 
  
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {recommendations.map(recommendation => (
          <List.Item key={recommendation.id}>
            {recommendation.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
