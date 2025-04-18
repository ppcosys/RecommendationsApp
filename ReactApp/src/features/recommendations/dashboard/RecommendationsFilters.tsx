import React from 'react';
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';

export default function RecommendationFilters(){
    return(
        <>
            <Menu vertical size='large' style={{width: '100%', marginTop: 25}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Recommendations' />
                <Menu.Item content='I voted' />
                <Menu.Item content='I recommend it' />
            </Menu>
            <Header />
            <Calendar />
        </>

    )
}
