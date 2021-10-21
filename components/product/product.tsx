import { Field } from 'formik';
import Image from 'next/image';
import { FC } from 'react';
import { IProduct } from '../../pages/api/products';
import styles from './product.module.css';

export default function Product(properties: IProduct): FC<IProduct> {
  const { id, image, title, description } = properties;
  console.log('🚀 ~ file: product.tsx ~ line 9 ~ Product ~ image', image);

  return (
    <label className={styles.product}>
      <Field type="checkbox" name="products" value={id} />
      <div className={styles.image}>
        <Image src={image} alt={`Image of the product "${title}"`} width="90" height="60" />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </label>
  );
}
