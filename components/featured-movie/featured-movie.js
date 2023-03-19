const { default: Image } = require("next/image")
const { default: Link } = require("next/link")
const { FaPlus } = require("react-icons/fa")
import "./featured-movie.css"

const FeaturedMovie = ({movie ={}, isCompact = true}) => {
    const {poster_path, title, overview} = movie
    return(
        <div className="movieWrapper">
      <h1 className="movieTitle">{title}</h1>
      <p className={`overview ${isCompact ? 'shortOverview' : ' '}`}>{overview}</p>
    
    <div className="actionButtons">
     <Link className="playButton" href={`/movie/${movie.id}`}>Play</Link>   
     <button className="addButton">
       <FaPlus></FaPlus> 
     </button>
    </div>

    <div className="moviePoster">
     <div className="moviePosterOverlay"></div>
     <Image unoptimized src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} fill></Image>
    </div>


        </div>
    )
}

export default FeaturedMovie