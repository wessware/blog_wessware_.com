import './write.css'
import Write_Img from '../../images/img-1.jpg'
export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg' src={Write_Img} alt='write_image'/>
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display: 'none'}}/>
                    <input type='text' placeholder='Title'className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'> 
                    </textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
