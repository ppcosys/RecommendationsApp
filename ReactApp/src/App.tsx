import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

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
      <h1>Recommendations</h1>
      <ul>
        {recommendations.map((recommendation: any) => (
          <li key={recommendation.id}>
            {recommendation.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
