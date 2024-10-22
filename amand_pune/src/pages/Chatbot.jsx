import React, { useState } from "react";
import "./Chatbot.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = async (data) => {
        const userMessage = data.message;

        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "user", text: userMessage },
        ]);

        try {
            const response = await axios.post('http://localhost:5000/chatbot', {
                message: userMessage
            });
            const botMessage = response.data.response; 

            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "maria", text: botMessage }, 
            ]);
        } catch (error) {
            console.error('Error communicating with the chatbot:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "maria", text: "Error: Could not reach the chatbot." },
            ]);
        }

        reset(); 
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={toggleChat}>
                💬
            </button>
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Maria</h3>
                        <button onClick={toggleChat} className="close-button">✖</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div key={index} className={message.sender}>
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="chatbot-input-form">
                        <input
                            type="text"
                            {...register("message")}
                            placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
