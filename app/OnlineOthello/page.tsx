import React from 'react';
import styles from './css/OnlineOthello.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const OnlineOthello = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <span style={{ color: "#000000" }}>Portfolio</span>
              &gt; オンラインオセロ</div>
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
          <div className={styles.detail}>オンラインで2人のプレイヤーが対戦出来るWebサービスです。
            ログイン後、ロビーを作成することができ、ルームに2人のプレイヤーが集まると、ゲームが開始されます。
            クイックマッチで素早く対戦可能。他人の対戦も観戦することができます。
          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
            ほぼ初めてのバックエンドが存在する開発経験で、リアルタイムでオンライン機能を追加する事を目標に作成をしました。
            リアルタイムが故のバグも多く、修正に苦労しましたがとても勉強になりました。
            また、オセロのアルゴリズム作成も勉強になりました。
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/network-othello" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOthello;