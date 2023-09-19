import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './css/Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.section} ${styles.show}`}>
      <div className={styles.slider}>
        <div className={styles.container}>
          <h1 className={styles.hero1}>KD&rsquo;sPortfolioSite</h1>
          <h2 className={styles.hero2}>
            このサイトはエンジニア志望の大学生KDポートフォリオサイトです。
            <br />
            私がこれまで作成した制作物、スキルなどをまとめています。
            <br />
            また、私のことを知っていただくために、自己紹介もしています。
            <br />
            ぜひご覧ください。
          </h2>
          <div className={styles.call}>
            <span>Wow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;