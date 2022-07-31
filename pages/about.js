//pages 폴더 안에 만드는 파일명이 url 주소가 된다.
//export default 필수로 넣어야 함
// import Head from "next/head"
import Seo from "../components/Seo"

export default function Potato(){
    return(
        <div>
            <Seo title="About"/>
            <h1>about</h1>
        </div>
    )
}