import '../gift.css'
import Header from './header'
import guitar from '../../src/guitar.jpeg'
function Gift(){
    return(
        <div className='gift-main'>
            <Header/>
            <div className='gift-head'> Gift Guide-Results</div>
            <div className='gift-sub-head'>Here are the AI curated gift ideas on your inputs:</div>
            <div className='gift-details'>
                <div className='gift-img'>
                    <div>
                        <img id='product_img' src={guitar}></img>
                    </div>
                    <div id='product_name'>
                        GUITAR
                    </div>
                </div>
                <div className='gift-description'>
                    DESCRIPTION
                    <div className='gift-desc'>
                        Price:1300<br/
                        >Condition:Good<br/>
                        Rating: <i id='star' class="bi bi-star-fill"></i><i id='star'class="bi bi-star-fill"></i><i id='star'class="bi bi-star-fill"></i><i id='star' class="bi bi-star-fill"></i><i id='star' class="bi bi-star-half"></i><br/>
                        Store rating: <i id='star' class="bi bi-star-fill"></i><i id='star'class="bi bi-star-fill"></i><i id='star'class="bi bi-star-fill"></i><i id='star' class="bi bi-star-fill"></i><i id='star' class="bi bi-star"></i><br/>
                        Store Review: Excellent<br/> 
                    </div>
                    <button id="buy-now">Buy Now</button>
                </div>
            </div>
            <footer>
                <div className='footer-nav-gift'>© 2017–2023 Company Name</div>
                <div className='footer-link'>
                    <ul>
                        <a href=''><li>Privacy</li></a>
                        <a href=''><li>Terms</li></a>
                        <a href=''><li>Support</li></a>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
export default Gift