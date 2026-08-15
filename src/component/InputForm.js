import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';

const InputForm = () => {
    const refName = useRef(null);
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(refName.current.value);
    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-6'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>

                            <Form.Control
                                ref={refName}
                                type="text"
                                placeholder="Enter your name"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default InputForm;