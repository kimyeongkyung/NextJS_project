import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
        <style jsx>{`
        a {
          text-decoration: none;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
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