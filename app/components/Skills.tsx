import Link from 'next/link';
import React from 'react';
import styles from './css/Skills.module.css';
import typescript from '../../public/typescript.svg';
import javascript from '../../public/javascript.svg';
import python from '../../public/python.svg';
import c from '../../public/c.svg';
import csharp from '../../public/csharp.svg';
import html from '../../public/html.svg';
import css from '../../public/css.svg';
import ocaml from '../../public/ocaml.svg';
import Image from 'next/image';


const Skills = () => {
  return (
    <div className={styles.base}>
        <div>Skill Set</div>
        <div>2023年9月現在</div>
        <div>プログラミング言語</div>
        <div>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <Image src={typescript} alt="TypeScript" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={javascript} alt="JavaScript" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={python} alt="Python" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={c} alt="C" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={csharp} alt="C#" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={html} alt="Html" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={css} alt="Css" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={ocaml} alt="Ocaml" className={styles.now} width={50} height={50} />
            </div>
        </div>
        <div>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
        </div>
        <div>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
        </div>
        <div>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
        </div>
        <div>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
            <div className={styles.skill1}>
                <div>HTML</div>
            </div>
        </div>
    </div>
  );
};

export default Skills;