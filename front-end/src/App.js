import React from 'react';
import LoginForm from './Components/LoginForm';
import './LoginForm.css';
import StudentTerms from './Components/StudentTermsList';

const App = () => {
  return (
    <div className="app">
      <StudentTerms />
    </div>
  );
};

export default App;