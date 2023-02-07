import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>My Second Post</title>
      </Head>
      <h1>This is my Second Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>
        <Link href="first-post">View my first post</Link>
      </h3>
    </Layout>
  );
}
