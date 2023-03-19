
import Categories from "@/components/categories/categories"
import FeaturedMovie from "@/components/featured-movie/featured-movie"
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import MoviesSection from "@/components/movies-section/movies-section"

const HomeContainer = () => {
    return(
        <div>
        <FeaturedMovie movie={Movies.results[0]}></FeaturedMovie>    
        <Categories categories={Genres.genres.slice(0,5)}></Categories>
        <MoviesSection title="Popular Films" movies={Movies.results.slice(1,7)}></MoviesSection>
        <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,13)}></MoviesSection>

        </div>
    )
}

export default HomeContainer