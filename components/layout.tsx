import { ReactNode } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import Header from './header';

type Props = {
    children?: ReactNode
}

export const siteTitle: string = "My knowledge database";


export default function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                {/* todo: insert site favicon */}
                <link rel="icon" href="/" />
                <meta
                    name="description"
                    content="store knowledge"
                />
                {/* todo: insert meta tag */}
            </Head>

            <Header />

            <main>
                {children}
            </main>

        </div>
    );
}
