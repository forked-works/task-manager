import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2">
        <h1 className="font-bold">Welcome to Next.js!</h1>
      </main>
    </div>
  );
}
