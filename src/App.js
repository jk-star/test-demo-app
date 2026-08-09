import './App.css';
import React from 'react';
import Hello from './component/Hello';
import PersonalProfile from './component/PersonalProfile';
import StudentCard from './component/StudentCard';
import CourseCard from './component/CourseCard';
import ProductCard from './component/ProductCard';

function App() {
  let name = 'Jyoti';

  let studentName ="Priti Singh";
  let studentAge =22;

  let courseName ="React";
  let duration ="3 Months";

  let product ="Laptop";
  let price ="50,000";

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
      <div className='div-wrapper'>
        <StudentCard name = {studentName} age={studentAge}/>
        <CourseCard name = {courseName} duration={duration}/>
        <ProductCard name= {product} price={price} />
      </div>
    </>
  );
}

export default App;
