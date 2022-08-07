//주소창에 변수를 넣고싶을때 대괄호 사용
import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Datail({ params }) {
  const router = useRouter();
  //client-side-rendering
  const [title, id] = params || [];
  //유저가 홈페이지에서 상세페이지로 넘어올때만 title이 보임
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

//server side rendering으로 바꾸고 싶을때
export function getServerSideProps({ params: { params } }) {
  return {
    props: { params },
  };
}
