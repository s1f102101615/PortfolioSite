import Link from 'next/link';
import React from 'react';
import styles from './css/Portfolio.module.css';


const Portfolio = () => {
  return (
    <div className={styles.base}>
  <div className={styles.container}>
    <h1>ポートフォリオ</h1>
    <h2>頑張って作った作品たちです</h2>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">オンラインオセロ</h1>
      <p>詳細</p>
    </div>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">グラディウス</h1>
      <p>詳細</p>
    </div>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">ProAppo</h1>
      <p>詳細</p>
    </div>
    <div className={styles.groupmargin}></div>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">連絡あんてな</h1>
      <p>詳細</p>
    </div>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">マインスイーパー</h1>
      <p>詳細</p>
    </div>
    <div className={styles.box}>
      <div className={styles.imgholder}></div>
      <h1 className="feature">ポートフォリオ</h1>
      <p>詳細</p>
    </div>
    <div className="group"></div>
  </div>
</div>
  );
};

export default Portfolio;