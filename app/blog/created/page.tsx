/* eslint-disable @next/next/no-async-client-component */
"use client"
import { Button } from '@/components/ui/button';
// pages/createPost.js
import { prisma } from '@/lib/prisma';
import { useState } from 'react';

export default async function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('');

    

    return (
        <div className='w-full'>
            <form
                className='w-full'
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
