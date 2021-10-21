import Image from 'next/image';
import BackgroundImage from '../../public/Image.png';
import styles from './header.module.css';

export default function Header() {
  console.log('🚀 ~ file: header.tsx ~ line 3 ~ BackgroundImage', BackgroundImage);
  return (
    <header className={styles.header}>
      <div className={styles.image}>
        <Image src={BackgroundImage} alt="Mountains with bluish tint" layout="fill" objectFit="cover" />
      </div>
      {/* gradient */}
      <h1 className={styles.h1}>Code Challenge</h1>
      <h2 className={styles.h2}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam
      </h2>
      <div className={styles.background} />
    </header>
  );
}
