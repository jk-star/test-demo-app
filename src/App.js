import './App.css';
import React, { useRef } from 'react';
import Hello from './component/Hello';
// import InputForm from './component/InputForm';
import InputForm2 from './component/InputFormLevel2';

function App() {
  let name = 'Jyoti';
  return (
    <>
      <Hello name={name} />
      <InputForm2 />
      {/* <InputForm/> */}
    </>
  );
}

export default App;
