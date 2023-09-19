import React from 'react';
import styles from './css/OnlineOthello.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const Portfolio = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <span style={{ color: "#000000" }}>Portfolio</span>
              &gt; ポートフォリオサイト</div>
          <div className={styles.len}>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>Node.js</div>
          </div>
          <div className={styles.detail}>現在閲覧いただいているこのサイトです。とても見やすいサイトを目指しました。
          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
            このサイトは、Next.jsを使って作成しています。自分のこれまで作ってきたものをまとめるために作成しました。
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/PortfolioSite" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;