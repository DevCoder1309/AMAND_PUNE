import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    const handleDonate = () => {
    navigate("/donate", { replace: true });
  };
    return (
    <div>
      <h1>welcome to home </h1><br /><br />
      <button onClick={handleDonate}>Contribute</button>
    </div>
  );
}