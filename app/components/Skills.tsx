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
import next from '../../public/next-js.svg';
import react from '../../public/react-2.svg';
import nodejs from '../../public/nodejs-icon.svg';
import django from '../../public/django.svg';
import postgre from '../../public/postgresql.svg';
import mysql from '../../public/mysql-6.svg';
import linux from '../../public/tux.svg';
import docker from '../../public/docker-4.svg';
import aws from '../../public/aws-2.svg';
import github from '../../public/github-icon-1.svg';






const Skills = () => {
  return (
    <div className={styles.base}>
        <div className={styles.title}>Skill Set</div>
        <div className={styles.subtitle}>2023年9月現在</div>
        <div className={styles.subtitles}>プログラミング言語</div>
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
                <Image src={ocaml} alt="Ocaml" className={styles.now} width={50} height={50} />
            </div>
        </div>
        <div className={styles.subtitles}>フロントエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
            <Image src={next} alt="Next.js" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
            <Image src={react} alt="React" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={html} alt="Html" width={45} height={45} />
            </div>
            <div className={styles.skill1}>
                <Image src={css} alt="Css" width={45} height={45} />
            </div>
        </div>
        <div className={styles.subtitles}>バックエンド</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <Image src={nodejs} alt="Node-js" width={50} height={50} />
            </div>
            <div className={styles.skill1}>
                <Image src={django} alt="Django" width={45} height={45} />
            </div>
        </div>
        <div className={styles.subtitles}>データーベース</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <Image src={postgre} alt="PostgreSQL" width={45} height={45} />
            </div>
            <div className={styles.skill1}>
                <Image src={mysql} alt="MySQL" width={45} height={45} />
            </div>
        </div>
        <div className={styles.subtitles}>その他</div>
        <div className={styles.skill}>
            {/* 言語のアイコン */}
            <div className={styles.skill1}>
                <Image src={linux} alt="Linux" width={45} height={45} />
            </div>
            <div className={styles.skill1}>
                <Image src={docker} alt="Docker" width={45} height={45} />
            </div>
            <div className={styles.skill1}>
                <Image src={aws} alt="AWS" width={45} height={45} />
            </div>
            <div className={styles.skill1}>
                <Image src={github} alt="Github" width={45} height={45} />
            </div>

        </div>
    </div>
  );
};

export default Skills;