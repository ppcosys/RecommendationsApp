import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/recommendations')
      .then(response => {
        setRecommendations(response.data)
      })
  }, []) 
  
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
      <List>
        {recommendations.map((recommendation: any) => (
          <List.Item key={recommendation.id}>
            {recommendation.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
