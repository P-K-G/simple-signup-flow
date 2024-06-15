import React, { useState } from 'react';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });
      setFirstName('');    
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="home-content">
      <h2>Enroll Here..</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>First Name:</label>
          <input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Last Name:</label>
          <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Email ID:</label>
          <input className="input" type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-box">
          <label>Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn" type="submit">Sign Up</button> {/* Changed button text to "Sign Up" */}
      </form>
    </div>
  );
};

export default SignupForm; // Corrected export statement
