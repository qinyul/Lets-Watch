import React,{useState,useEffect} from "react"
import styles from './styles.module.css'
import ReactPaginate from 'react-paginate';
import { useSelector } from "react-redux";
import { selectMovie } from "../../slices/movieReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieList = () => {

    const movie = useSelector(selectMovie)
    const [currentItems,setCurrentItems] = useState(null)
    const [pageCount,setPageCount] = useState(0)
    const [itemOffset,setItemOffset] = useState(0)
    const [itemPerPage,setItemPerPage] = useState(10)

    useEffect(() => {
        const endOffset = itemOffset + itemPerPage
        setCurrentItems(movie?.slice(itemOffset,endOffset))
        setPageCount(Math.ceil(movie?.length / itemPerPage))

    },[movie,itemOffset,itemPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % movie.length
        setItemOffset(newOffset)
    }

    return(
        <>
        <div className={styles.container} >
            {
                !movie ? <p>Loading</p>
                       : currentItems?.map((item,i) => (
                           
                           <div className={styles.movieImageContainer} key={i}>
                            <img src={item.image_url} 
                                alt={item.title} 
                                className={styles.movieImg} 
                            />
                            <p className={styles.movieTitle}>{item.title}</p>
                            <p className={styles.movieType}>{item.type}</p>
                            <div className={styles.scoreContainer}>
                                <FontAwesomeIcon icon={faStar} 
                                        color="rgb(186, 186, 186)" 
                                        className={styles.searchIcon} 
                                />
                                <p className={styles.movieScore}>{item.score}</p>
                            </div>
                           </div>
                       ))
            }
        </div>
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName={styles.pageItem}
            pageLinkClassName="page-link"
            previousClassName={styles.paginationNavigation}
            previousLinkClassName="page-link"
            nextClassName={styles.paginationNavigation}
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={styles.pagination}
            activeClassName={styles.paginationActive}
            renderOnZeroPageCount={null}
      />
      </>

    )
}

export default MovieList