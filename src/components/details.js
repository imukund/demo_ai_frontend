import '../details.css'
import './home.js'
function Detail({name}){
    return(
        <div className='detail'>
            <div className='detail-name'>
                <form action='/gift.js'>
                {name}
                <input id='detail-input' type='text' required></input>
                </form>
            </div>
        </div>
    )
}   
export default Detail