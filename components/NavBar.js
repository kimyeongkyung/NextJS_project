import Link from "next/link"
import {useRouter} from "next/router"
export default function NavBar(){
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname==="/"?"active":""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname==="/about"?"active":""}>About</a>
            </Link>
            <style jsx>{`
                a{
                    text-decoration:none;
                }
                .active{
                    color:tomato;
                }
            `}</style>
            
        </nav>
    )
}
// import Link from "next/link"
// import {useRouter} from "next/router"
// import styles from "./NavBar.module.css"
// export default function NavBar(){
//     const router = useRouter();
//     console.log(router);
//     return (
//         <nav>
//             <Link href="/">
//                 {/* a태그로 감싸주지 않아도 작동하긴 하나, style이나 class값을 적용할 수 없다 */}
//                 {/*next.js에서는 className 중복 사용이 가능함 */}
//                 <a className={`${styles.link} ${router.pathname === "/"?styles.active : ""}`}>Home</a>
//             </Link>
//             <Link href="/about">
//                 <a className={[styles.link, router.pathname === "/about"?styles.active : "",].join(" ")}>About</a>
//             </Link>
            
//         </nav>
//     )
// }