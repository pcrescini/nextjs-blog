import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>This is my first post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      <Image
        src="/images/profile.jpg"
        height={200}
        width={145}
        alt="This is me"
        priority
      />
    </Layout>
  );
}
