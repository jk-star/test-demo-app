import { useState } from "react";
import FlexBox from "./css-component/flexBox";
const UserProfile = () => {
    const [name, setName] = useState("Priti");
    const [city, setCity] = useState("");
    const [age, setAge] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name,
            city,
            age
        };

        console.log(formData);
    }

    return (
        <div className="profile">
            <FlexBox>
                <span>Name: {name}</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FlexBox>
            <FlexBox>
                <span>Age: {age}</span>
                <button onClick={() => setAge(age + 1)}>+</button>
                <button onClick={() =>
                    setAge(age => (age > 0 ? age - 1 : 0))
                }>-</button>
            </FlexBox>
            <FlexBox>
                <span>City: {city}</span>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={city}
                    onChange={(e) => { setCity(e.target.value) }}
                />
            </FlexBox>

            <FlexBox>
                <form onSubmit={handleSubmit}>
                    <button>
                        Save
                    </button>
                </form>
            </FlexBox>

        </div>
    );

}
export default UserProfile;