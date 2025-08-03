import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [courseDisplayType, setCourseDisplayType] = useState('list');
  
  const toggleBooks = () => setShowBooks(!showBooks);
  const toggleBlogs = () => setShowBlogs(!showBlogs);
  
  const changeCourseDisplay = (type) => setCourseDisplayType(type);
  
  let bookComponent = null;
  if (showBooks) {
    bookComponent = <BookDetails show={true} />;
  }

  return (
    <div className="App">
      <h1>Blogger App - Conditional Rendering Demo</h1>
      
      <div className="controls">
        <div>
          <label>Books: </label>
          <button onClick={toggleBooks}>{showBooks ? 'Hide' : 'Show'}</button>
        </div>
        
        <div>
          <label>Blogs: </label>
          <button onClick={toggleBlogs}>{showBlogs ? 'Hide' : 'Show'}</button>
        </div>
        
        <div>
          <label>Courses: </label>
          <button onClick={() => changeCourseDisplay('list')}>List</button>
          <button onClick={() => changeCourseDisplay('grid')}>Grid</button>
          <button onClick={() => changeCourseDisplay('none')}>Hide</button>
        </div>
      </div>
      
      <div className="content">
        {bookComponent}
        
        <BlogDetails isVisible={showBlogs} />
        
        <CourseDetails displayType={courseDisplayType} />
        
        {showBooks ? 
          <div className="notification success">Book details are visible!</div> : 
          <div className="notification warning">Book details are hidden!</div>
        }
        
        {(() => {
          if (showBlogs && showBooks) {
            return <div className="notification info">Both books and blogs are showing!</div>;
          } else if (!showBlogs && !showBooks) {
            return <div className="notification error">Both books and blogs are hidden!</div>;
          } else {
            return <div className="notification">One section is visible, one is hidden.</div>;
          }
        })()}
      </div>
    </div>
  );
}

export default App;
