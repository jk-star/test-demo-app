import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
const InputFormLevel2 = () => {
    const colorChange = useRef(null);
    const clearInput = useRef(null);
    const selectInput = useRef(null);
    const setEmail = useRef(null);
    const setPassword = useRef(null);


    const colorChangeHandler = (event, color) => {
        event.preventDefault();
        colorChange.current.style.color = color;
    }
    const clearInputHandler = (event) => {
        event.preventDefault();
        clearInput.current.value = "";
    }
    const selectInputHandler = (event) => {
        event.preventDefault();
        selectInput.current.select();
    }

    const showPass = () => {
        if (setPassword.current.type === "password") {
            setPassword.current.type = "text";
        } else {
            setPassword.current.type = "password";
        }
    };

    const loginSubmitHandel = (event) => {
        event.preventDefault();
        let email = setEmail.current.value;
        let password = setPassword.current.value;
        console.log(`Email ${email}`);
        console.log(`Password ${password}`);
        console.log(`character Lenght = ${password.length}`);


        setEmail.current.value = "";
        setPassword.current.value = "";
        setEmail.current.focus();

    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-3'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Text Color Change</Form.Label>

                            <Form.Control
                                ref={colorChange}
                                className='mb-3'
                                type="text"
                                defaultValue="Hello World"
                            />
                        </Form.Group>

                        <Button variant="danger" type="submit"
                            onClick={(event) => colorChangeHandler(event, 'red')}>
                            Red
                        </Button>

                        <Button variant="primary" type="submit" className='mx-1'
                            onClick={(event) => colorChangeHandler(event, 'blue')}>
                            Blue
                        </Button>

                        <Button variant="success" type="submit"
                            onClick={(event) => colorChangeHandler(event, 'green')}>
                            Green
                        </Button>
                    </Form>
                </div>
                <div className='col-md-3'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Clear Input </Form.Label>

                        <Form.Control
                            ref={clearInput}
                            className='mb-3'
                            type="text"
                            defaultValue="Hello World"
                        />
                        <Button variant="info" type="submit"
                            onClick={clearInputHandler}>
                            Clear
                        </Button>
                    </Form.Group>
                </div>
                <div className='col-md-3'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Select All Text</Form.Label>

                        <Form.Control
                            ref={selectInput}
                            className='mb-3'
                            type="text"
                            defaultValue="Hello World"
                        />
                        <Button variant="primary" type="submit"
                            onClick={selectInputHandler}>
                            Select
                        </Button>
                    </Form.Group>
                </div>
                <div className='col-md-3'>
                    <Form onSubmit={loginSubmitHandel}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                ref={setEmail}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                ref={setPassword}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='mx-2'>
                            Login
                        </Button>
                        <Button
                            variant="warning"
                            type="button"
                            onClick={showPass}
                        >
                            Show Password
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default InputFormLevel2;