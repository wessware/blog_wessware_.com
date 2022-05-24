import './topbar.css'
import Img_One from '../../images/profile_img.jpg'


export default function TopBar() {
  return (
      <div className='top'>
         <div className='topLeft'>
             <i className='topIcon fab fa-facebook-square'></i>
             <i className='topIcon fab fa-twitter-square'></i>
             <i className='topIcon fab fa-reddit-square'></i>
             <i className='topIcon fab fa-instagram-square'></i>
         </div>
         <div className='topCenter'>
             <ul className='topList'>
                 <li className='topListItem'>Home</li>
                 <li className='topListItem'>Portfolio</li>
                 <li className='topListItem'>Contact</li>
                 <li className='topListItem'>Write</li>
                 <li className='topListItem'>Log Out</li>
             </ul>
         </div>
         <div className='topRight'>
         <img className='topImg' src={Img_One} alt='wess_image'/>
             <i className='topSearchIcon fas fa-search'></i>
         </div>
    </div>
  )
}
