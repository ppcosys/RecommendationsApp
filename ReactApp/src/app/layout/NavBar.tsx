import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function NavBar() {
    const {recommendationStore} = useStore();
    
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Recommendations
                </Menu.Item>
                <Menu.Item name='Recommendations'/>
                <Menu.Item>
                    <Button onClick={() => recommendationStore.openForm()} positive content='Create Recommendation'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}