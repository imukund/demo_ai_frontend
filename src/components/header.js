import '../header.css'
import { useNavigate } from 'react-router-dom';
function Header(){
  const navigate=useNavigate();
  function dark_theme(){
    document.body.classList.toggle("dark-theme")
    
  }
    return(
      <div className='heading'><h4>Openagent</h4>
      <div className='buttons'>
        <button id='home-button' onClick={dark_theme}><i class="bi bi-moon-stars-fill"></i></button>
        <button id='home-button' onClick={()=>navigate('/')}><i class="bi bi-house-door-fill"></i></button>
        </div>
      </div>
    );
}
export default Header;