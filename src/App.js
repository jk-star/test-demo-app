import './App.css';
import React from 'react';
import Hello from './component/Hello';
import PersonalProfile from './component/PersonalProfile';
import StudentCard from './component/StudentCard';

function App() {
  let name = 'Jyoti';

  let studentName ="Priti Singh";
  let studentAge =22;

  const skills = [
    {
      name: "HTML",
      icon: "devicon-html5-plain colored"
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain colored"
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored"
    },
    {
      name: "React",
      icon: "devicon-react-original colored"
    }
  ];

  const profile = {
    name: "Jyoti",
    role: "React Developer",
    city: "Lucknow"
  };

  return (
    <>
      <Hello name={name} />
      <PersonalProfile skills={skills} profile={profile} />
      <StudentCard name = {studentName} age={studentAge}/>
    </>
  );
}

export default App;
