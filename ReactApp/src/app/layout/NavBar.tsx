import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    Recommendations
                </Menu.Item>
                <Menu.Item as={NavLink} to='/recommendations' name='Recommendations'/>
                <Menu.Item as={NavLink} to='/errors' name='Errors'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createRecommendation' positive content='Create Recommendation'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}