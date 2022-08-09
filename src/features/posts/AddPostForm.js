import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded  } from './postsSlice'

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle]= useState('')
    const [content, setContent]=useState('')

    const handleChange=(e)=>{
        e.preventDefault();
        if(title && content){
            dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content
                })
            )
            setContent('')
            setTitle('')
        }
    }
  return (
    <div>
        <form onSubmit={handleChange}>
            <label htmlFor='postTitle'>Post Title</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label htmlFor='postContent'>Content</label>
            <input
                type="text"
                id='postContent'
                name='postContent'
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
            <button type='submit'>Save Post</button>
    
        </form>
        <h2>{title} and {content}</h2>
    </div>
  )
}
