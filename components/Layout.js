import NavBar from "./NavBar"
//children : 하나의 component를 또 다른 component안에 넣을 때 사용
export default function Layout({children}){
    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}