import React, { useState } from 'react';
import './style.css';
import Form from './Form';  

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

 
  const [isTextVisible, setIsTextVisible] = useState(false);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="app-container">
      <h1>React Form </h1>
      <h2>Toogle Visibility</h2>

      
      <Form 
        formData={formData} 
        handleInputChange={handleInputChange} 
      />

      
      <div className="output">
        <h3>Live Input Values:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>

      
      <button className="toggle-button" onClick={toggleTextVisibility}>
        {isTextVisible ? 'Hide Text' : 'Show Text'}
      </button>

      
      {isTextVisible && (
        <div className="toggle-text">
          <p> You have entered your data.</p>
        </div>
      )}
    </div>
  );
}

export default App;


