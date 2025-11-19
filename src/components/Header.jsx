import './Header.css'
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();

    return (
      <header className="header">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/games")}>Games</button>
        <button onClick={() => navigate("/aboutus")}>About us</button>
        <button onClick={() => navigate("/login")}>Log in </button>

      </header>
    );
}
