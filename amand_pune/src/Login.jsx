import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const onSubmit = async (data) => {
        if (!otpSent) {
            try {
                const response = await axios.get('/login', { params: { email: data.email } });
                if (response.data.success) {
                    setOtpSent(true); 
                }
            } catch (error) {
                console.error("Error sending OTP:", error);
            }
        } else {
            try {

                const response = await axios.post('/verify-otp', { email: data.email, otp });
                if (response.data.success) {
                    navigate('/home'); 
                }
            } catch (error) {
                console.error("Error verifying OTP:", error);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        {...register('email', { required: 'Email is required' })}
                        placeholder="Enter your Email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                {otpSent && (
                    <div>
                        <label htmlFor="otp">OTP</label>
                        <input
                            id="otp"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                        />
                    </div>
                )}
                <button type="submit">{otpSent ? 'Verify OTP' : 'Send OTP'}</button>
            </form>
        </>
    );
}
