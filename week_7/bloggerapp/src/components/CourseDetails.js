import React from 'react';

function CourseDetails({ displayType }) {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2020" }
  ];
  
  // Using the ternary operator for conditional rendering with multiple options
  return (
    <div className="course-details">
      {displayType === 'none' ? null : (
        <>
          <h2>Course Details</h2>
          {displayType === 'list' ? (
            <ul className="course-list">
              {courses.map((course, index) => (
                <li key={index}>
                  <strong>{course.name}</strong> - {course.date}
                </li>
              ))}
            </ul>
          ) : displayType === 'grid' ? (
            <div className="course-grid">
              {courses.map((course, index) => (
                <div key={index} className="course-card">
                  <h3>{course.name}</h3>
                  <p>{course.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>Unknown display type selected</p>
          )}
        </>
      )}
    </div>
  );
}

export default CourseDetails;
