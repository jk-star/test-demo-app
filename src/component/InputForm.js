import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';

const InputForm = () => {
    const refName = useRef(null);
    const changeName = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(refName.current.value);
    }

    const inputFocus = (event) => {
        event.preventDefault();
        refName.current.focus();
    }

    const changeNameHandler = (event) => {
        event.preventDefault();
        changeName.current.value = "Jonh";
    }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>

                            <Form.Control
                                className='mb-3'
                                ref={refName}
                                type="text"
                                placeholder="Enter your name"
                                defaultValue=""
                            />

                            <Form.Control
                                ref={changeName}
                                type="text"
                                placeholder="Enter your name"
                                defaultValue="Tom"
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit" className='mx-3'>
                            Submit
                        </Button>

                        <Button variant="success" type="submit" onClick={inputFocus} className='mx-3'>
                            Input Focus
                        </Button>

                        <Button variant="info" type="submit" onClick={changeNameHandler}>
                            Change Name
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;
