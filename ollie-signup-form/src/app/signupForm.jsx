"use client";
import React, { useState } from "react";
import styles from "./signup.module.css"; 

const NewSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [petName, setPetName] = useState("");
  const [petWeight, setPetWeight] = useState("");
  const [idealWeight, setIdealWeight] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [petNameError, setPetNameError] = useState("");
  const [petWeightError, setPetWeightError] = useState("");
  const [idealWeightError, setIdealWeightError] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState('');


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

     const resetForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPetName('');
        setPetWeight('');
        setIdealWeight('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setPetNameError('');
        setPetWeightError('');
        setIdealWeightError('');
    };

  const onSubmitForm = (e) => {
    e.preventDefault();

    // reset submission message before new person fills out form
    setSubmissionMessage('');


    let hasError = false;

    // Email validation
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Validate pet weight to be between 3lbs and 180lbs
    if (petWeight && (petWeight < 3 || petWeight > 180)) {
      setPetWeightError("Pet weight must be between 3 lbs and 180 lbs");
      hasError = true;
    }

    // Validate ideal weight to be between 3lbs and 180lbs
    if (idealWeight && (idealWeight < 3 || idealWeight > 180)) {
      setIdealWeightError("Ideal weight must be between 3 lbs and 180 lbs");
      hasError = true;
    }

    // Check if all fields except 'Pet Ideal Weight' are filled
    if (!email) {
      setEmailError("This field is required");
      hasError = true;
    }

    if (!password) {
      setPasswordError("This field is required");
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("This field is required");
      hasError = true;
    }

    if (!petName) {
      setPetNameError("This field is required");
      hasError = true;
    }

    if (!petWeight) {
      setPetWeightError("This field is required");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // If everything is valid, log the form data
    console.log(email, password, petName, petWeight, idealWeight);

    setSubmissionMessage('Thank you!');

    resetForm();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmitForm(e);
    }
  };

  return (
    <div className={styles.signupFields}>
      <div>
        <form style={{margin: '10px 0'}} onSubmit={onSubmitForm}>
          <h2>Email: </h2>
          <input
            name="email"
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onKeyDown={onKeyDown}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </form>

        <form onSubmit={onSubmitForm} style={{margin: '10px 0'}}>
          <h2>Password: </h2>
          <input
            name="password"
            className={styles.input} 
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(""); // Clear error on input change
            }}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </form>

        <form onSubmit={onSubmitForm} style={{margin: '10px 0'}}>
          <h2>Confirm Password: </h2>
          <input
            name="confirm-password"
            className={styles.input}
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(""); // Clear error on input change
            }}
          />
          {confirmPasswordError && (
            <p style={{ color: "red" }}>{confirmPasswordError}</p>
          )}
        </form>

        <form onSubmit={onSubmitForm} style={{margin: '10px 0'}}>
          <h2>Pet Name: </h2>
          <input
            name="pet-name"
            className={styles.input}
            type="text"
            value={petName}
            onChange={(e) => {
              setPetName(e.target.value);
              setPetNameError("");
            }}
          />
          {petNameError && <p style={{ color: "red" }}>{petNameError}</p>}
        </form>

        <form onSubmit={onSubmitForm} style={{margin: '10px 0'}}>
          <h2>Pet Weight: </h2>
          <input
            name="pet-weight"
            className={styles.input}
            type="number"
            value={petWeight}
            onChange={(e) => {
              setPetWeight(e.target.value);
              setPetWeightError("");
            }}
          />
          {petWeightError && <p style={{ color: "red" }}>{petWeightError}</p>}
        </form>

        <form onSubmit={onSubmitForm} style={{margin: '10px 0'}}>
          <h2>Pet Ideal Weight: </h2>
          <input
            name="ideal-weight"
            className={styles.input} 
            type="number"
            value={idealWeight}
            onChange={(e) => {
                setIdealWeight(e.target.value)
                setIdealWeightError("");
            }}
          />
            {idealWeightError && <p style={{ color: "red" }}>{idealWeightError}</p>}
        </form>
      </div>
      <div style={{ padding: "10px" }}>
        <button type="submit"  style={{ 
            display: 'block', 
            margin: '20px auto', 
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: 'white', 
            color: 'black', 
            border: '1px solid black', 
            borderRadius: '5px', 
            cursor: 'pointer' 
        }}>Submit</button>
      </div>
      {submissionMessage && <p style={{ color: 'green', marginTop: '10px' }}>{submissionMessage}</p>}
    </div>
  );
};

export default NewSignupForm;
