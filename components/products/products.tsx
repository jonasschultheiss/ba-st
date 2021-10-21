import { FC } from 'react';
import { IProduct } from '../../pages/api/products';
import Product from '../product';
import styles from './products.module.css';

interface ProductsProperties {
  products: IProduct;
}

export default function Products(properties): FC<ProductsProperties> {
  const { products } = properties;
  return (
    <div className={styles.container}>
      <h3 className={styles.title} id="products-group">
        Products
      </h3>
      <hr className={styles.divider} />
      <div className={styles.group} role="group" aria-labelledby="products-group">
        {products && products.map((product, index) => <Product {...product} key={index} />)}
      </div>
    </div>
  );
}
