import './singlepost.css'
import SPost_Image from '../../images/img-4.jpg'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img className='singlePostImg' src={SPost_Image} alt='single_post_image'/>
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet.
                    <div className='singlePostEdit'>
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author: <b>Shisia</b> </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus autem asperiores et a, rem, adipisci ullam quo soluta vitae sit culpa deleniti reprehenderit explicabo aut illo laboriosam iusto omnis molestiae eum cumque sunt maiores mollitia? Reprehenderit suscipit aut iusto totam saepe dicta fugiat qui sapiente ex dignissimos dolorum quaerat tenetur corrupti magni quibusdam, doloremque a fugit. Excepturi recusandae quod fugit id labore, ipsam porro neque, minima minus quos ea deleniti saepe architecto officia totam veritatis deserunt. Omnis ab asperiores sunt accusamus nulla perferendis ducimus voluptas sed commodi, tempore necessitatibus excepturi nostrum magni molestias, quo quam consectetur. Saepe rem quidem obcaecati?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus accusantium suscipit praesentium asperiores quo debitis culpa aliquid adipisci quisquam illum quasi quos similique voluptatem sunt est ea reiciendis, voluptatibus error unde facere dolorem? Perferendis reprehenderit ea, maxime quae doloremque, ratione, dolores enim autem est nihil pariatur impedit nulla exercitationem iure itaque explicabo similique quo ipsam quam minus quasi at dolorem libero! Minus ex nisi facilis beatae ducimus eum quidem dolorum facere mollitia veritatis, tempore in officia, odit deleniti error animi? Omnis cumque ipsum obcaecati vel praesentium totam assumenda ut culpa voluptates dolore voluptatibus, laborum rem exercitationem necessitatibus, impedit eius. Aut error quo voluptas animi vitae recusandae labore, asperiores illo pariatur quae rem cupiditate totam, laborum temporibus placeat vel quibusdam sequi?
                </p>
            </div>
        </div>
    )
}
