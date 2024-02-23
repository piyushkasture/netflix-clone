// import { useEffect, useState } from "react";

// const Movies = () =>{
//     const [movieList, setMovieList] = useState([])

//     const movies = () =>{
//         fetch("https://api.themoviedb.org/3/discover/movie?api_key=7a0a4f0ee3d742ad2e0225406c4a5fd9")
//         .then(res => res.json)
//         .then(json => setMovieList(json.results))

//         }
//         useEffect(() => {
//             movies()
//         },[])

//         console.log(movieList);

//         return <div>
//             { movieList && movieList.map((getmovies) => (
//                 <img src={`https://image.tmdb.org/t/p/original${getmovies.poster_path}`}  />
//             ))}
//         </div>

// }

// export default Movies;

import { useEffect, useState } from 'react';
import {fetchingdata} from '../api/api'
import style from './Movies.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Movies = ({title, datagetfetch}) => {

    const [movielist, setMovieList] = useState([]);
    useEffect(() => {
        fetchingdata(datagetfetch).then(res => setMovieList(res.data.results))
    }, []);
    console.log(movielist)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5
      };

    return <> <div className={style.allmoviesbodyhere}>
        <div className={style.allmoviesheadhere}>
            <h2 className={style.moviestitle}>{title}</h2>
            <Slider {...settings} className={style.imagecontainer}>
        {
          movielist.map((item) => <img className={style.movielistitem} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />)
        }
            </Slider>

         </div>
     </div>
    </>

}

export default Movies;