import './App.css';
import React from 'react';
import Hello from './component/Hello';

function App() {
  let name = 'Jyoti';
  return (
    <>
      <Hello name={name} />
    </>
  );
}

export default App;
