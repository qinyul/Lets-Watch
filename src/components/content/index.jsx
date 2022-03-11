import MovieList from "../movieList"
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
    return(
        <div className={styles.container}>
            <div className={styles.movieListHeaderContainer}>
                <div className={styles.movieListHeader}>
                    <h1>NEW ITEMS</h1><h1 style={{fontWeight:100,marginLeft:10}}>OF THIS SEASON</h1>
                </div>
                <div className={styles.navigationContainer}>
                    <FontAwesomeIcon icon={faArrowLeft} 
                                     color="rgb(186, 186, 186)" 
                                     className={styles.searchIcon}
                                     size={'2x'} 
                    />
                    <FontAwesomeIcon icon={faArrowRight} 
                                     color="rgb(186, 186, 186)" 
                                     className={styles.searchIcon}
                                     size={'2x'} 
                    />
                    
                </div>
            </div>
            <MovieList />
        </div>
    )
}

export default Content