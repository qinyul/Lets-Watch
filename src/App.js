import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";
import {selectMovie, setMovie} from './slices/movieReducer'
import {sortMovie} from './helpers/helpers'

function App() {

  const dispatch = useDispatch()
  const movie = useSelector(selectMovie)

  useEffect(() => {

    let mounted = true
    let controller = new AbortController()

    const fetchMovie = async () => {
        return fetch('https://api.jikan.moe/v3/top/anime',{
            signal:controller.signal
        })
        .then(async res => {
            if(res.status !== 200) return fetchMovie()
            const {top} = await res.json()
            const data = sortMovie(top)
            return dispatch(setMovie(data))
        })
        .catch(err => console.error(err))
    }

    fetchMovie()

    return () => {
        mounted = false
        controller?.abort()
    }
},[])

  return (
      <div>
        {
          !movie ? <p>loading</p>
                 : <>
                     <Header />
                     <Content />
                     <Footer />
                   </>
        }
     
      </div>
  );
}

export default App;
