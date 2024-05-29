"use client";

import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Hello World in NextJS! </h1>
      <Link href="/builder" legacyBehavior>
        <a className={styles.button}>Go to Builder's Component</a>
      </Link>
    </div>
  );
}
