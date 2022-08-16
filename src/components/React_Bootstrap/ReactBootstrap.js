import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function ReactBootstrap () {
    return (
        <Card>
            <Card.Body>
            <Card.Title><h1>Asif Ahamed</h1></Card.Title>
            <Card.Text>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </Card.Text>
            <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    )
}
export default ReactBootstrap;
