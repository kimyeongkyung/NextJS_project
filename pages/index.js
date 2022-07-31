//next.js에서는 react를 import 할 필요가 없다.
//단, useState, useEffect와 같은 react method 사용시에는 import 해줘야 함
// import Head from "next/head"

import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "9cac6ffbc5cfedc2bf65d29737503664";

export default function Home(){
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {results} = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();
            console.log(results)
            setMovies(results);
        })();
    },[])
    
    return(
    <div>
        <Seo title="Home"/>
        <h1 className="active">hello</h1>
        {!movies && <h4>로딩중입니다아아아</h4>}
        {/* undefined일때를 대비해 옵셔널 체이닝 */}
        {movies?.map((movie)=>(
            <div key={movie.id}>
                <h4>{movie.original_title}</h4>
            </div>
        ))}
    </div>
    );
}