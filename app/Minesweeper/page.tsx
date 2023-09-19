import React from 'react';
import styles from './css/OnlineOthello.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const Minesweeper = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <span style={{ color: "#000000" }}>Portfolio</span>
              &gt; マインスイーパー</div>
          <div className={styles.len}>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>Node.js</div>
            <div className={styles.skill}>Frourio</div>
            <div className={styles.skill}>Firebase</div>
            <div className={styles.skill}>Docker</div>
          </div>
          <div className={styles.detail}>よくあるマインスイーパーです。初手で爆弾が出ないようにしています。
          旗を置く機能も実装しています。
          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
            TypeScriptでロジックを書くことになれるように作成したしました。中身は巷のマインスイーパーと何も変わりません。
            空白処理は再帰関数を使っています。
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/minesweeper" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;