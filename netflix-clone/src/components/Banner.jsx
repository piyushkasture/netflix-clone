import style from "./Banner.module.css";
import bgim2 from '../images/wednesday.png'
// import bgim1 from '../images/weddy.jpg'


const Banner =() => {
    return <>

    <div className={style.banner}>
    {/* <img className={style.pik1} src={bgim1} alt="" /> */}
        <div className={style.bannerchibody}>
            <img className={style.wedy} src={bgim2} alt="" />
            
            <h1 className={style.bannerchiheading}>Wednesday</h1>

            <div className={style.maturitybody}>
                <span className={style.yearname}>2022</span>
                <span className={style.straghtline}>|</span>
                <span className={style.maturitySign}> U/A 13+ </span>
                <span className={style.straghtline}>|</span>
                <span className={style.seasonname}>1 Season</span>
            </div>
            
            <h1 className={style.bannerchabio}>
                <div className={style.par}>
            Smart, sarcastic and a little dead inside, Wednesday Addams investigates a  murder spree while making new friends — and foes — at Nevermore Academy. <br />
            </div>
            <div className={style.par}>
            <span className={style.starcreat}>Starring:</span> Jenna Ortega,Gwendoline Christie,Riki Lindhome <br />
            <span className={style.starcreat}>Creators:</span> Alfred Gough,Miles Millar
            </div>
            </h1>
            
            <div className={style.bannerchebuttons}>
                <button className={`${style.bannerbtton1} btn btn-outline-info`}>
                <p className={style.mediaforplayAndMylist}>Play</p></button>
                <button className={`${style.bannerbtton2} btn btn-outline-info `}>
                <p className={style.mediaforplayAndMylist}>My List</p></button>

            </div>
        </div>
        <div className={style.bannerfade}></div>
    
    </div>
    
    </>
}

export default Banner;