//({내가 렌더링 하길 원하는 페이지, pageProps})
import Layout from '../components/Layout';
// import NavBar from "../components/NavBar"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <style jsx global>{`
            a{
                color:white;
            }
        `}</style> */}
    </Layout>
  );
}
