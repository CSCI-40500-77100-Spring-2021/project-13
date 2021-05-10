import { useState, useEffect } from 'react';
import axios from 'axios';

import Posts from './Post/Posts';
import { useAuth } from '../../AuthContext';

const URI = 'https://myday-posts.vercel.app/posts/';

const Journal = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get(URI + `${currentUser.uid}`);
    setPosts(res.data.reverse());
  };

  const addPost = async (title, body, time) => {
    await axios.post(URI, {
      uid: `${currentUser.uid}`,
      userName: `${currentUser.displayName}`,
      userEmail: `${currentUser.email}`,
      title,
      body,
      createdAt: time,
      modifiedAt: time,
    });
    fetchPosts();
  };

  const editPost = async (postId, editedTitle, editedBody, editTime) => {
    await axios.put(URI + `${currentUser.uid}/${postId}`, {
      title: editedTitle,
      body: editedBody,
      modifiedAt: editTime,
    });
    fetchPosts();
  };

  const deletePost = async (postId) => {
    await axios.delete(URI + `${currentUser.uid}/${postId}`);
    fetchPosts();
  };

  return (
    <div className="card-container">
      <Posts
        posts={posts}
        onAddPost={addPost}
        onEditPost={editPost}
        onDeletePost={deletePost}
      />
    </div>
  );
};

export default Journal;
