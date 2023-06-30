import React from 'react';
import './StudentInfoTerm.css';

const StudentInfoTerm = () => {
  const studentInfoTerm = [
    'مشاهده لیست دروس ارائه شده برای پیش ثبت نام',
    'مشاهده پیش ثبت نام ها',
    'مشاهده درس های ثبت نام شده',
    'مشاهده لیست دروس ارائه شده برای ثبت نام'
  ];

  return (
    <div className="studentInfo-terms">
      <nav className="navbar">
      </nav>
      <div className="container">
        <div className="sidebar">
          {/* بدون دکمه */}
        </div>
        <div className="content">
          <div className="term-buttons">
            <div className="button-column">
              <button className="term-button">
              <span className="circle"></span>
                {studentInfoTerm[0]}</button>
              <button className="term-button">{studentInfoTerm[1]}</button>
            </div>
            <div className="button-column">
              <button className="term-button">{studentInfoTerm[2]}</button>
              <button className="term-button">{studentInfoTerm[3]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoTerm;
