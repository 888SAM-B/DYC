import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized. Please log in again.");
      return;
    }

    // Fetch user profile
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:8001/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        if (response.ok) {
          setUserData({
            firstname: result.user.firstname,
            lastname: result.user.lastname,
            username: result.user.username,
          });
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Something went wrong!");
      }
    };

    // Fetch courses
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8001/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data); // Set the courses data in state
      } catch (err) {
        setError(err.message); // Capture and display any error
      }
    };

    fetchProfile();
    fetchCourses();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>First Name:</strong> {userData.firstname}
      </p>
      <p>
        <strong>Last Name:</strong> {userData.lastname}
      </p>
      <p>
        <strong>Username:</strong> {userData.username}
      </p>

      <h2>Available Courses</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.title}<br/>{course.content}</li> // Assuming each course has a "name" field
        ))}
      </ul>
    </div>
  );
};

export default Profile;
