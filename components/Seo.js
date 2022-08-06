import Head from 'next/head';

export default function Seo({ title }) {
  console.log(title);
  return (
    <Head>
      <title>{title} | NextMovies</title>
    </Head>
  );
}
