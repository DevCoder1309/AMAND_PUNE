import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MembershipForm() {
  const { membershipName } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/payment', {
        membershipType: membershipName, 
        email: data.email,
      });
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
      <h1>Become a {membershipName.charAt(0).toUpperCase() + membershipName.slice(1)} Member</h1>
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
            placeholder="Enter your Email"
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MembershipForm;
