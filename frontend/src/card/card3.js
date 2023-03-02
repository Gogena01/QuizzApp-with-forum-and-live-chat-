import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './card.css'

const Cards3 = () => {
    return (
        <>
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'rgb(44, 43, 46)', marginLeft: '80px', color:'white', height:'12cm'}}>
                <Card.Img id='img3' variant="top" src="brain.js/100px180" />
                <Card.Body >
                    <Card.Title>Visit our forum</Card.Title>
                    <Card.Text>
                        Here you can see our forum
                    </Card.Text>
                    <Link to='/forum'>
                        <Button className="btn btn-info">Forum</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Cards3