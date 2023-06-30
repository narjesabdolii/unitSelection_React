import React from 'react';
import LoginForm from './Components/LoginForm';
import './LoginForm.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentInfoTerm from './Components/StudentInfoTerm';
import StudentTermsList from './Components/StudentTermsList';

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route exact path="/StudentTermsList" element={<StudentTermsList/>} />
        <Route exact path="/StudentInfoTerm/:termid" element={<StudentInfoTerm/>} />
        {/* Other routes */}
    </Routes>
  
   
  );
};

export default App;