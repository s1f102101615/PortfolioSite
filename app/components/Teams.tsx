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
                            <p className={styles.side}>Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
                </div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学祭での制作</span><span className={styles.side}> - シューティングゲーム</span>
                        <p className={styles.side}>Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                </div>
                <div className={styles.group}></div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学校での授業</span><span className={styles.side}> - Wow</span>
                        <p className={styles.side}>Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                    </div>
                </div>
                </div>
                <div className={styles.col}>
                <div style={{ flexDirection:'row', display: "flex" }}>
                    <h1 className={styles.icon}>[]</h1>
                    <div>
                        <span className={styles.feature}>学校での授業</span><span className={styles.side}> - Wow wow</span>
                        <p className={styles.side}>Wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.group}></div>
        </div>
    </div>
  );
};

export default Teams;