import React from "react";
import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";


export default function RecommendationForm(){
    return (
        <Segment clearing>
            <Form>
                <FormInput placeholder='Title' />
                <FormInput placeholder='Category' />
                <FormInput placeholder='Link' />
                <FormInput placeholder='Date' />
                <FormTextArea placeholder='Description' />
                <FormInput placeholder='Country' />
                <FormInput placeholder='City' />
                <FormInput placeholder='Place' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' positive type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}