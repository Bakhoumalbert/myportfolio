/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';
// pages/createPost.js
import { prisma } from '@/lib/prisma';
import { useState } from 'react';

export default async function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('');

    const session = await getAuthSession();

    const userId = session?.user.id

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const newPost = await prisma.post.create({
                data: {
                    title,
                    content,
                    type,
                    published: false,
                    // Remplacez "userId" par l'ID de l'utilisateur actuel
                    userId: userId,
                },
            });
            console.log('New post created:', newPost);
            // Redirigez ou affichez un message de succès ici
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className='w-full'>
            <form
                className='w-full'
                onSubmit={handleSubmit}
            
            >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        />
                </div>
                <Button  type="submit">Create Post</Button>
            </form>
        </div>
    );
}
