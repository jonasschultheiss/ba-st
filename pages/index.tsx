import { Form, Formik } from 'formik';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Products from '../components/products';
import styles from '../styles/Home.module.css';
import { IProduct } from './api/products';

const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('🚀 ~ file: index.tsx ~ line 9 ~ products', products);
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Challenge</title>
        <meta name="description" content="Code Challenge for Baker Street" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Formik
        initialValues={{
          products: [],
        }}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Products products={products} />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/products');
  const products: IProduct[] = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default Home;
