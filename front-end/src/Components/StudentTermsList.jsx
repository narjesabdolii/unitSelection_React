
import React  from 'react';
import './StudentTerms.css'

const StudentTerms = () => {
  const studentTerms = ['Term 1', 'Term 2', 'Term 3'];

  return (
    <div className="student-terms">
      <nav className="navbar">

      </nav>
      <div className="container">
        <div className="sidebar">
        </div>
        <div className="content">
          <h2>Student Terms</h2>
          <ul className="term-list">
            {studentTerms.map((term, index) => (
              <li key={index} className="term-item">
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentTerms;
