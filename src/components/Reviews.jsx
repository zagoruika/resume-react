import React, { useState, useEffect } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const variant = 9;

    async function fetchComments() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
        const data = await response.json();
        
        setComments(data); 
      } catch (error) {
        console.error("Loading error:", error);
      }
    }

    fetchComments();
  }, []);

  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[var(--line-color)] pb-[10px] flex justify-between tracking-[2px] uppercase text-[var(--main-color)] transition-all duration-400 ease-in-out">
        REVIEWS 
        <span className="opacity-60 transition-all duration-400">06</span>
      </h2>

      <div id="comments-container">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-[40px] last:mb-0">
            <span className="text-[13px] mb-[8px] block font-normal uppercase transition-colors duration-400 text-[var(--main-color)]">
              {comment.email}
            </span>
            <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">
              {comment.name}
            </h3>
            <p className="text-[16px] leading-[1.5] m-0 mb-[15px] font-light text-[var(--main-color)] transition-opacity duration-400">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;