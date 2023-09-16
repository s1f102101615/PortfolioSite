import { Nanum_Gothic_Coding } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import styles from './css/Header.module.css';


const Header = () => {
  return (
    <nav className={styles.main}>
        <div>
            ポートフォリオ
        </div>
        <div className={styles.liall}>
            <Link href="/">
                <div>Home</div>
            </Link>
            <Link href="/about">
                <div>About</div>
            </Link>
            <Link href="/about">
                <div>lick</div>
            </Link>
            <Link href="/about">
                <div>god</div>
            </Link>
        </div>
    </nav>
  );
};

export default Header;