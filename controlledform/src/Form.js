import React from 'react';

function Form({ formData, handleInputChange }) {
  return (
    <form className="form">
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleInputChange} 
          placeholder="Enter your name" 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Enter your email" 
        />
      </label>
    </form>
  );
}

export default Form;


