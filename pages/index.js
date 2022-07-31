//next.js에서는 react를 import 할 필요가 없다.
//단, useState, useEffect와 같은 react method 사용시에는 import 해줘야 함
export default function Home(){
    return(
    <div>
        <h1 className="active">hello</h1>
    </div>
    );
}