import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentTerms.css';

const StudentTerms = () => {
  const studentTerms = ['Term 1', 'Term 2', 'Term 3', 'Term 4', 'Term 5', 'Term 6', 'Term 7', 'Term 8'];
  const navigate = useNavigate();

  const handleTermClick = (term) => {
    navigate(`/StudentInfoTerm/${term}`);
  };

  const [showButtonList, setShowButtonList] = React.useState(false);

  return (
    <div className="student-terms">
      <nav className="navbar">
        <button className="logout-button">خروج</button>
      </nav>
      <div className="container">
        <div className="sidebar">
          <button className="showList-button" onClick={() => setShowButtonList(!showButtonList)}>
            مشاهده لیست ترم ها
          </button>
        </div>
        <div className="content">
          <h2>Student Terms</h2>
          {showButtonList && (
            <div className="term-buttons">
              <div className="term-buttons-row">
                {studentTerms.slice(0, 4).map((term, index) => (
                  <button key={index} className="term-button" onClick={() => handleTermClick(index +1)}>
                    {term}
                  </button>
                ))}
              </div>
              <div className="term-buttons-row">
                {studentTerms.slice(4, 8).map((term, index) => (
                  <button key={index} className="term-button" onClick={() => handleTermClick(index +1)}>
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentTerms;
