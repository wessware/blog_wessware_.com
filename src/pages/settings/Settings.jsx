import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Profile_Img from '../../images/profile_img.jpg'

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Account Update</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label htmlFor=''>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src={Profile_Img} alt='profile_image'/>
                        <label htmlFor='fileInput'>
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display : 'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Wess'/>
                    <label>Email</label>
                    <input type='email' placeholder='wess@wessware.com'/>
                    <label>Password</label>
                    <input type='password' />
                    <button className='settingsUpdate'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
