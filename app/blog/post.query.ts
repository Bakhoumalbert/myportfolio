import { prisma } from "@/lib/prisma";

export const getAllPost = async (userId: string) => {
  return await prisma.post.findMany({
    where: {
      userId: userId,
    },
    select: {
      content: true,
      id: true,
      title: true,
      type: true,
      published: true,
      createdAt: true,
      author: true
    },
  });
};
