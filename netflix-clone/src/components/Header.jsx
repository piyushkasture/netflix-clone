import style from './Header.module.css';
import { useNavigate, Link} from "react-router-dom";



const Header = ({signinforloginregister}) => {
  const redirect = useNavigate()

  const clickHandler =() => {
    // e.preventDefault();
       {signinforloginregister ?  redirect('/login') : redirect('/')} 
  }
  const clickOnSubscriptionButton = () => {
    redirect('/subscription')
  }
  
  return <> <div className={style.firstheader}>
    <Link to="/">
      <img className={style.lg}src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
      </Link>
      <div className="header__nav">
        <form className={`${style.headerbttn} d-flex`} role="search">

          {signinforloginregister ? <select>
            <option>English</option>
            <option>Hindi</option>
          </select> : <button className={`${style.subscription} btn btn-primary`} onClick={clickOnSubscriptionButton}>Subscription</button>}
          
           <button  className={`${style.butn} btn btn-danger`} onClick={clickHandler}>{signinforloginregister ? <p className={style.mediaSigninAndout}>Sign In</p> : <p className={style.mediaSigninAndout}>Log out</p>}</button>

        </form>
      </div>
    </div>
  </>
};

export default Header;
