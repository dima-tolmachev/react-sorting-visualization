import React from 'react';
import Menu from './components/menu';
import Lines from './components/lines';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <Menu/>
      <Lines/>
    </div>
  );
}

export default App;
