import Link from 'next/link';
import React from 'react';
import styles from './css/Portfolio.module.css';


const Portfolio = () => {
  return (
    <div className={styles.base}>
  <div className={styles.container}>
    <div className={styles.head}>
        <h1 className={styles.title}>ポートフォリオ</h1>
        <h2 className={styles.com}>頑張って作った作品たちです、<br />TypeScriptを使って作ったもののみ表示しています</h2>
    </div>
    <Link href="/OnlineOthello">
      <div className={styles.box1}>
        <div className={styles.imgholder}></div>
        <h1 className={styles.feature}>オンラインオセロ</h1>
        <p className={styles.detail}>詳細</p>
      </div>
    </Link>
    <Link href="/Gradius">
    <div className={styles.box1}>
      <div className={styles.imgholder}></div>
      <h1 className={styles.feature}>グラディウス</h1>
      <p className={styles.detail}>詳細</p>
    </div>
    </Link>
    <Link href="/ProAppo">
    <div className={styles.box1}>
      <div className={styles.imgholder}></div>
      <h1 className={styles.feature}>ProAppo</h1>
      <p className={styles.detail}>詳細</p>
    </div>
    </Link>
    <Link href="/Contact">
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className={styles.feature}>連絡あんてな</h1>
      <p className={styles.detail}>詳細</p>
    </div>
    </Link>
    <Link href="/Minesweeper">
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className={styles.feature}>マインスイーパー</h1>
      <p className={styles.detail}>詳細</p>
    </div>
    </Link>
    <Link href="/Portfolio">
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className={styles.feature}>ポートフォリオ</h1>
      <p className={styles.detail}>詳細</p>
    </div>
    </Link>
    <div className="group"></div>
  </div>
</div>
  );
};

export default Portfolio;