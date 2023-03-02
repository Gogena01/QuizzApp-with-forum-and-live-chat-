import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <>
            <br />
            <Card style={{ width: '18rem', backgroundColor: 'rgb(44, 43, 46)', marginLeft: '10px', color:'white'}}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body style={{justifyContent:'left'}}>
                    <Card.Title>Exercise Coding</Card.Title>
                    <Card.Text>
                        Here you can practice your skills in coding.
                    </Card.Text>
                    <Link to='/exercise'>
                        <Button className="btn btn-info">Exercise</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default Cards