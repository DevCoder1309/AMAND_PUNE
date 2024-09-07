import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Donate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/payment', data);
      if (response.status === 200) {
        window.location.href = response.data.url; 
      } else {
        console.error("Invalid payment session response");
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      <h1>We would like you to contribute to our committee</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
            id="name" 
            {...register('name', { required: 'Name is required' })} 
            placeholder="Enter your name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            {...register('email', { required: 'Email is required' })} 
            placeholder="Enter you Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input 
            id="mobile" 
            {...register('mobile', { 
              required: 'Mobile number is required', 
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit mobile number',
              },
            })}
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p>{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input 
            id="amount" 
            type="number" 
            {...register('amount', { required: 'Amount is required', min: 1 })} 
            placeholder="Enter the amount"
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Donate;
