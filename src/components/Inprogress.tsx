import React from 'react';
import {Card, Form, ListGroup} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

// @ts-ignore
const Inprogress = ({ progress, children }) => {
    return (
        <Card border="primary" bg="secondary" style={{ width: '20rem' }}>
            <CardHeader as="h3">In progress:</CardHeader>
            <Card.Body>
                {progress.map((task: string ) =>
                    <Card key={task} bg="light" >
                        
                    <h5 className="text-center " key={task}>{task}</h5>
                        {children}

                   </Card>)}

            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
};

export default Inprogress;