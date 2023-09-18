import React from 'react';
import styles from './css/OnlineOthello.module.css';
import Header from '../components/Header';

const OnlineOthello = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.title}>Portfolio &gt; オンラインオセロ</div>
          <div>使用技術</div>
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
          <div>オンラインで2人のプレイヤーが対戦出来るWebサービスです。
            ログイン後、ロビーを作成することができます。ルームに2人のプレイヤーが集まると、ゲームが開始されます。
            クイックマッチで素早く対戦を楽しむこともできます。他人の対戦も観戦することができます。
          </div>
          <div>開発動機</div>
          <div>
            ほぼ初めてのバックエンドが存在する開発経験で、リアルタイムでオンライン機能を追加する事を目標に作成をしました。
            リアルタイムが故のバグも多く、修正に苦労しましたがとても勉強になりました。
            また、オセロのアルゴリズム作成も勉強になりました。
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOthello;