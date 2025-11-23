import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/recommendations/home/HomePage";
import RecommendationDashboard from "../../features/recommendations/dashboard/RecommendationDashboard";
import RecommendationForm from "../../features/recommendations/form/RecommendationForm";
import RecommendationDetails from "../../features/recommendations/details/RecommendationDetails";
import TestErrors from "../../features/recommendations/errors/TestError";
import NotFound from "../../features/recommendations/errors/NotFound";
import AboutPage from "../../features/recommendations/about/AboutPage";

export const routes: RouteObject[] = [
   {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'recommendations', element: <RecommendationDashboard />},
            {path: 'recommendations/:id', element: <RecommendationDetails />},
            {path: 'createRecommendation', element: <RecommendationForm key='create'/>},
            {path: 'manage/:id', element: <RecommendationForm key='manage'/>},
            {path: 'about', element: <AboutPage />},
            {path: 'errors/', element: <TestErrors/>},
            {path: 'not-found/', element: <NotFound/>},
            {path: '*', element: <Navigate replace to='/not-found' />}
        ]
   },
]

export const router = createBrowserRouter(routes);