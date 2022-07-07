import React, {FormEventHandler, useEffect, useRef, useState} from 'react';
import {Button, Card, CardGroup, Container, Form, FormControl, FormGroup, FormLabel, FormSelect} from "react-bootstrap";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import CardHeader from "react-bootstrap/CardHeader";
import Inprogress from "./components/Inprogress";
import Finish from "./components/Finish";
import Todo from "./components/Todo";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import {AsyncLocalStorage} from "async_hooks";

function App() {
    const [task,setTask] = useState([]);
    const [progress,setProgress] = useState([]);
    const [terminate,setTerminate] = useState([]);
    const [selectValue, setSelectValue] = useState("To do")

    const taskName = useRef<HTMLInputElement>(null)
    const resultSelect = useRef<HTMLInputElement>(null)

    // @ts-ignore
    const handleChange = (e) => {
        setSelectValue(e.target.value)
        console.log(selectValue)
    }
    const handleSubmit = () => {
        const name = taskName.current?.value
        if(name == '') return

        if(selectValue == "To do")
         { // @ts-ignore
             setTask((prevState: (any | string)[]) => {
                             return [...prevState, name];
                         })
             // @ts-ignore
             taskName.current.value = null;
         }
        else if(selectValue == "In progress")
        { // @ts-ignore
            setProgress((prevState: (any | string)[]) => {
                return [...prevState, name];
            })
            // @ts-ignore
            taskName.current.value = null;
        }
        else if(selectValue == "Finish")
        { // @ts-ignore
            setTerminate((prevState: (any | string)[]) => {
                return [...prevState, name];
            })
            // @ts-ignore
            taskName.current.value = null;
        }

        console.log(name)
    }
    const handleClick = ()=>{
        // @ts-ignore
        setProgress([...progress,...task])
        setTask([])
    }
    const handleClickF = () => {
        setTerminate([...terminate,...task])
        setTask([])
    }

    const handleClickTD = ()=>{
        setTask([...task,...progress])
        setProgress([])
    }
    const handleClickFi = () => {
        setTerminate([...terminate,...progress])
        setProgress([])
    }

    const handleClickToD = ()=>{
        setTask([...task,...terminate])
        setTerminate([])
    }
    const handleClickPro = () => {
        setProgress([...progress,...terminate])
        setTerminate([])
    }
  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return(
      <Container>
          <div>
                  <h2>Add task</h2>

                  <Form >
                      <Form.Control ref={taskName} type="text"></Form.Control>
                  </Form>
                  <Form.Select  value={selectValue} onChange={handleChange}>
                      <option value="To do">To do</option>
                      <option value="In progress">In progress</option>
                      <option value="Finish">Finish</option>
                  </Form.Select>
                  <button type="submit"className="btn btn-dark" onClick={handleSubmit}>submit</button>
          </div>
          <div className="d-inline-flex col-12" >
            <div className="col-4">
                <Todo task={task}>
                    <div className="d-flex justify-content-evenly">
                        <span><button type="submit" className="btn btn-secondary " onClick={handleClick}>in progress</button></span>
                        <span><button type="submit" className="btn btn-danger w-auto" onClick={handleClickF}>finish</button></span>
                    </div>
                </Todo>
            </div>
            <div className="col-4">
                <Inprogress progress={progress}>
                    <div className="d-flex justify-content-evenly">
                        <span><button type="submit" className="btn btn-primary " onClick={handleClickTD}>to do</button></span>
                        <span><button type="submit" className="btn btn-danger w-auto" onClick={handleClickFi}>finish</button></span>
                    </div>
                </Inprogress>

            </div >
            <div className="col-4">
                <Finish terminate={terminate}>
                    <div className="d-flex justify-content-evenly">
                        <span><button type="submit" className="btn btn-primary" onClick={handleClickToD}>to do</button></span>
                        <span><button type="submit" className="btn btn-secondary " onClick={handleClickPro}>in progress</button></span>

                    </div>
                </Finish>
            </div>
          </div>

      </Container>

  );
}

export default App;
