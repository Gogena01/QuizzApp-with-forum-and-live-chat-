import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './card.css'

const Cards2 = () => {
    return (
        <>
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'rgb(44, 43, 46)', marginLeft: '80px', color:'white', height:'12cm'}}>
                <Card.Img id='img' variant="top" src="brain.js/100px180" />
                <Card.Body>
                    <Card.Title>Discover my new website</Card.Title>
                    <Card.Text>
                        You can find many new things
                    </Card.Text>
                    <Link to='/exercise'>
                        <Button className="btn btn-info">Discover</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Cards2