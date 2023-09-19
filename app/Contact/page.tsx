import React from 'react';
import styles from './css/Contact.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <span style={{ color: "#000000" }}>Portfolio</span>
              &gt; 連絡あんてな</div>
          <div className={styles.len}>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>Node.js</div>
            <div className={styles.skill}>PostgreSQL</div>
            <div className={styles.skill}>Frourio</div>
            <div className={styles.skill}>Firebase</div>
            <div className={styles.skill}>Docker</div>
            <div className={styles.skill}>Fastify</div>
            <div className={styles.skill}>Notios</div>
            <div className={styles.skill}>Prisma</div>
          </div>
          <div className={styles.detail}>ログイン不要で約束の作成、約束の共有、手持ちのカレンダーへの追加がURL一つで行えるwebサービスです。
          LocalStorageを使ってログイン不要でこれまでの約束を保存することができます。ログイン後はアカウント単位で約束を保存することができます。
          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
            調整さんライクなwebサイトになっています。これは開発期間も短く3週間くらいにはなるのですが、
            残りデプロイまで作成していて、もちろんバックエンドも作成しきっております。(APIを複数個作成しました)
            DBには約束の情報を保存するためにPostgreSQLを使用しています。フロントエンドはReactを使用しています。
            こちらもデプロイしても恥ずかしくないような出来になっているので自信のサイトです。
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/Adjust-antenna" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;