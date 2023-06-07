'use client';
import Link from 'next/link';
import Form from './Form';

interface PostsProps {
  title: string;
}

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
  }

  return res.json();
}

export default async function Home() {
  const data: PostsProps[] = await getPosts();

  return (
    <main className='py-4 px-48'>
      <Form />
      <hr className='w-full h-2 bg-white my-12' />
      <Link
        href='/dashboard'
        className='bg-teal-700 text-black font-medium py-2 px-4 rounded-md'
      >
        Go to the dashboard
      </Link>
      {data.map((post, key) => (
        <h1 key={`post_${key}`} className='text-lb py-6'>
          {post.title}
        </h1>
      ))}
    </main>
  );
}
