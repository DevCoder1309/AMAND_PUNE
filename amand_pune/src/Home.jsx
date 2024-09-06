import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    const handleDonate = () => {
    navigate("/donate", { replace: true });
  };
    return (
    <div>
      welcome to home
      <button onClick={handleDonate}>Contribute</button>
    </div>
  );
}