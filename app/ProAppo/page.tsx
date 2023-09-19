import React from 'react';
import styles from './css/OnlineOthello.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const ProAppo = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <Link href="../">
            <span style={{ color: "#000000" }}>Portfolio</span>
            </Link>
              &gt; ProAppo</div>
          <div className={styles.len}>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>Node.js</div>
            <div className={styles.skill}>PostgreSQL</div>
            <div className={styles.skill}>Frourio</div>
            <div className={styles.skill}>Firebase</div>
            <div className={styles.skill}>Docker</div>
          </div>
          <div className={styles.detail}>ProAppoはユーザー間で約束の設定をすると、お互いのお手持ちのカレンダーに約束が追加されます。
複数人での約束の共有に便利です。React-Nativeを使って作成している為、iOS,Android両方で動作します。
          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
          約束をアプリ内で交わし、お互いのカレンダーアプリに予定が入るようなアプリです。
          SNSではよくある様なQRでの友達追加機能や、地図から集合場所を設定し、マップでナビゲート、
          約束事に存在するトークルームなどを機能として追加しています。初めてのスマホアプリ作成だったのですが、
          使用感や見た目は企業レベルに作成できたと思います。<br />
          (細かい仕様はGithubリンク先のREADMEをお読みください。)
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/Re-again" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default ProAppo;