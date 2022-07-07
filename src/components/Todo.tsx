import React, {useEffect, useState} from 'react';
import {Button, Card, CardGroup, CardImg, Form, ListGroup} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";
import Inprogress from "./Inprogress";

// @ts-ignore
const Todo = ({ task, children }) => {
    return (
        <Card border="primary" bg="primary" style={{ width: '20rem' }}>
            <CardHeader as="h3">To do:</CardHeader>
            <Card.Body>
                    {task.map((task: string ) => <Card key={task} bg="light" >
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

export default Todo;