import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/recommendations/home/HomePage";
import RecommendationDashboard from "../../features/recommendations/dashboard/RecommendationDashboard";
import RecommendationForm from "../../features/recommendations/form/RecommendationForm";

export const routes: RouteObject[] = [
   {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'recommendations', element: <RecommendationDashboard />},
            {path: 'createRecommendation', element: <RecommendationForm />},
        ]
   },
]

export const router = createBrowserRouter(routes);