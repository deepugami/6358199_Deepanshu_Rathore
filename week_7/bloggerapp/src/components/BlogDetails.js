import React from 'react';

function BlogDetails({ isVisible }) {
  const blogs = [
    { 
      title: "React Learning", 
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    { 
      title: "Installation", 
      author: "Schewzdenier",
      content: "You can install React from npm."
    }
  ];
  
  return (
    <>
      {isVisible && (
        <div className="blog-details">
          <h2>Blog Details</h2>
          {blogs.map((blog, index) => (
            <div key={index} className="blog-item">
              <h3>{blog.title}</h3>
              <p className="author">{blog.author}</p>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BlogDetails;
