import '../css/UserProfile.css';

import FlexBox from "./css-component/flexBox";

import { useState } from "react";

const UserProfile = () => {
    const [name, setName] = useState("");
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

                        <div className='row'>
                            <div className='col-md-4 icon-wrap d-flex'>
                                <div className='user-icon parpul-bg'>
                                    <i className="fs-2 fa-regular fa-user parpul"></i>
                                </div>
                                <div className='icon-content d-flex fs-5'>
                                    <span className='fw-bold '>Name</span>
                                    <span >Your full name</span>
                                </div>

                            </div>
                            <div className='col-md-4'>
                                <input
                                    className='form-control user-input'
                                    type="text"
                                    placeholder='Enter your name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='col-md-4'>
                                <button className='btn edit-name'>
                                    <span><i className="parpul fa-solid fa-pen"></i></span>
                                    <span>Edit Name</span>
                                </button>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'>
                                <div className=''>
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>
                                <div className=''>
                                    <span className='font-bold'>Age</span>
                                    <span>age in years</span>
                                </div>
                            </div>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'></div>
                        </div>

                    </div>
                    <div className='profile-update-wrap'>


                        <div className=''>
                            <div className=''>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className=''>
                                <span className='font-bold'>City</span>
                                <span>Your current city</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
