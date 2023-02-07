import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// pages/404.js

export default function Custom404() {
  return (
    <Layout>
      <div className={utilStyles.textCenter}>
        <h1 className={utilStyles.heading5Xl}>404</h1>
        <div className={utilStyles.headingXl}>
          <p>Whoa...that wasn't supposed to happen.</p>
          <p>Sorry about that!</p>
        </div>
      </div>
    </Layout>
  );
}