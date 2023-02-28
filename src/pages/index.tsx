import Head from 'next/head';
import { Inter } from '@next/font/google';
import Title from '@/components/title/title';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <meta name="description" content="Next Boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Title text="Next Boilerplate" />
      </main>
    </>
  );
}
