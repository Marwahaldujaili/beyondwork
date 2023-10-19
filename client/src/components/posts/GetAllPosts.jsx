import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GetAllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/post/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setAllPosts(data);
        } else {
          setError("Failed to fetch posts. Please try again later.");
        }
      } catch (error) {
        setError(
          "An error occurred while fetching posts. Please try again later."
        );
      }
    };
    getAllPosts();
  }, []);

  return (
    <>
      <h2 className="posts-title">All Posts</h2>
      <div className="post-Container">
        {error ? (
          <div>Error: {error}</div>
        ) : (
          allPosts.map((item) => (
            <div key={item._id} className="postCard">
              <Link to={`/post/${item._id}`}></Link>
              <p>{item.content}</p>
              <h3>
                created by :
                <Link to={`/user/${item.createdBy._id}`}>
                  {item.createdBy.userFullName}
                </Link>
              </h3>
              <p>{item.company}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default GetAllPosts;
