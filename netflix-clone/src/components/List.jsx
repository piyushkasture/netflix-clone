import style from "./List.module.css"
import ep1 from '../images/list/ep1.jpg'
import ep2 from '../images/list/ep2.jpg'
import ep3 from '../images/list/ep3.jpg'
import ep4 from '../images/list/ep4.jpg'
import ep5 from '../images/list/ep5.jpg'
import ep6 from '../images/list/ep6.jpg'
import ep7 from '../images/list/ep7.jpg'
import ep8 from '../images/list/ep8.jpg'
import { MdOutlinePlayCircleFilled } from "react-icons/md";
// import {Carousel} from 'react-responsive-carousel';


const List =() => {

    return <>
    <div className={style.list}>
        <div className={style.row}>
            <div>
            <span className={style.episodes}>Episodes</span>
            <span className={style.nameofseries}>wednesday</span>
            </div>

            <div className={style.listItemrow}>
              

            <div className={`${style.cardwidht} card`}>
                <img src={ep1} className="card-img-top" alt="..."/>
                
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>1. Wednes-day's Child Is Full of Woe</h5>
                    <p className={`${style.cardParagraph}card-text`}>When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love.</p>
                    <a href="#" className={`${style.btttnforrow1} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
           
            <div className={`${style.cardwidht} card`}>
                <img src={ep2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>2. Woe Is the Loneliest Number</h5>
                    <p className={`${style.cardParagraph}card-text`}>The sheriff questions Wednesday about the night's strange happenings. Later, Wednesday faces off against a fierce rival in the cutthroat Poe Cup race.</p>
                    <a href="#" className={`${style.btttnforrow2} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
        
            <div className={`${style.cardwidht} card`}>
                <img src={ep3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>3. Friend or Woe</h5>
                    <p className={`${style.cardParagraph}card-text`}>Wednesday stumbles on a secret society. During Outreach Day, Nevermore's outcasts mingle with Jericho's normies in Pilgrim World. Fudge, anyone?</p>
                    <a href="#" className={`${style.btttnforrow3} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>4. Woe What a Night</h5>
                    <p className={`${style.cardParagraph}card-text`}>Wednesday asks Xavier to the Rave'N dance, sparking Tyler's jealousy — but Thing's got something up his sleeve. Meanwhile, Eugene stakes out the cave.</p>
                    <a href="#" className={`${style.btttnforrow4} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>5. You Reap What You Woe</h5>
                    <p className={`${style.cardParagraph}card-text`}>During Parents Weekend, Wednesday digs into her family's past — and accidentally gets her dad arrested. Enid feels the pressure to "wolf out."</p>
                    <a href="#" className={`${style.btttnforrow5} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep6} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>6. Quid Pro Woe</h5>
                    <p className={`${style.cardParagraph}card-text`}>Wednesday's friends throw her a surprise birthday party. They mean well... but she'd much rather mark the miserable occasion by solving the murders.</p>
                    <a href="#" className={`${style.btttnforrow6} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep7} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>7. If You Don't Woe Me by Now</h5>
                    <p className={`${style.cardParagraph}card-text`}>Kooky Uncle Fester pays a visit and shares his theory about the monster. Wednesday begrudgingly agrees to a date with Tyler at Crackstone's crypt.</p>
                    <a href="#" className={`${style.btttnforrow7} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>

            <div className={`${style.cardwidht} card`}>
                <img src={ep8} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={`${style.cardHeading} card-title`}>8. A Murder of Woes</h5>
                    <p className={`${style.cardParagraph}card-text`}>Wednesday lands in trouble with Principal Weems, but that's just the start of her problems. To fight an ancient evil, she'll need all her friends’ help.</p>
                    <a href="#" className={`${style.btttnforrow8} btn btn-outline-info`}>Play <MdOutlinePlayCircleFilled /></a>
                 </div>
            </div>
           

            </div>
            


        </div>
    </div>
    
    </>
}

export default List ;