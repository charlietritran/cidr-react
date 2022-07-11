import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                Hello!  Welcome to the world of applicaiton demo for spring-rest backend and react frontend.
                {/** 
                                <Container fluid>
                    <Button color="link"><Link to="/clients">Clients</Link></Button>
                </Container>
                 */}

         
            </div>
        );
    }
}
export default Home;