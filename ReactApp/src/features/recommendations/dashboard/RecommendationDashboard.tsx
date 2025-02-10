import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Recommendation } from '../../../app/models/recommendation';
import RecommendationList from './RecommendationList'
import RecommendationDetails from '../details/RecommendationDetails';
import RecommendationForm from '../form/RecommendationForm';

interface Props {   
    recommendations: Recommendation[];
    selectedRecommendation: Recommendation | undefined;
    selectRecommendation: (id: string) => void;
    cancelSelectRecommendation: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (recommendation: Recommendation) => void;
    deleteRecommendation: (id: string) => void;
    submitting: boolean;
}

export default function RecommendationDashboard({recommendations, selectedRecommendation, deleteRecommendation,
    selectRecommendation, cancelSelectRecommendation, editMode, openForm, 
    closeForm, createOrEdit, submitting}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <RecommendationList recommendations = {recommendations} 
                    selectRecommendation={selectRecommendation}
                    deleteRecommendation={deleteRecommendation}
                />
            </Grid.Column>
            <GridColumn width='6'>
                {selectedRecommendation && !editMode &&
                <RecommendationDetails 
                    recommendation={selectedRecommendation} 
                    cancelSelectRecommendation = {cancelSelectRecommendation}
                    openForm={openForm}
                />}
                {editMode &&
                <RecommendationForm 
                    closeForm={closeForm} 
                    recommendation={selectedRecommendation} 
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />}
            </GridColumn>
        </Grid>
    )
}