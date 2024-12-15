import React, { useState } from "react";

const InitialTest = () => {
  const [course, setCourse] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const selectedCourse = async () => {
    const selectElement = document.querySelector("select");
    if (selectElement) {
      const selectedValue = selectElement.value;
      setCourse(selectedValue);

      // Call the backend to update the course
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Unauthorized. Please log in again.");
        return;
      }

      try {
        const response = await fetch("http://localhost:8001/update-course", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ course: selectedValue }),
        });

        const result = await response.json();

        if (response.ok) {
          setSuccessMessage(result.message);
          document.getElementById("confirmation").style.display = "block";
        } else {
          setErrorMessage(result.message || "Failed to update the course.");
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Something went wrong!");
      }
    }
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <h1>Hello from Initial Test</h1>
      <div className="selection">
        <label>Select the course from the given options</label>
        <select>
          <option value="html">HTML</option>
          <option value="js">JavaScript</option>
          <option value="css">CSS</option>
          <option value="python">PYTHON</option>
          <option value="react">React</option>
        </select>
        <input type="button" value="Submit" onClick={selectedCourse} />
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
      <div
        className="confirmation"
        id="confirmation"
        style={{
          display: "none",
          color: "black",
          top: "-1px",
          left: "-1px",
          width: "100%",
          backgroundColor: "aqua",
          height: "97vh",
          overflow: "hidden",
        }}
      >
        <div className="pop-up">
          <h1>Great!!!! Let's Start Learning {course}</h1>
          <h4>
            Let's take an initial assessment to check your prior knowledge in{" "}
            {course}
          </h4>
          <a href="/test"><input type="button" value="Start" /></a>
        </div>
      </div>
    </div>
  );
};

export default InitialTest;
