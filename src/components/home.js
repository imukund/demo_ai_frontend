import '../home.css'
import Detail from './details';
import { useNavigate } from 'react-router-dom'
import Header from './header';
function Home(){
    const navigate =useNavigate();
    return(
        <div className='home-main'>
            <Header/>
            <div className='head_ai'>AI Curated Gift Ideas</div>
            <div className='sub-head-ai'>Our AI-powered tool will guide you in choosing the perfect gift when you're unsure about what to buy. Simply fill out the form below with information about the recipient and your budget, and we'll suggest a curated list of gifts!</div>
            <div id='gift-text'>Gift Details</div>
            <div>
                <Detail name='Relationship'/>
                <Detail name='Age'/>
                <Detail name='Occasion'/>
                <Detail name='Interest'/>
                <Detail name='Budget'/>
            </div>
            <div id='button'>
                <button onClick={()=>navigate("/gift")}>Get Gift Suggestions</button>
            </div>
            <footer>
                <div className='footer-nav'>© 2017–2023 Company Name</div>
                <div className='footer-link'>
                    <ul>
                        <a href=''><li>Privacy</li></a>
                        <a href=''><li>Terms</li></a>
                        <a href=''><li>Support</li></a>
                    </ul>
                </div>
            </footer>
        </div>
    );  
}
export default Home