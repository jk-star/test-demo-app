import '../css/UserProfile.css';

import FlexBox from "./css-component/flexBox";

import { useState } from "react";

const UserProfile = () => {
    const [name, setName] = useState("");
    return (
        <div className=''>
            <div className='user-card-header'>
                <FlexBox>
                    <span><i className="text-blue-500 fa-solid fa-circle-user text-3xl font-bold"></i></span>
                    <span className='text-4xl font-bold'>user profile editor</span>
                </FlexBox>
                <p className=' text-center'>Update your profile information and save your changes.</p>
            </div>
            <div className='profile-update-wrap'>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                        <div className=''>
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Name</span>
                            <span>Your full name</span>
                        </div>
                    </div>
                    <input
                        className='w-100 border-1 border-solid rounded-md pl-3 pr-3'
                        type="text"
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button>
                        <span><i className="fa-solid fa-pen"></i></span>
                        <span>Edit Name</span>
                    </button>
                </div>
                <div className='age'>
                    <div className=''>
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className=''>
                        <span className='font-bold'>Age</span>
                        <span>age in years</span>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='bg-sky-500/20 rounded-md flex p-4'>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-bold'>City</span>
                        <span>Your current city</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;