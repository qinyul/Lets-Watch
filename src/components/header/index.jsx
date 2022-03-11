import React,{useState} from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovie, setMovie } from '../../slices/movieReducer'

const Header = () => {

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
            <div className={styles.logo}>
                <h1>Lets-Watch</h1>
            </div>
            <div className={styles.menu}>
                <p>HOME</p>
                <p>CATALOG</p>
                <p>PRICING PLAN</p>
                <p>HELP</p>
            </div>
            <div className={styles.searchContainer}>
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
                <button className={styles.signBtn}>Sign In</button>
            </div>
        </div>
    )
}

export default Header