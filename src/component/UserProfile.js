import '../css/UserProfile.css';

import FlexBox from "./css-component/flexBox";

import { useState } from "react";

const UserProfile = () => {
    const [name, setName] = useState("Priti");
    const [city, setCity] = useState("");
    const [age, setAge] = useState(0);
    const [savedData, setSavedData] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name,
            city,
            age
        };

        setSavedData(formData);

    }



    return (

        <div className='container'>
            <div className="row ">
                <div className='col-md-10 offset-1 mt-4'>
                    <div className='card user-card'>
                        <div className='user-card-header'>
                            <FlexBox>
                                <span><i className="fs-1 fa-solid fa-circle-user text-primary"></i></span>
                                <span className='fs-1 text-capitalize'>user profile editor</span>
                            </FlexBox>
                            <p className='fs-4 text-center'>Update your profile information and save your changes.</p>
                        </div>
                        <div className='card'>
                            <div className='row mx-0 border-bottom p-4'>
                                <div className='col-md-4 icon-wrap d-flex'>
                                    <div className='user-icon parpul-bg'>
                                        <i className="fs-2 fa-regular fa-user parpul"></i>
                                    </div>
                                    <div className='icon-content d-flex fs-5'>
                                        <span className='fw-bold text-capitalize'>{name}</span>
                                        <span >Your full name</span>
                                    </div>

                                </div>
                                <div className='col-md-8'>
                                    <input
                                        className='form-control user-input'
                                        type="text"
                                        placeholder='Enter your name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='row mx-0 border-bottom p-4'>
                                <div className='col-md-4 icon-wrap d-flex'>
                                    <div className='user-icon green-bg'>
                                        <i className="fs-2 fa-solid fa-calendar-days text-success"></i>
                                    </div>
                                    <div className='icon-content d-flex fs-5'>
                                        <span className='fw-bold'>{age}</span>
                                        <span className='text-capitalize'>age in years</span>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className="counter">
                                        <div className="counter-btn minus" onClick={() =>
                                            setAge(age => (age > 0 ? age - 1 : 0))
                                        }>−</div>
                                        <div className="counter-value">{age}</div>
                                        <div className="counter-btn plus" onClick={() => setAge(age + 1)}>+</div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='green-bg fs-5 text-success p-3 rounded text-center'>Min age is 0</div>
                                </div>
                            </div>

                            <div className='row mx-0 p-4'>
                                <div className='col-md-4 icon-wrap d-flex'>
                                    <div className='user-icon blue-bg'>
                                        <i className="fs-2 fa-solid fa-location-dot text-primary"></i>
                                    </div>
                                    <div className='icon-content d-flex fs-5'>
                                        <span className='fw-bold text-capitalize'>{city}</span>
                                        <span >Your current city</span>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                    <input
                                        type="text"
                                        className='form-control user-input'
                                        placeholder='Enter your city'
                                        value={city}
                                        onChange={(e) => { setCity(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className='card save-btn-bg'>
                                <form onSubmit={handleSubmit}>
                                    <button className='save-btn btn'>
                                        <span><i className="fa-regular fa-floppy-disk"></i></span>
                                        <span className='save-btn-text' >save profile</span>
                                    </button>
                                </form>
                                <p className='text-center fs-4'>Click to save profile information</p>
                            </div>
                        </div>
                        <div className='card profile-data-wrap'>
                            <div className='profile-data-text'>
                                <span><i className="fa-solid fa-circle-info"></i></span>
                                <span>profile data</span>
                            </div>
                            <div className='formData'>
                                {savedData && (
                                    <>
                                        <p>
                                            <strong>Name:</strong> {savedData.name}
                                        </p>

                                        <p>
                                            <strong>City:</strong> {savedData.city}
                                        </p>

                                        <p>
                                            <strong>Age:</strong> {savedData.age}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default UserProfile;
