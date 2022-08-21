import Head from "next/head";
import Contact from "../compos/Contact";
import Feature from "../compos/Feature";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>YID | Homepage</title>
        <meta
          name="description"
          content="Building design, project management,property development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Feature />
        <Contact />
      </main>
    </div>
  );
}
