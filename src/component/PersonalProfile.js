const PersonalProfile = ({ skills, profile }) => {
    console.log(skills);
    return (
        <div className="card">
            <div className="card-header">My Profile</div>
            <div className="card-body">
                <div className="card-body-img-wrap">
                    <img src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg" width={200} />
                    <div className="text-wrap">
                        <p>
                            <span><i className="icon fa-solid fa-user"></i> </span>
                            <span>Name: {profile.name}</span>
                        </p>
                        <p>
                            <span><i className="icon fa-solid fa-briefcase"></i></span>
                            <span>Role: {profile.role}</span>
                        </p>
                        <p>
                            <span><i className="icon fa-solid fa-location-dot"></i></span>
                            <span>City: {profile.city}</span>
                        </p>
                    </div>

                </div>
                <div className="skill-wrap">
                    <h2>My skill</h2>
                    <div className="skills-container">
                        {skills.map((skill, index) => (
                            <div className="skill-card" key={index}>

                                <i className={skill.icon}></i>

                                <h3>{skill.name}</h3>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="card-footer">
                @ 2026 My Profile
            </div>
        </div>
    );
}

export default PersonalProfile;
