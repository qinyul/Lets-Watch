import React,{useState} from "react"
import MovieList from "../movieList"
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft,faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovie, setMovie } from '../../slices/movieReducer'

const Content = () => {

    const mobile = window.innerWidth < 600;
    const dispatch = useDispatch()
    
    const movie = useSelector(selectMovie)
    const [search,setSearch] = useState(null)

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        const initialMovie = movie

        if(search == '') return 

        const fetchSearch =  async () => {
            return fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
                .then(async res => {
                    const {results} = await res.json()
                    return dispatch(setMovie(results))
                })
                .catch(err => console.error(err))
        }

        return fetchSearch()
    }

    return(
        <div className={styles.container}>
            <div className={styles.searchInputContainer}>
                <form onSubmit={(e) => searchSubmitHandler(e)}>
                    <input type="text" 
                           placeholder='Search Movie Here..' 
                           onInput={(e) => setSearch(e.currentTarget.value)} 
                    />
                    <button className={styles.searchBtn} type="submit">
                        <FontAwesomeIcon icon={faSearch} 
                                        color="rgb(186, 186, 186)" 
                                        className={styles.searchIcon} 
                        />
                    </button>
                </form>
            </div>
            <div className={styles.movieListHeaderContainer}>
                <div className={styles.movieListHeader}>
                    <h1>NEW ITEMS</h1><h1 className={styles.secondTitle}>OF THIS SEASON</h1>
                </div>
                <div className={styles.navigationContainer}>
                    <FontAwesomeIcon icon={faArrowLeft} 
                                     color="rgb(186, 186, 186)" 
                                     className={styles.searchIcon}
                                     size={mobile ? '1x' : '2x'} 
                    />
                    <FontAwesomeIcon icon={faArrowRight} 
                                     color="rgb(186, 186, 186)" 
                                     className={styles.searchIcon}
                                     size={mobile ? '1x' : '2x'} 
                    />
                    
                </div>
            </div>
            <MovieList />
        </div>
    )
}

export default Content