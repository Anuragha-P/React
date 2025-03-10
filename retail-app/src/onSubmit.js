import axios from 'axios';
 
const onSubmit = async data => {
  try {
const response = await axios.post('https://your-api-endpoint.com/register', data);
    // Handle successful registration, e.g., redirect to login page
  } catch (error) {
    // Handle errors, e.g., display error messages
    console.error('There was an error registering the user!', error);
  }
};