import React from 'react';
import styles from './css/Gradius.module.css';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import externallink from '../../public/externallink.svg';

const Gradius = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.base}>
        <div className={styles.content}>
          <div className={styles.photo}>画像</div>
          <div className={styles.title}>
            <span style={{ color: "#000000" }}>Portfolio</span>
              &gt; Gradius</div>
          <div className={styles.len}>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>Next.js</div>
            <div className={styles.skill}>Node.js</div>
            <div className={styles.skill}>PostgreSQL</div>
            <div className={styles.skill}>Frourio</div>
            <div className={styles.skill}>Firebase</div>
            <div className={styles.skill}>Docker</div>
            <div className={styles.skill}>Prisma</div>
          </div>
          <div className={styles.detail}>シューティングゲームグラディウスを再現したゲームです。
            シューティングゲームの基本的な機能を実装しました。パワーアップアイテムの取得、敵の出現、敵の攻撃、
            自機の攻撃、自機の移動、敵の移動、敵のパターンなどを実装しました。高い難易度を誇るゲームです。

          </div>
          <div className={styles.title2} style={{ color: "#000000" }}>開発動機</div>
          <div className={styles.detail}>
            学祭で発表する物のプロトタイプとして、個人で作成いたしました。TypeScriptでリアルタイム処理の勉強をするために作成しました。
            滑らかなanimationを実現するために、React-Konvaを利用しました。通常のプレイではDBを必要としていなかったのですが、
            ランキング機能や、ポーズ機能を実装するために、バックエンドを作成しました。1秒ごとに状態を保存している為、
            バグで落ちてしまっても復旧できるようにしました。球のスピードから計算してヒット確認をするなど、細かい部分まで作成しました。
          </div>
          <div className={styles.len2}>
            <div className={styles.skill}>Source</div>
            <Link href="https://github.com/s1f102101615/Gradius-Lonely" className={styles.skilltext}>Github</Link>
            <Image src={externallink} alt="externallink" width={20} height={20} />
          </div>
          <div className={styles.under} ></div>
        </div>
      </div>
    </div>
  );
};

export default Gradius;