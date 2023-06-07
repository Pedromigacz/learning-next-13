import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma/client';

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') return await GetHandler(req, res);
  if (req.method === 'POST') return await PostHandler(req, res);
}

const GetHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    // Get prisma to fetch the posts
    const data = await prisma.post.findMany();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const PostHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    // Get prisma to fetch the posts
    const newPostData: postProps = JSON.parse(req.body);

    if (!newPostData.title.length)
      return res.status(400).json({ message: 'Missing required fiel title!' });

    const newPost: postProps = await prisma.post.create({
      data: {
        title: newPostData.title,
      },
    });

    // console.log(newPost);

    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating a new post' });
  }
};
