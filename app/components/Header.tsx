import { Nanum_Gothic_Coding } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import styles from './css/Header.module.css';


const Header = () => {
  return (
    <nav className={styles.main}>
        <Link href="/">
        <div className={styles.title}>
            ポートフォリオ
        </div>
        </Link>
        <div className={styles.liall}>
            <Link href="/">
                <div>Home</div>
            </Link>
            <Link href="/#about">
                <div>About</div>
            </Link>
            <Link href="/#portfolio">
                <div>Portfolio</div>
            </Link>
            <Link href="/#skill">
                <div>Skill</div>
            </Link>
            <Link href="/#team">
                <div>Team</div>
            </Link>
        </div>
    </nav>
  );
};

export default Header;