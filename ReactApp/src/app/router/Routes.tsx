import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/recommendations/home/HomePage";
import RecommendationDashboard from "../../features/recommendations/dashboard/RecommendationDashboard";
import RecommendationForm from "../../features/recommendations/form/RecommendationForm";
import RecommendationDetails from "../../features/recommendations/details/RecommendationDetails";

export const routes: RouteObject[] = [
   {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'recommendations', element: <RecommendationDashboard />},
            {path: 'recommendations/:id', element: <RecommendationDetails />},
            {path: 'createRecommendation', element: <RecommendationForm />},
            {path: 'manage/:id', element: <RecommendationForm />},
        ]
   },
]

export const router = createBrowserRouter(routes);