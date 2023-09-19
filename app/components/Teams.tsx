import Link from 'next/link';
import React from 'react';
import styles from './css/Teams.module.css';
import { Rowdies } from 'next/font/google';


const Teams = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>チーム開発経験</h1>
                <h2>チームとして開発したことがある物</h2>
            </div>
            <div style={{ width:1080, height: "100%", marginLeft:47}}>
                <div className={styles.col}>
                    <div style={{ flexDirection:'row', display: "flex" }}>
                        <h1 className={styles.icon}>[]</h1>
                        <div>
                            <span className={styles.feature}>マイナビでのインターン</span><span className={styles.side}> - フルスタック開発</span>
                            <p className={styles.side}>
                                8日間インターンに参加し、5人のグループのリーダーを務めました。
                            そこではAWSの構成図の作成からTypeScript+reactを使ってwebサービスの改善を行いました。
                            チームメンバーにGithubの使い方や技術を一から教えて、進行を管理し、開発では短い開発期間の中、
                            他のチームを出し抜いて制作物を上げる事が出来ました。チーム開発としては大成功であったと自負しております、
                            会社先の人からは優秀な人と言われ嬉しかったです。
                            他のチームが使わないようなNext.jsの機能やCloudGooglePlatformの連携などと実際のAWSでのデプロイが絡むと難易度が上がる開発を行えたのが良かったと思います。
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学祭での制作</span><span className={styles.side}> - シューティングゲーム</span>
                        <p className={styles.side}>
                            学校のプログラミングサークルに所属しており、学祭での制作の準備としてシューティングゲームを作りました。
                            3人チームのリーダーでした。制作物としては良いものが出来上がったのですが、
                            チームメンバーとの連携が難しく、今後のチーム開発においての反省点として、
                            チームメンバーとの連携をもっと取るべきだったと思います。
                            また、チームメンバーの技術力の差が大きかった結果、
                            その差を埋めるために自分が一人で作業をすることが多く、
                            チーム開発としては失敗でした。
                            <br />
                            <br />
                            <br />

                            </p>
                    </div>
                </div>
                </div>
                <div className={styles.group}></div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学校での授業</span><span className={styles.side}> - Wow</span>
                        <p className={styles.side}>
                        学校の2年生の後半の授業でチーム開発を行いました。4人チームのリーダーでした。
                        PythonのDjangoでのプログラミングに関しては経験が無かった物の
                        一から調べ上げてTwitterの様なSNSを作りました。
                        昔からpcを扱っているので調べると言う事に関しては自信があります。
                        発表や、チームメンバーに気を配ることができて授業の評価ではSをいただきました。
                            </p>
                    </div>
                </div>
                </div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学校での授業</span><span className={styles.side}> - Wow wow</span>
                        <p className={styles.side}>
                            学校の1年生の後半の授業でチーム開発を行いました。3人チームのリーダーでした。
                            htmlとcssで作る自己紹介サイトでした。チームメンバーにはhtmlとcssを教え、
                            3人で協力して作りました。授業では教わらないJSのライブラリを使ってアニメーションをつけたり、
                            デザインを考えたりしました。
                            こちらも授業の評価ではSをいただきました。
                            </p>
                </div>
                </div>
            </div>
            <div className={styles.group}></div>
        </div>
    </div>
    </div>
  );
};

export default Teams;