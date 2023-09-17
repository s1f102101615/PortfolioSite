
import Link from 'next/link';
import React from 'react';
import styles from './css/About.module.css';


const About = () => {
  return (
    <div className={styles.base}>
        <div className={styles.container}>
            <div className={styles.title}>
                About me
            </div>
            <div className={styles.content}>
            情報系大学に在学している大学三年生。中学生のころからパソコンが好きで自作などをしていました。
            大学に入ってからは、プログラミング言語関連の事を学んでいましたが、本格的に創作物を作り始めたのは、
            大学3年生の5月。それからは毎日のように創作物を作っています。4か月ほどで、Webサイトの制作、
            スマホアプリ、サーバーの設定などを学び、今では自分の創作物は8個ほどになりました。
            どれも本気で作った物なので、ぜひご覧ください。<br /><br />
            </div>
            <div>
                - Github: <Link href="https://github.com/s1f102101615">https://github.com/s1f102101615</Link><br />
                - Twitter: <Link href="https://twitter.com/1000Engineer">https://twitter.com/1000Engineer</Link><br />
                - Qiita: <Link href="https://qiita.com/kd_iniad">https://qiita.com/kd_iniad</Link><br />
            </div>
        </div>
    </div>
  );
};

export default About;