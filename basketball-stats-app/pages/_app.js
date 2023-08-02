<<<<<<< HEAD
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
<<<<<<< HEAD
>>>>>>> ae63e6d (configured puppeteer to run on server-side component)
=======
>>>>>>> 343fcd0 (Rebasing issues)
>>>>>>> 3980842 (Rebasing issues)
}
