import './sidebar.css'
import Img_three from '../images/chastity.jpg'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT WESSWARE</span>
                <img src={Img_three} alt='about_img'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti molestiae omnis placeat. Quos dolorum unde quam ut optio nemo distinctio pariatur, similique nisi nulla explicabo vel culpa sunt nam!</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>TECH</li>
                    <li className='sidebarListItem'>ART</li>
                    <li className='sidebarListItem'>CAREERS</li>
                    <li className='sidebarListItem'>POETRY</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                        <i className="sidebarIcon fab fa-linkedin"></i>
                        <i className="sidebarIcon fab fa-github-square"></i>
                </div>
            </div>
        </div>
        
    )
}

export default Sidebar
