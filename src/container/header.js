import '../style/style.css'
import Logo from '../assets/riot-games.jpg';
import searchLogo from '../assets/search.svg'

const Header = () => {

    return(
        <div className="Container">
           <img src = {Logo} className = 'imgStyle' alt='slow internet'/>
           <button className='btn_style' >
               <text className='btn_text'>Who are we ?</text>
           </button>
           <button className='btn_style' >
               <text className='btn_text'>Work with us</text>
           </button>
           <button className='btn_style' >
               <text className='btn_text'>Work with us</text>
           </button>
           <div className='search_container'>
               <input type ='text' placeholder='search here' className='input_search'/>
               <img src = {searchLogo} className ='search_logo'  alt='slow internet'/>
           </div>
        </div>
    )
}

export default Header;