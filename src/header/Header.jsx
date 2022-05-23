import './header.css'
import Image_Two from '../images/img-9.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitlesSm'>Life & Large</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={Image_Two} alt='header_image'/>
    </div>
  )
}
