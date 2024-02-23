import style from "./BodyContain.module.css";
import img1 from '../images/netflix-bg.jpg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const BodyContain = () => {

    const redirct = useNavigate()
    const onClickHandlerbutton =() =>{
        

        if ( !valid('email' , email)) {
            setEmailChecker(valid('email' , email));          
        } 
        else{
            redirct('/register')
        }       
    }
    

    const [email , setEmail] = useState('');

    const onChangeemailHandler = (event) =>{
        setEmail(event.target.value)
    }

    //email validation

    const [emailchecker, setEmailChecker] = useState(true)
    const valid = (name, value) => {
        switch (name) {
            case 'email':
                return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
            default:
                break;
        }
    }

    return <> <div className={style.bodycontain}>

        <div className={style.bodycontainrow}>
            <h1 id={style.unlimited}>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className={style.bodycontainform}>
                <input type="text" placeholder="abc@xyz.com" value={email} onChange={onChangeemailHandler} required />
                <button className={`${style.bottn} btn btn-danger`} onClick={onClickHandlerbutton}>Get Started {">"}</button>
                { !emailchecker && <p className={`${style.invalidemail} text-danger`}>Invalid email address</p>}
            </div>

        </div>
        <div className="shadow"></div>
        <img src={img1} alt="backgrd-image" />
    </div>
    </>
}

export default BodyContain;