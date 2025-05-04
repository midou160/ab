import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/patients`, {
        name,
        age,
      });
      console.log(response.data);  // عرض البيانات المضافة
      setError('');  // مسح أي خطأ سابق
    } catch (err) {
      // تأكد من عدم عرض الأخطاء المربكة للمستخدم
      if (err.response && err.response.data) {
        setError('There was an issue adding the patient. Please try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h1>Add Patient</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddPatient;
