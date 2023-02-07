import matter from 'gray-matter';
import Head  from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  // return a list of possible values for id
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post( { postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title ? postData.title : siteTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
    </Layout>
  );
};